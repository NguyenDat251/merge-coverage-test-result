import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
// this library below is used to resolve absolute path based on tsconfig without extra setup
import tsconfigPaths from 'vite-tsconfig-paths';
import istanbul from "vite-plugin-istanbul";

// https://vitejs.dev/config/
export default defineConfig((props) => {
  // https://github.com/vitejs/vite/issues/1149#issuecomment-857686209
  const env = loadEnv(props.mode, process.cwd(), 'VITE_APP');
  const envWithProcessPrefix = {
    'process.env': `${JSON.stringify(env)}`,
  };

  return {
    plugins: [
      react({
        babel: {
          plugins: [
            [
              'babel-plugin-styled-components',
              {
                displayName: true,
                fileName: false,
              },
            ],
          ],
        },
      }),
      tsconfigPaths(),
      istanbul({
        cypress: true,
        requireEnv: false,
    }),
    ].filter(Boolean),
    define: envWithProcessPrefix,
    server: {
      open: true,
      port: 3000,
    },
  };
});
