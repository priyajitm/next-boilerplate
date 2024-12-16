import { fireEvent, render, screen } from "@testing-library/react";
import { signupConfig, OAuthProviders } from "@/app/_config/auth.config";
import Signup from "./page";

describe("Signup Page", () => {
  it("renders all main components correctly", () => {
    render(<Signup />);

    expect(screen.getByText("Sign Up", { selector: "p" })).toBeInTheDocument();
    expect(
      screen.getByText("Please fill in the details to create an account")
    ).toBeInTheDocument();

    Object.entries(signupConfig.oauth)
      .filter(([, enabled]) => enabled)
      .forEach(([provider]) => {
        expect(
          screen.getByText(OAuthProviders[provider].label)
        ).toBeInTheDocument();
      });

    if (signupConfig.options.showDivider) {
      expect(screen.getByText("or")).toBeInTheDocument();
    }

    Object.entries(signupConfig.fields).forEach(([fieldName, enabled]) => {
      if (!enabled) return;
      expect(screen.getByLabelText(fieldName)).toBeInTheDocument();
    });

    expect(
      screen.getByRole("button", { name: /sign up/i })
    ).toBeInTheDocument();

    expect(screen.getByText("Already have an account?")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("renders login page when clicking login link", () => {
    render(<Signup />);

    const loginLink = screen.getByText("Login");
    fireEvent.click(loginLink);

    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
