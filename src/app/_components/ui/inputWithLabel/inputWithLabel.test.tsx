import { render, screen } from "@testing-library/react";
import { InputWithLabel } from "./InputWithLabel";

describe("InputWithLabel", () => {
  it("renders with correct label", () => {
    render(<InputWithLabel label="Test" id="test" type="text" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
