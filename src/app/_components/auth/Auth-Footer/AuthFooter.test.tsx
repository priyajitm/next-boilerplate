import { render, screen } from "@testing-library/react";
import { AuthFooter } from "./AuthFooter";

describe("AuthFooter", () => {
  it("renders with correct content and link", () => {
    render(
      <AuthFooter
        content="Footer Content"
        linkText="Footer Link"
        linkHref="/footer-link"
      />
    );

    expect(screen.getByText("Footer Content")).toBeInTheDocument();
    expect(screen.getByText("Footer Link")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/footer-link");
  });
});
