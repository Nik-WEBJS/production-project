import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticlePage.module.scss";
import { useTranslation } from "react-i18next";

interface ArticlePageProps {
  className?: string;
}

export const ArticlePage = ({ className }: ArticlePageProps) => {
  const { t } = useTranslation("article");
  return (
    <div className={classNames(cls.ArticlePage, {}, [className])}>
      ArticlePage
    </div>
  );
};

export default ArticlePage;
