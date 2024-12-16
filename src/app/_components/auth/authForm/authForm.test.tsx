import { render, screen } from "@testing-library/react";
import { AuthForm } from "./authForm";

describe("AuthForm", () => {
  const mockFields = {
    email: true,
    password: true,
    name: false,
  };

  it("renders enabled fields only", () => {
    render(<AuthForm fields={mockFields} buttonLabel="Submit" />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/name/i)).not.toBeInTheDocument();
  });

  it("renders terms checkbox when showTerms is true", () => {
    render(
      <AuthForm
        fields={mockFields}
        buttonLabel="Submit"
        options={{ showTerms: true }}
      />
    );

    expect(screen.getByLabelText(/terms and conditions/i)).toBeInTheDocument();
  });

  it("renders submit button with correct label", () => {
    render(<AuthForm fields={mockFields} buttonLabel="Sign Up" />);
    expect(
      screen.getByRole("button", { name: /sign up/i })
    ).toBeInTheDocument();
  });
});
