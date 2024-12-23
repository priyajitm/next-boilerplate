import { loginContent } from "@/contents/auth/login";
import { signupContent } from "@/contents/auth/signup";
import { resetPasswordContent } from "@/contents/auth/reset-password";
import { verifyEmailContent } from "@/contents/auth/verify-email";

export const getLocalizedConfig = () => ({
  labels: {
    email: {
      en: loginContent.en.fields.email,
      es: loginContent.es.fields.email,
      fr: loginContent.fr.fields.email,
    },
    password: {
      en: loginContent.en.fields.password,
      es: loginContent.es.fields.password,
      fr: loginContent.fr.fields.password,
    },
    name: {
      en: signupContent.en.fields.name,
      es: signupContent.es.fields.name,
      fr: signupContent.fr.fields.name,
    },
    username: {
      en: signupContent.en.fields.username,
      es: signupContent.es.fields.username,
      fr: signupContent.fr.fields.username,
    },
    phone: {
      en: signupContent.en.fields.phone,
      es: signupContent.es.fields.phone,
      fr: signupContent.fr.fields.phone,
    },
    code: {
      en: verifyEmailContent.en.fields.code,
      es: verifyEmailContent.es.fields.code,
      fr: verifyEmailContent.fr.fields.code,
    },
    confirmPassword: {
      en: resetPasswordContent.en.fields.confirmPassword,
      es: resetPasswordContent.es.fields.confirmPassword,
      fr: resetPasswordContent.fr.fields.confirmPassword,
    },
  },
  placeholders: {
    email: "john@email.com",
    password: "",
    name: "John Doe",
    username: "john_doe",
    phone: "+1234567890",
    code: "123456",
    confirmPassword: "",
  },
});
