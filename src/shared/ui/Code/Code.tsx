import React, { useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Code.module.scss";
import { Button, ThemeButton } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import CopyIcon from "shared/assets/icons/copy-20-20.svg";

interface CodeProps {
  className?: string;
  children: string;
}

export const Code = ({ className, children }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(children);
  }, [children]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button
        className={cls.copyBtn}
        onClick={onCopy}
        theme={ThemeButton.CLEAR}
      >
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{children}</code>
    </pre>
  );
};
