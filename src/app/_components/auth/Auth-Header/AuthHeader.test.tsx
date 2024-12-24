import { render, screen } from "@testing-library/react";
import { AuthHeader } from "./AuthHeader";

describe("AuthHeader", () => {
  it("renders with correct title and description", () => {
    render(
      <AuthHeader title="Header Title" description="Header Description" />
    );

    expect(screen.getByText("Header Title")).toBeInTheDocument();
    expect(screen.getByText("Header Description")).toBeInTheDocument();
  });
});
