import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { signupConfig, OAuthProviders } from "@/app/_config/auth.config";
import Signup from "./page";
import { renderWithProviders } from "@/app/_config/testWrapper";

jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
  Link: ({ children }: { children: React.ReactNode }) => children,
  NextIntlClientProvider: ({ children }: { children: React.ReactNode }) =>
    children,
}));

describe("Signup Page", () => {
  it("renders all main components correctly", () => {
    renderWithProviders(<Signup />);

    expect(screen.getByText("title", { selector: "p" })).toBeInTheDocument();
    expect(screen.getByText("description")).toBeInTheDocument();

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
      expect(
        screen.getByLabelText(
          fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
        )
      ).toBeInTheDocument();
    });

    expect(screen.getByRole("button", { name: "button" })).toBeInTheDocument();

    expect(screen.getByText("haveAccount")).toBeInTheDocument();
    expect(screen.getByText("loginLink")).toBeInTheDocument();
  });

  it("renders login page when clicking login link", () => {
    renderWithProviders(<Signup />);

    const loginLink = screen.getByText("loginLink");
    fireEvent.click(loginLink);

    expect(screen.getByText("loginLink")).toBeInTheDocument();
  });
});
