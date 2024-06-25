import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: 'packages/core/src/index.ts',
      name: 'opiece.js',
      fileName: (format) => `opiece.${format}.js`,
    }
  }
})
