import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SideBar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { memo, useState } from "react";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { Button, ButtonSize, ThemeButton } from "shared/ui/Button/Button";
import { SidebarItemList } from "../model/items";
import { SideBarItem } from "../SideBarItem/SideBarItem";

interface SideBarProps {
  className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [test, setTest] = useState(0);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        size={ButtonSize.XL}
        square
      >
        {collapsed ? ">" : "<"}
      </Button>

      <div className={cls.items}>
        <button onClick={() => setTest(test + 1)}>teest</button>
        {SidebarItemList.map((item) => (
          <SideBarItem item={item} key={item.path} collapsed={collapsed} />
        ))}
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
});
