import React, { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleCodeBlockComponent.module.scss";
import { useTranslation } from "react-i18next";
import { ArticleCodeBlock } from "entities/Article/module/types/article";
import { Code } from "shared/ui/Code/Code";

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
  ({ className, block }: ArticleCodeBlockComponentProps) => {
    const { t } = useTranslation();
    return (
      <div
        className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}
      >
        <Code>{block.code}</Code>
      </div>
    );
  }
);
