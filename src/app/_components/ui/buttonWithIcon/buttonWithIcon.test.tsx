import { render, screen } from "@testing-library/react";
import { ButtonWithIcon } from "./ButtonWithIcon";

describe("ButtonWithIcon", () => {
  it("renders with correct label", () => {
    render(<ButtonWithIcon label="Test" icon={<div>Icon</div>} />);
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByText("Icon")).toBeInTheDocument();
  });
});
