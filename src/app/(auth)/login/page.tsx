import {
  AuthHeader,
  AuthFooter,
  OAuthButtons,
  AuthForm,
} from "@/app/_components/auth";
import { OrDivider } from "@/app/_components/orDivider";
import {
  loginConfig,
  OAuthProviders,
  signupConfig,
} from "@/app/_config/auth.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-md flex-col gap-6 rounded-lg rounded-b-none border border-gray-200 p-8">
        <AuthHeader
          title="Login"
          description="Please fill in the details to login to your account"
        />
        <OAuthButtons
          oauthConfig={signupConfig.oauth}
          providers={OAuthProviders}
        />
        {loginConfig.options.showDivider && <OrDivider label="or" />}
        <AuthForm
          fields={loginConfig.fields}
          options={loginConfig.options}
          buttonLabel="Login"
          placeholders={loginConfig.placeholders}
        />
      </div>
      <AuthFooter
        content="Already have an account?"
        linkText="Sign Up"
        linkHref="/signup"
      />
    </div>
  );
}
