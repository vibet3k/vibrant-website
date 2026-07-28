import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

/**
 * eslint-config-next v16 ships native flat configs (each export is a flat
 * config array), so the old FlatCompat/eslintrc shim is no longer needed —
 * and in fact throws "Converting circular structure to JSON" if you try to
 * push these through it.
 */
const eslintConfig = [
  // Flat config only ignores node_modules and .git by default, so `eslint .`
  // would otherwise walk the entire build output.
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "temp_sanitySchemas/**",
    ],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
];

export default eslintConfig;
