import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleDetailsPage.module.scss";
import { useTranslation } from "react-i18next";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation("article");
  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      ArticleDetailsPage
    </div>
  );
};

export default ArticleDetailsPage;
