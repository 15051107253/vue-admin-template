import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    "@": path.resolve(__dirname, "src"),
    "api": path.resolve(__dirname, "src/api"),
    "components": path.resolve(__dirname, "src/components"),
    "utils": path.resolve(__dirname, "src/utils"),
    "views": path.resolve(__dirname, "src/views"),
    "routes": path.resolve(__dirname, "src/routes"),
  },
  plugins: [vue(), vueJsx()]
})
