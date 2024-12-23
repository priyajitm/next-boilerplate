"use client";
import { AuthFooter } from "@/app/_components/auth/authFooter";
import { AuthForm } from "@/app/_components/auth/authForm";
import { AuthHeader } from "@/app/_components/auth/authHeader";
import { resetPasswordConfig } from "@/app/_config/auth.config";
import { useTranslations } from "next-intl";

export default function ResetPassword() {
  const t = useTranslations("auth.resetPassword");

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background p-4">
      <div className="flex w-full max-w-md flex-col gap-6 rounded-lg rounded-b-none border border-gray-200 bg-background p-8 dark:border-gray-900">
        <AuthHeader title={t("title")} description={t("description")} />
        <AuthForm
          fields={resetPasswordConfig.fields}
          buttonLabel={t("button")}
          labels={resetPasswordConfig.labels}
        />
      </div>
      <AuthFooter
        content={"<-"}
        linkText={t("backToLogin")}
        linkHref="/login"
      />
    </div>
  );
}
