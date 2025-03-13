import React, { CSSProperties, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Avatar.module.scss";
import { useTranslation } from "react-i18next";

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
}

export const Avatar = ({ className, src, size }: AvatarProps) => {
  const { t } = useTranslation();

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size || 100,
      height: size || 100,
    };
  }, [size]);

  return (
    <img
      src={src}
      alt="avatar"
      style={styles}
      className={classNames(cls.Avatar, {}, [className])}
    ></img>
  );
};
