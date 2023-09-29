import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      APP_URL: "http://localhost:3000",
      API_URL: "http://localhost:8080",
    },
    viewportWidth: 1440,
    viewportHeight: 800,
  },
});
