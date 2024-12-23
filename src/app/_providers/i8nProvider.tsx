"use client";

import React, { useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import { useLanguage } from "../_contexts/languageContext";
import { loginContent } from "@/contents/auth/login";
import { signupContent } from "@/contents/auth/signup";
import { commonContent } from "@/contents/common";
import { verifyEmailContent } from "@/contents/auth/verify-email";
import { resetPasswordContent } from "@/contents/auth/reset-password";

export function I18nProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { locale } = useLanguage();
  const [messages, setMessages] = useState(() => ({
    auth: {
      login: loginContent["en"],
      signup: signupContent["en"],
      verifyEmail: verifyEmailContent["en"],
      resetPassword: resetPasswordContent["en"],
    },
    common: commonContent["en"],
  }));

  useEffect(() => {
    const allMessages = {
      auth: {
        login: loginContent[locale],
        signup: signupContent[locale],
        verifyEmail: verifyEmailContent[locale],
        resetPassword: resetPasswordContent[locale],
      },
      common: commonContent[locale],
    };
    setMessages(allMessages);
  }, [locale]);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
