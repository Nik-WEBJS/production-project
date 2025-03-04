import React from "react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import { ThemeContext } from "../../../../app/providers/ThemeProvider/lib/ThemeContext";

export const ThemeDecorator = (theme: Theme) => (Story: any) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
