import { InputWithLabel } from "../../ui/inputWithLabel";
import { Button } from "../../shadcnComponents/button";
import { CheckboxWithLabel } from "../../ui/checkboxWithLabel";
import Link from "next/link";

interface AuthFormProps {
  fields: Record<string, boolean>;
  buttonLabel: string;
  options?: Record<string, boolean>;
}

export const AuthForm = ({ fields, buttonLabel, options }: AuthFormProps) => {
  return (
    <div className="flex flex-col gap-4">
      {Object.entries(fields).map(([field, enabled]) => {
        if (!enabled) return null;
        return (
          <InputWithLabel key={field} label={field} id={field} type={field} />
        );
      })}
      {options?.showTerms && (
        <CheckboxWithLabel
          label="I agree to the terms and conditions"
          id="terms"
        />
      )}
      <Button className="w-full">{buttonLabel}</Button>
      {options?.showForgotPassword && (
        <p className="text-center text-sm">
          <Link href="/forgot-password">Forgot your password?</Link>
        </p>
      )}
    </div>
  );
};
