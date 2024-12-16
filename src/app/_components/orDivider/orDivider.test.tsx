import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { OrDivider } from "./orDivider";

describe("OrDivider", () => {
  it("renders with the correct label", () => {
    render(<OrDivider label="or" />);
    const label = screen.getByText("or");
    expect(label).toBeInTheDocument();
  });

  it("renders divider lines", () => {
    const { container } = render(<OrDivider label="or" />);
    const dividers = container.getElementsByClassName("bg-gray-200");
    expect(dividers).toHaveLength(2);
  });
});
