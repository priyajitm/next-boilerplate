import { InputWithLabel } from "../../inputWithLabel";
import { Button } from "../../ui/button";

interface AuthFormProps {
  fields: Record<string, boolean>;
  buttonLabel: string;
}

export const AuthForm = ({ fields, buttonLabel }: AuthFormProps) => {
  return (
    <div className="flex flex-col gap-4">
      {Object.entries(fields).map(([field, enabled]) => {
        if (!enabled) return null;
        return (
          <InputWithLabel key={field} label={field} id={field} type={field} />
        );
      })}
      <Button className="w-full">{buttonLabel}</Button>
    </div>
  );
};
