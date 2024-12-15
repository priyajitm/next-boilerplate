import { InputWithLabel } from "../../inputWithLabel";
import { Button } from "../../ui/button";
import { CheckboxWithLabel } from "../../ui/checkboxWithLabel";

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
    </div>
  );
};
