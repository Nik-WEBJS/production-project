import React, { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./CommentCard.module.scss";
import { Comment } from "entities/Comment/model/types/comment";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/ui/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo(
  ({ className, comment, isLoading }: CommentCardProps) => {
    if (isLoading) {
      return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
          <div className={cls.header}>
            <Skeleton height={30} width={30} border="50%" />
            <Skeleton height={16} width={100} className={cls.username} />
          </div>
          <Skeleton className={cls.text} width={"100%"} height={50} />
        </div>
      );
    }

    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          {comment.user.avatar ? (
            <Avatar size={30} src={comment.user.avatar} />
          ) : null}
          <Text className={cls.username} title={comment.user.username} />
        </div>
        <Text className={cls.text} text={comment.text} />
      </div>
    );
  }
);
