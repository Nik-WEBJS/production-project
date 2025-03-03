import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, ThemeButton } from "./Button";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};

export const Clear: Story = {
  args: {
    children: "Clear",
    theme: ThemeButton.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    theme: ThemeButton.OUTLINE,
  },
};
