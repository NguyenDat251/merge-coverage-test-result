import task from '@cypress/code-coverage/task';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
      // include any other plugin code...
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      task(on, config);

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config;
    },
    env: {
      APP_URL: 'http://localhost:3000',
      API_URL: 'http://localhost:8080',
    },
    viewportWidth: 1440,
    viewportHeight: 800,
  },
});
