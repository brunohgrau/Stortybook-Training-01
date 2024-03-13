import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

// Default Export
const meta = {
  title: "Components/Atomic/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};

export const Red: Story = {
  args: {
    backgroundColor: "red",
    label: "Button",
  },
};

Red.argTypes = {
  backgroundColor: {
    control: "inline-radio",
    options: ["red", "green", "blue"],
  },
};
