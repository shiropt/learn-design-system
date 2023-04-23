import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Design System/Button",
  component: Button,
  args: {
    isLoading: false,
    loadingText: "loading...",
    isLink: false,
    appearance: "primary",
    isDisabled: false,
    isUnclickable: false,
    containsIcon: false,
    size: "medium",
    onClick: () => {},
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args}>Default</Button>,
};
export const AllButtons: Story = {
  render: (args) => (
    <div>
      <p>appearance</p>
      <Button {...args}>Primary</Button>
      <Button {...args} appearance="secondary">
        Secondary
      </Button>
      <Button {...args} appearance="tertiary">
        Tertiary
      </Button>
      <Button {...args} appearance="outline">
        Outline
      </Button>
      <Button {...args} appearance="primaryOutline">
        Outline primary
      </Button>
      <Button {...args} appearance="secondaryOutline">
        Outline secondary
      </Button>
      <Button {...args} appearance="primary" isDisabled>
        Disabled
      </Button>
      <hr></hr>
      <p>loading</p>
      <Button {...args} isLoading>
        Primary
      </Button>
      <Button {...args} isLoading appearance="secondary">
        Secondary
      </Button>
      <Button {...args} isLoading appearance="tertiary">
        Tertiary
      </Button>
      <Button {...args} isLoading appearance="outline">
        Outline
      </Button>
      <Button {...args} isLoading appearance="primaryOutline">
        Outline primary
      </Button>
      <Button {...args} isLoading appearance="secondaryOutline">
        Outline secondary
      </Button>
      <Button {...args} isLoading appearance="primary" isDisabled>
        Disabled
      </Button>
      <hr></hr>
      <p>small size</p>
      <Button {...args} size="small">
        Primary
      </Button>
      <Button {...args} size="small" appearance="secondary">
        Secondary
      </Button>
      <Button {...args} size="small" appearance="tertiary">
        Tertiary
      </Button>
      <Button {...args} size="small" appearance="outline">
        Outline
      </Button>
      <Button {...args} size="small" appearance="primaryOutline">
        Outline primary
      </Button>
      <Button {...args} size="small" appearance="secondaryOutline">
        Outline secondary
      </Button>
      <Button {...args} size="small" appearance="primary" isDisabled>
        Disabled
      </Button>
    </div>
  ),
};
