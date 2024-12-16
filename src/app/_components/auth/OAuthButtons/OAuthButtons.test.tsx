import { render, screen } from "@testing-library/react";
import { OAuthButtons } from "./OAuthButtons";

const MockGoogleIcon = () => <div data-testid="google-icon">Google Icon</div>;
const MockGithubIcon = () => <div data-testid="github-icon">Github Icon</div>;

const MockProviders = {
  google: {
    label: "Google",
    icon: MockGoogleIcon,
  },
  github: {
    label: "Github",
    icon: MockGithubIcon,
  },
};

describe("OAuthButtons", () => {
  it("renders nothing when all providers are disabled", () => {
    const oauthConfig = {
      google: false,
      github: false,
    };

    const { container } = render(
      <OAuthButtons oauthConfig={oauthConfig} providers={MockProviders} />
    );

    expect(container.firstChild).toBeNull();
  });

  it("renders only enabled providers", () => {
    const oauthConfig = {
      google: true,
      github: false,
    };

    render(
      <OAuthButtons oauthConfig={oauthConfig} providers={MockProviders} />
    );

    expect(screen.getByText("Google")).toBeInTheDocument();
    expect(screen.getByTestId("google-icon")).toBeInTheDocument();

    expect(screen.queryByText("GitHub")).not.toBeInTheDocument();
    expect(screen.queryByTestId("github-icon")).not.toBeInTheDocument();
  });

  it("handles empty provider configuration", () => {
    const oauthConfig = {};
    const emptyProviders = {};

    const { container } = render(
      <OAuthButtons oauthConfig={oauthConfig} providers={emptyProviders} />
    );

    expect(container.firstChild).toBeNull();
  });
});
