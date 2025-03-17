import { memo, useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleDetail.module.scss";
import { useTranslation } from "react-i18next";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "entities/Article/module/slice/articleDateailsSlice";
import { fetchArticleById } from "entities/Article/module/services/fetchArticleById/fetchArticleById";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "entities/Article/module/selectors/articleDetails";
import { Text, TextAlign } from "shared/ui/Text/ui/Text";

interface ArticleDetailProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetail = memo(({ className, id }: ArticleDetailProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const data = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = <div>...Loading</div>;
  } else if (error) {
    content = <Text align={TextAlign.CENTER} title={"Произошла ошибка"} />;
  } else {
    content = <div>ArticleDetail</div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetail, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
