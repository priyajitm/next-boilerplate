import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import Login from "./page";
import {
  loginConfig,
  OAuthProviders,
  signupConfig,
} from "@/app/_config/auth.config";
import { renderWithProviders } from "@/app/_config/testWrapper";

jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
  Link: ({ children }: { children: React.ReactNode }) => children,
  NextIntlClientProvider: ({ children }: { children: React.ReactNode }) =>
    children,
}));

describe("Login Page", () => {
  it("renders all main components correctly", () => {
    renderWithProviders(<Login />);

    expect(screen.getByText("title", { selector: "p" })).toBeInTheDocument();
    expect(screen.getByText("description")).toBeInTheDocument();

    Object.entries(signupConfig.oauth)
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
      expect(
        screen.getByLabelText(
          fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
        )
      ).toBeInTheDocument();
    });

    expect(screen.getByRole("button", { name: "button" })).toBeInTheDocument();

    expect(screen.getByText("noAccount")).toBeInTheDocument();
    expect(screen.getByText("signupLink")).toBeInTheDocument();
  });

  it("renders signup page when clicking signup link", () => {
    renderWithProviders(<Login />);

    const signupLink = screen.getByText("signupLink");
    fireEvent.click(signupLink);

    expect(screen.getByText("signupLink")).toBeInTheDocument();
  });

  /* 
  TODO:
  - Test form submission
  - Test OAuth button clicks
  - Test error states
  - Test loading states
  */
});
