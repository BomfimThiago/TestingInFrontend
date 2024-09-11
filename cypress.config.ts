import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'qdipja',
  e2e: {
    baseUrl: 'http://localhost:5173/',
  },
});
