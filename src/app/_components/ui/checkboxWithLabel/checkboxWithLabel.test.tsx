import { render, screen } from "@testing-library/react";
import { CheckboxWithLabel } from "./checkboxWithLabel";

describe("CheckboxWithLabel", () => {
  it("renders with correct label", () => {
    render(<CheckboxWithLabel label="Test" id="test" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
