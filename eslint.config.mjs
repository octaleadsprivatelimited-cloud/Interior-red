import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  ...nextVitals,
  globalIgnores(['.next/**', 'node_modules/**']),
  {
    rules: {
      // The existing editorial copy contains prose quotations and contractions.
      'react/no-unescaped-entities': 'off',
    },
  },
]);
