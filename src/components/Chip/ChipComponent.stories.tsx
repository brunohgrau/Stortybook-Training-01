import type { Meta, StoryObj } from "@storybook/react";
import ChipComponent from "./ChipComponent";

const meta = {
  title: "Components/Chip",
  component: ChipComponent,
  tags: ["autodocs"],
} satisfies Meta<typeof ChipComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Comfort Food",
  },
};
