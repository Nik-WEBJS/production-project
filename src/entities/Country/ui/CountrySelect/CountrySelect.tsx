import React, { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const option = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Russia, content: Country.Russia },
];

export const CountrySelect = memo(
  ({ className, onChange, value, readonly }: CountrySelectProps) => {
    const { t } = useTranslation();

    const handlerChange = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange]
    );

    return (
      <Select
        label={"Укажите страну"}
        options={option}
        value={value}
        onChange={handlerChange}
        readonly={readonly}
      />
    );
  }
);
