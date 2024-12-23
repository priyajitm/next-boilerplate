import { z } from "zod";
import { IconType } from "react-icons";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaApple,
  FaTwitter,
} from "react-icons/fa";
import { getLocalizedConfig } from "@/app/_utils/getLocalizedConfig";

const fieldLabelsSchema = {
  email: z.object({
    en: z.string(),
    es: z.string(),
    fr: z.string(),
  }),
  password: z.object({
    en: z.string(),
    es: z.string(),
    fr: z.string(),
  }),
  name: z.object({
    en: z.string(),
    es: z.string(),
    fr: z.string(),
  }),
  username: z.object({
    en: z.string(),
    es: z.string(),
    fr: z.string(),
  }),
  phone: z.object({
    en: z.string(),
    es: z.string(),
    fr: z.string(),
  }),
};

const fieldPlaceholdersSchema = {
  email: z.string(),
  password: z.string(),
  name: z.string(),
  username: z.string(),
  phone: z.string(),
};

const oAuthProviderSchema = z.record(
  z.object({
    label: z.string(),
    icon: z.custom<IconType>(),
  })
);

const oAuthConfigSchema = z.object({
  google: z.boolean().optional(),
  github: z.boolean().optional(),
  twitter: z.boolean().optional(),
  apple: z.boolean().optional(),
  linkedin: z.boolean().optional(),
  facebook: z.boolean().optional(),
});

const baseConfigSchema = z.object({
  oauth: oAuthConfigSchema,
  fields: z.record(z.boolean()),
  labels: z.object(fieldLabelsSchema),
  placeholders: z.object(fieldPlaceholdersSchema).optional(),
  options: z.object({
    showDivider: z.boolean().optional(),
    showTerms: z.boolean().optional(),
    showForgotPassword: z.boolean().optional(),
  }),
});

const signupConfigSchema = baseConfigSchema.extend({
  fields: z.object({
    email: z.boolean(),
    password: z.boolean(),
    name: z.boolean(),
    username: z.boolean(),
    phone: z.boolean(),
  }),
});

const verifyEmailConfigSchema = z.object({
  fields: z.object({
    email: z.boolean(),
    code: z.boolean(),
  }),
  labels: z.object({
    email: z.object({
      en: z.string(),
      es: z.string(),
      fr: z.string(),
    }),
    code: z.object({
      en: z.string(),
      es: z.string(),
      fr: z.string(),
    }),
  }),
  placeholders: z.object({
    email: z.string(),
    code: z.string(),
  }),
});

const resetPasswordConfigSchema = z.object({
  fields: z.object({
    password: z.boolean(),
    confirmPassword: z.boolean(),
  }),
  labels: z.object({
    password: z.object({
      en: z.string(),
      es: z.string(),
      fr: z.string(),
    }),
    confirmPassword: z.object({
      en: z.string(),
      es: z.string(),
      fr: z.string(),
    }),
  }),
  placeholders: z.object({
    password: z.string(),
    confirmPassword: z.string(),
  }),
});

const localizedConfig = getLocalizedConfig();

export const OAuthProviders = oAuthProviderSchema.parse({
  google: { label: "Google", icon: FaGoogle },
  github: { label: "Github", icon: FaGithub },
  twitter: { label: "Twitter", icon: FaTwitter },
  apple: { label: "Apple", icon: FaApple },
  linkedin: { label: "LinkedIn", icon: FaLinkedin },
  facebook: { label: "Facebook", icon: FaFacebook },
} as const);

const baseConfig = baseConfigSchema.parse({
  oauth: {
    google: true,
    github: true,
    twitter: false,
    apple: false,
    linkedin: false,
    facebook: false,
  },
  fields: {
    email: true,
    password: true,
  },
  labels: localizedConfig.labels,
  placeholders: localizedConfig.placeholders,
  options: {
    showDivider: true,
    showTerms: false,
    showForgotPassword: false,
  },
});

export const signupConfig = signupConfigSchema.parse({
  ...baseConfig,
  fields: {
    ...baseConfig.fields,
    name: false,
    username: false,
    phone: false,
  },
  options: {
    ...baseConfig.options,
    showTerms: true,
  },
});

export const loginConfig = baseConfigSchema.parse({
  ...baseConfig,
  options: {
    ...baseConfig.options,
    showForgotPassword: true,
  },
});

export const verifyEmailConfig = verifyEmailConfigSchema.parse({
  fields: { email: true, code: false },
  labels: {
    email: localizedConfig.labels.email,
    code: localizedConfig.labels.code,
  },
  placeholders: {
    email: localizedConfig.placeholders.email,
    code: localizedConfig.placeholders.code,
  },
});

export const resetPasswordConfig = resetPasswordConfigSchema.parse({
  fields: { password: true, confirmPassword: true },
  labels: {
    password: localizedConfig.labels.password,
    confirmPassword: localizedConfig.labels.confirmPassword,
  },
  placeholders: {
    password: localizedConfig.placeholders.password,
    confirmPassword: localizedConfig.placeholders.confirmPassword,
  },
});
