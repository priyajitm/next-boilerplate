import { render, screen } from "@testing-library/react";
import { ButtonWithIcon } from "./buttonWithIcon";

describe("ButtonWithIcon", () => {
  it("renders with correct label", () => {
    render(<ButtonWithIcon label="Test" icon={<div>Icon</div>} />);
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByText("Icon")).toBeInTheDocument();
  });
});
