import React from "react";
import Heading from "@components/home/Heading";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("should render header component and text", () => {
  it("renders the main heading", () => {
    const HEADING = render(<Heading />);

    const mainHeading = HEADING.getByTestId("home-heading");
    expect(mainHeading).toHaveTextContent("Discover Your Next Favorite Song:");
  });

  it("renders the subheading", () => {
    const HEADING = render(<Heading />);

    const subHeading = HEADING.getByTestId("home-subheading");
    expect(subHeading).toHaveTextContent(
      "Create a personalised music experience by searching for your favorite artist..."
    );
  });
});
