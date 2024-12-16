import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./page";
import { loginConfig, OAuthProviders } from "@/app/_config/auth.config";

describe("Login Page", () => {
  it("renders all main components correctly", () => {
    render(<Login />);

    expect(screen.getByText("Login", { selector: "p" })).toBeInTheDocument();
    expect(
      screen.getByText("Please fill in the details to login to your account")
    ).toBeInTheDocument();

    Object.entries(loginConfig.oauth)
      .filter(([, enabled]) => enabled)
      .forEach(([provider]) => {
        expect(
          screen.getByText(OAuthProviders[provider].label)
        ).toBeInTheDocument();
      });

    if (loginConfig.options.showDivider) {
      expect(screen.getByText("or")).toBeInTheDocument();
    }

    Object.entries(loginConfig.fields).forEach(([fieldName]) => {
      expect(screen.getByLabelText(fieldName)).toBeInTheDocument();
    });

    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();

    expect(screen.getByText("Already have an account?")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });

  it("renders signup page when clicking signup link", () => {
    render(<Login />);

    const signupLink = screen.getByText("Sign Up");
    fireEvent.click(signupLink);

    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });

  /* 
  TODO:
  - Test form submission
  - Test OAuth button clicks
  - Test error states
  - Test loading states
  */
});
