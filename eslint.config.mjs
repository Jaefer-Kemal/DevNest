import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import importPlugin from "eslint-plugin-import";
import nPlugin from "eslint-plugin-n";
import promisePlugin from "eslint-plugin-promise";
import prettierConfig from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      import: importPlugin,
      n: nPlugin,
      promise: promisePlugin,
    },
    rules: {
      // StandardJS rules
      "array-bracket-spacing": ["error", "never"],
      "comma-dangle": ["error", "never"],
      "eol-last": ["error", "always"],
      indent: ["error", 2, { SwitchCase: 1 }],
      "key-spacing": ["error", { beforeColon: false, afterColon: true }],
      "no-multi-spaces": "error",
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      quotes: [
        "error",
        "single",
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
      semi: ["error", "never"],
      "space-before-function-paren": ["error", "never"],
      // StandardJS plugin rules
      "import/no-unresolved": "error",
      "promise/always-return": "warn",
      "promise/no-return-wrap": "error",
      "promise/param-names": "error",
      "promise/catch-or-return": "warn",
      "promise/no-nesting": "warn",
      "promise/no-promise-in-callback": "warn",
      "promise/no-callback-in-promise": "warn",
      "promise/avoid-new": "warn",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
          ],
          "newlines-between": "always",
        },
      ],
    },
  },
  prettierConfig,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
