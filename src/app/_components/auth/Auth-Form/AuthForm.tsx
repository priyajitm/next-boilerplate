import { InputWithLabel, CheckboxWithLabel } from "@/app/_components/ui";
import { Button } from "@/app/_components/shadcn/button";
import Link from "next/link";
import { useLanguage } from "@/app/_contexts/";
import { useTranslations } from "next-intl";

interface AuthFormProps {
  fields: Record<string, boolean>;
  buttonLabel: string;
  options?: Record<string, boolean>;
  placeholders?: Record<string, string>;
  labels: Record<
    string,
    {
      en: string;
      es: string;
      fr: string;
    }
  >;
}

export const AuthForm = ({
  fields,
  buttonLabel,
  options,
  placeholders,
  labels,
}: AuthFormProps) => {
  const { locale } = useLanguage();
  const tLogin = useTranslations("auth.login");
  const tSignup = useTranslations("auth.signup");

  return (
    <div className="flex flex-col gap-6">
      {Object.entries(fields).map(([field, enabled]) => {
        if (!enabled) return null;
        return (
          <InputWithLabel
            key={field}
            label={labels[field][locale]}
            id={field}
            type={field}
            placeholder={placeholders?.[field]}
          />
        );
      })}
      {options?.showTerms && (
        <CheckboxWithLabel label={tSignup("terms")} id="terms" />
      )}
      <Button className="w-full">{buttonLabel}</Button>
      {options?.showForgotPassword && (
        <p className="text-center text-sm">
          <Link href="/reset-password">{tLogin("forgotPassword")}</Link>
        </p>
      )}
    </div>
  );
};
