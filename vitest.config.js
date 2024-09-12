import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.js'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      setupFiles: './src/config/setup-tests.ts',
      environment: 'jsdom',
      environmentMatchGlobs: [['**/**/*.tsx', 'jsdom']],
      coverage: {
        // you can include other reporters, but 'json-summary' is required, json is recommended
        reporter: ['text', 'json-summary', 'json'],
        // If you want a coverage reports even if your tests are failing, include the reportOnFailure option
        reportOnFailure: true,
        include: ['src/**/*.ts', 'src/**/*.tsx'],
        exclude: ['src/Router.tsx'],
      },
    },
  })
)
