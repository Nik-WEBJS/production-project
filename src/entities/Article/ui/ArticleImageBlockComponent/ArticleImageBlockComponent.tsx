import React, { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleImageBlockComponent.module.scss";
import { useTranslation } from "react-i18next";
import { ArticleImageBlock } from "entities/Article/module/types/article";
import { Text, TextAlign } from "shared/ui/Text/ui/Text";

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  ({ className, block }: ArticleImageBlockComponentProps) => {
    const { t } = useTranslation();
    return (
      <div
        className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
      >
        <img src={block.src} alt="" />
        {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
      </div>
    );
  }
);
