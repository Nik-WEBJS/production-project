import React, { ChangeEvent, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Select.module.scss";
import { useTranslation } from "react-i18next";

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  readonly?: boolean 
  onChange?: (value: string) => void;
}

export const Select = ({
  className,
  label,
  options,
  readonly,
  onChange,
  value,
}: SelectProps) => {
  const { t } = useTranslation();

  const optionList = useMemo(() => {
    return options?.map((opt) => (
      <option key={opt.value} value={opt.value} className={cls.option}>
        {opt.content}
      </option>
    ));
  }, [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.Select, {}, [className])}>
      {label && <span className={cls.label}>{label + ">"}</span>}
      <select value={value} onChange={onChangeHandler} className={cls.select} disabled={readonly}>
        {optionList}
      </select>
    </div>
  );
};
