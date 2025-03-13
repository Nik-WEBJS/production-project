import { memo } from "react";
import cls from "./SideBarItem.module.scss";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "../model/items";
import { classNames } from "shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";

interface SideBarItemProps {
  item?: SidebarItemType;
  collapsed: boolean;
}

export const SideBarItem = memo(({ collapsed, item }: SideBarItemProps) => {
  const { t } = useTranslation();
  if (!item) {
    return null;
  }

  const isAuth = useSelector(getUserAuthData);  

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
    >
      <item.icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});
