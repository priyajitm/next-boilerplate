import {
  AuthHeader,
  AuthFooter,
  OAuthButtons,
  AuthForm,
} from "@/app/_components/auth";
import { OrDivider } from "@/app/_components/orDivider";
import { OAuthProviders, signupConfig } from "@/app/_config/auth.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Signup() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background p-4">
      <div className="flex w-full max-w-md flex-col gap-6 rounded-lg rounded-b-none border border-gray-200 bg-background p-8 dark:border-gray-900">
        <AuthHeader
          title="Sign Up"
          description="Please fill in the details to create an account"
        />
        <OAuthButtons
          oauthConfig={signupConfig.oauth}
          providers={OAuthProviders}
        />
        {signupConfig.options.showDivider && <OrDivider label="or" />}
        <AuthForm
          fields={signupConfig.fields}
          buttonLabel="Sign Up"
          options={signupConfig.options}
          placeholders={signupConfig.placeholders}
        />
      </div>
      <AuthFooter
        content="Already have an account?"
        linkText="Login"
        linkHref="/login"
      />
    </div>
  );
}
