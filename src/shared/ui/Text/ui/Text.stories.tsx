import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextTheme } from "./Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Text> = {
  title: "shared/Text",
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    title: "Title",
    text: "Text",
  },
};

export const onlyTitle: Story = {
  args: {
    title: "Title",
  },
};

export const onlyText: Story = {
  args: {
    text: "Text",
  },
};

export const Error: Story = {
  args: {
    text: "Text default error",
    title: "Title default error",
    theme: TextTheme.ERROR,
  },
};

export const DarkDefault: Story = {
  args: {
    title: "Title",
    text: "Text",
  },
};
DarkDefault.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkonlyTitle: Story = {
  args: {
    title: "Title",
  },
};
DarkonlyTitle.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkonlyText: Story = {
  args: {
    text: "Text",
  },
};
DarkonlyText.decorators = [ThemeDecorator(Theme.DARK)];
