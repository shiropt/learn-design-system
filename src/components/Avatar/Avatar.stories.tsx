import { Avatar } from "./Avatar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Avatar> = {
  title: "Design System/Avatar",
  component: Avatar,
  args: {
    loading: false,
    size: "medium",
    username: "Tom Coleman",
    src: "https://avatars2.githubusercontent.com/u/132554",
  },
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Standard: Story = {
  render: (args) => <Avatar {...args} />,
};

export const Sizes: Story = {
  render: (args) => (
    <div>
      <Avatar {...args} size="tiny" />
      <Avatar {...args} size="small" />
      <Avatar {...args} size="medium" />
      <Avatar {...args} size="large" />
    </div>
  ),
};
