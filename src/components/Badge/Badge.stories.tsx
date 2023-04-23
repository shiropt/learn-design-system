import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Design System/Badge",
  component: Badge,
  args: { status: "neutral" },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: (args) => <Badge {...args} />,
};

export const AllBadges: Story = {
  render: () => (
    <div>
      <Badge status="positive" />
      <Badge status="negative" />
      <Badge status="neutral" />
      <Badge status="error" />
      <Badge status="warning" />
    </div>
  ),
};
