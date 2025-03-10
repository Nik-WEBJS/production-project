import { memo } from "react";
import cls from "./SideBarItem.module.scss";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "../model/items";
import { classNames } from "shared/lib/classNames/classNames";

interface SideBarItemProps {
  item?: SidebarItemType;
  collapsed: boolean;
}

export const SideBarItem = memo(({ collapsed, item }: SideBarItemProps) => {
  const { t } = useTranslation();
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
