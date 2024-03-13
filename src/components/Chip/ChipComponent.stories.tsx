import type { Meta, StoryObj } from "@storybook/react";
import ChipComponent from "./ChipComponent";

const meta = {
  title: "Components/Chip",
  component: ChipComponent,
} satisfies Meta<typeof ChipComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Comfort Food",
  },
};
