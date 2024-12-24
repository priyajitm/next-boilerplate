import { screen } from "@testing-library/react";
import { AuthForm } from "./AuthForm";
import { renderWithProviders } from "@/app/_config/testWrapper";

describe("AuthForm", () => {
  const mockFields = {
    email: true,
    password: true,
    name: false,
  };

  const mockLabels = {
    email: {
      en: "Email",
      es: "Correo",
      fr: "E-mail",
    },
    password: {
      en: "Password",
      es: "Contraseña",
      fr: "Mot de passe",
    },
    name: {
      en: "Name",
      es: "Nombre",
      fr: "Nom",
    },
  };

  it("renders enabled fields only", () => {
    renderWithProviders(
      <AuthForm fields={mockFields} buttonLabel="Submit" labels={mockLabels} />
    );

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.queryByLabelText("Name")).not.toBeInTheDocument();
  });

  it("renders terms checkbox when showTerms is true", () => {
    renderWithProviders(
      <AuthForm
        fields={mockFields}
        buttonLabel="Submit"
        options={{ showTerms: true }}
        labels={mockLabels}
      />
    );

    expect(screen.getByLabelText(/terms and conditions/i)).toBeInTheDocument();
  });

  it("renders submit button with correct label", () => {
    renderWithProviders(
      <AuthForm fields={mockFields} buttonLabel="Sign Up" labels={mockLabels} />
    );
    expect(
      screen.getByRole("button", { name: /sign up/i })
    ).toBeInTheDocument();
  });
});
