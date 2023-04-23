import { FC, ReactNode, SyntheticEvent } from "react";
import { action } from "@storybook/addon-actions";

const fireClickAction = action("onLinkClick");

type Props = {
  children: ReactNode;
  className: string;
  href: string;
  onClick: () => void;
  to: string;
};

export const StoryLinkWrapper: FC<Props> = ({ children, className, href, onClick, to, ...rest }) => {
  const modifiedOnClick = (event: SyntheticEvent) => {
    event.preventDefault();
    // onClick();
    fireClickAction(href || to);
  };

  return (
    <a className={className} href={href || to} onClick={modifiedOnClick} {...rest}>
      {children}
    </a>
  );
};
