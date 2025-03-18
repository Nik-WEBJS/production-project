import React, { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./CommentList.module.scss";
import { Text } from "shared/ui/Text/ui/Text";
import { CommentCard } from "../CommentCard/CommentCard";
import { Comment } from "entities/Comment/model/types/comment";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(
  ({ className, comments, isLoading }: CommentListProps) => {
    return (
      <div className={classNames(cls.CommentList, {}, [className])}>
        {comments?.length ? (
          comments.map((comment) => (
            <CommentCard
              key={comment.id}
              isLoading={isLoading}
              className={cls.comment}
              comment={comment}
            />
          ))
        ) : (
          <Text text={"Комментарии отсутствуют"} />
        )}
      </div>
    );
  }
);
