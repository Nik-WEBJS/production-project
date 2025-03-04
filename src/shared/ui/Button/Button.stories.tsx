import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonSize, ThemeButton } from "./Button";

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

export const OutlineSizeL: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.L,
  },
};

export const OutlineSizeXL: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.XL,
  },
};

export const Background: Story = {
  args: {
    children: "Background",
    theme: ThemeButton.BACKGROUND,
  },
};

export const BackgroundInverted: Story = {
  args: {
    children: "BackgroundInverted",
    theme: ThemeButton.BACKGROUND_INVERTED,
  },
};

export const Square: Story = {
  args: {
    children: ">",
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
  },
};

export const SquareSizeL: Story = {
  args: {
    children: ">",
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
};

export const SquareSizeXL: Story = {
  args: {
    children: ">",
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
};
