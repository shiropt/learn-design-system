import type { Meta } from "@storybook/react";
import styled, { css } from "styled-components";

import { Icon } from "./Icon";
import { icons } from "../../shared/icons";
const meta: Meta<typeof Icon> = {
  title: "Design System/Icon",
  component: Icon,
};
export default meta;

const Div = styled.div`
  color: #666;
  font-size: 12px;
`;

const Item = styled.li<{ minimal: boolean }>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 20%;
  min-width: 120px;

  padding: 0px 7.5px 20px;

  svg {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }

  ${(props) =>
    props.minimal &&
    css`
      flex: none;
      min-width: auto;
      padding: 0;
      background: #fff;
      border: 1px solid #666;

      svg {
        display: block;
        margin-right: 0;
        width: 48px;
        height: 48px;
      }
    `};
`;

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
`;

export const Labels = () => (
  <>
    There are {Object.keys(icons).length} icons
    <List>
      {(Object.keys(icons) as (keyof typeof icons)[]).map((key) => (
        <Item minimal={false} key={key}>
          <Icon icon={key} aria-hidden />
          <Div>{key}</Div>
        </Item>
      ))}
    </List>
  </>
);

export const NoLabels = () => (
  <List>
    {(Object.keys(icons) as (keyof typeof icons)[]).map((key) => (
      <Item minimal key={key}>
        <Icon icon={key} aria-label={key} />
      </Item>
    ))}
  </List>
);

export const Inline = () => (
  <>
    this is an inline <Icon icon="facehappy" aria-label="Happy face" /> icon (default)
  </>
);
export const Block = () => (
  <>
    this is a block <Icon icon="facehappy" aria-label="Happy face" block /> icon
  </>
);
