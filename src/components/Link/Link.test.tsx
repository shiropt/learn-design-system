import { render, screen } from "@testing-library/react";
import { Link } from "./Link";

test("has a href attribute when rendering with linkWrapper", () => {
  const LinkWrapper = (props: any) => <a {...props} />;
  render(
    <Link href="https://storybook.js.org/tutorials/" LinkWrapper={LinkWrapper}>
      Link Text
    </Link>
  );

  const linkElement = screen.getByRole("link");
  expect(linkElement).not.toBeNull();
  expect(linkElement.textContent).toEqual("Link Text");
});
