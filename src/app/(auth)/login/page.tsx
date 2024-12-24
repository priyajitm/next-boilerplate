"use client";
import {
  AuthHeader,
  AuthFooter,
  OAuthButtons,
  AuthForm,
} from "@/app/_components/Auth";
import { OrDivider, LanguageSwitcher } from "@/app/_components/ui";
import {
  loginConfig,
  OAuthProviders,
  signupConfig,
} from "@/app/_config/auth.config";
import { useTranslations } from "next-intl";

export default function Login() {
  const t = useTranslations("auth.login");
  const tCommon = useTranslations("common");

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background p-4">
      <LanguageSwitcher />
      <div className="flex w-full max-w-md flex-col gap-6 rounded-lg rounded-b-none border border-gray-200 bg-background p-8 dark:border-gray-900">
        <AuthHeader title={t("title")} description={t("description")} />
        <OAuthButtons
          oauthConfig={signupConfig.oauth}
          providers={OAuthProviders}
        />
        {loginConfig.options.showDivider && <OrDivider label={tCommon("or")} />}
        <AuthForm
          fields={loginConfig.fields}
          options={loginConfig.options}
          buttonLabel={t("button")}
          placeholders={loginConfig.placeholders}
          labels={loginConfig.labels}
        />
      </div>
      <AuthFooter
        content={t("noAccount")}
        linkText={t("signupLink")}
        linkHref="/signup"
      />
    </div>
  );
}
