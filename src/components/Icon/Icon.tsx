import styled from "styled-components";
import { icons } from "../../shared/icons";
import { FC } from "react";

type Props = {
  icon: keyof typeof icons;
  block?: boolean;
};

const Svg = styled.svg<Pick<Props, "block">>`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  vertical-align: middle;

  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;

const Path = styled.path`
  fill: currentColor;
`;

export const Icon: FC<Props> = ({ icon, block }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width="20px" height="20px" block={block}>
      <Path d={icons[icon]} />
    </Svg>
  );
};
