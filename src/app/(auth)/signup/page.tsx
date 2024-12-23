"use client";
import {
  AuthHeader,
  AuthFooter,
  OAuthButtons,
  AuthForm,
} from "@/app/_components/auth";
import { OrDivider } from "@/app/_components/orDivider";
import { OAuthProviders, signupConfig } from "@/app/_config/auth.config";
import { useTranslations } from "next-intl";

export default function Signup() {
  const t = useTranslations("auth.signup");
  const tCommon = useTranslations("common");

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background p-4">
      <div className="flex w-full max-w-md flex-col gap-6 rounded-lg rounded-b-none border border-gray-200 bg-background p-8 dark:border-gray-900">
        <AuthHeader title={t("title")} description={t("description")} />
        <OAuthButtons
          oauthConfig={signupConfig.oauth}
          providers={OAuthProviders}
        />
        {signupConfig.options.showDivider && (
          <OrDivider label={tCommon("or")} />
        )}
        <AuthForm
          fields={signupConfig.fields}
          buttonLabel={t("button")}
          options={signupConfig.options}
          placeholders={signupConfig.placeholders}
          labels={signupConfig.labels}
        />
      </div>
      <AuthFooter
        content={t("haveAccount")}
        linkText={t("loginLink")}
        linkHref="/login"
      />
    </div>
  );
}
