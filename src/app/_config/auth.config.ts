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

const oAuthProviderSchema = z.record(
  z.object({
    label: z.string(),
    icon: z.custom<IconType>(),
  })
);

const baseOAuthConfigSchema = z.object({
  google: z.boolean().optional(),
  github: z.boolean().optional(),
  twitter: z.boolean().optional(),
  apple: z.boolean().optional(),
  linkedin: z.boolean().optional(),
  facebook: z.boolean().optional(),
});

const baseConfigSchema = z.object({
  oauth: baseOAuthConfigSchema,
  fields: z.record(z.boolean()),
  options: z.object({
    showDivider: z.boolean().optional(),
    showTerms: z.boolean().optional(),
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

export const OAuthProviders = oAuthProviderSchema.parse({
  google: {
    label: "Google",
    icon: FaGoogle,
  },
  github: {
    label: "Github",
    icon: FaGithub,
  },
  twitter: {
    label: "Twitter",
    icon: FaTwitter,
  },
  apple: {
    label: "Apple",
    icon: FaApple,
  },
  linkedin: {
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  facebook: {
    label: "Facebook",
    icon: FaFacebook,
  },
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
  options: {
    showDivider: true,
    showTerms: false,
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
});
