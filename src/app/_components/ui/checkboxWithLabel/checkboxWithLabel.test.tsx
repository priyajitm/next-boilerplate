import { render, screen } from "@testing-library/react";
import { CheckboxWithLabel } from "./CheckboxWithLabel";

describe("CheckboxWithLabel", () => {
  it("renders with correct label", () => {
    render(<CheckboxWithLabel label="Test" id="test" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
