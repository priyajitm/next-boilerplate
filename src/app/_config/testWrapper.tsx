import React, { ReactNode } from "react";
import { LanguageProvider } from "@/app/_contexts/languageContext";
import { NextIntlClientProvider } from "next-intl";
import { I18nProvider } from "@/app/_providers";
import { render } from "@testing-library/react";

export const TestWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <LanguageProvider>
      <NextIntlClientProvider messages={{}} locale="en">
        <I18nProvider>{children}</I18nProvider>
      </NextIntlClientProvider>
    </LanguageProvider>
  );
};

// Helper function for tests
export const renderWithProviders = (component: React.ReactNode) => {
  return render(<TestWrapper>{component}</TestWrapper>);
};
