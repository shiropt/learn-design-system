import { Button } from "./Button";
import type { Props } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import { Icon } from "../Icon/Icon";
import { StoryLinkWrapper } from "../StoryLinkWrapper/StoryLinkWrapper";

const CustomButton = styled.button`
  border: 1px solid green;
  background: lightgreen;
  color: rebeccapurple;
  padding: 1em;
  font-size: 1.2em;
`;
const ButtonWrapper = (props: Props) => {
  return <CustomButton {...props} />;
};
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
export const buttonWrapper: Story = {
  render: (args) => (
    <div>
      <ButtonWrapper {...args}>Original Button Wrapper</ButtonWrapper>
      <br />
      <Button {...args} ButtonWrapper={ButtonWrapper} appearance="primary">
        Primary
      </Button>
      <Button {...args} ButtonWrapper={ButtonWrapper} appearance="secondary">
        Secondary
      </Button>
      <Button {...args} ButtonWrapper={ButtonWrapper} appearance="tertiary">
        Tertiary
      </Button>
      <Button {...args} ButtonWrapper={ButtonWrapper} appearance="outline">
        Outline
      </Button>
      <Button {...args} ButtonWrapper={ButtonWrapper} appearance="primaryOutline">
        Outline primary
      </Button>
      <Button {...args} ButtonWrapper={ButtonWrapper} appearance="secondaryOutline">
        Outline secondary
      </Button>
      <Button {...args} ButtonWrapper={ButtonWrapper} appearance="primary" isDisabled>
        Disabled
      </Button>
      <br />
      <Button {...args} appearance="primary" size="small">
        Primary
      </Button>
      <Button {...args} appearance="secondary" size="small">
        Secondary
      </Button>
      <Button {...args} appearance="tertiary" size="small">
        Tertiary
      </Button>
      <Button {...args} appearance="outline" size="small">
        Outline
      </Button>
      <Button {...args} appearance="primary" isDisabled size="small">
        Disabled
      </Button>
      <Button {...args} appearance="outline" size="small" containsIcon>
        <Icon icon="link" aria-label="Link" />
      </Button>
      <Button {...args} appearance="outline" size="small">
        <Icon icon="link" />
        Link
      </Button>
    </div>
  ),
};
