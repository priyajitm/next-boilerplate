import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      "no-undef": "warn",
      "no-useless-escape": "warn",
      "no-case-declarations": "warn",
      "no-empty": "warn",
      "no-empty-pattern": "warn",
      "no-extra-boolean-cast": "warn",
      "no-extra-semi": "warn",
      "no-extra-bind": "warn",
      "no-constant-condition": "warn",
      "no-dupe-else-if": "warn",
      "no-dupe-keys": "warn",
      "no-duplicate-case": "warn",
      "no-unreachable": "warn",
      "no-unreachable-loop": "warn",
      "no-unsafe-finally": "warn",
      "no-unsafe-negation": "warn",
      "no-useless-catch": "warn",
      "no-useless-escape": "warn",
      "no-useless-return": "warn",
      "no-var": "warn",
      "no-with": "warn",
      "no-unneeded-ternary": "warn",
    },
  },
];

export default eslintConfig;
