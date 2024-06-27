import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      assets: `${path.resolve(__dirname, "./src/assets/")}`,
      components: `${path.resolve(__dirname, "./src/components/")}`,
      constants: `${path.resolve(__dirname, "./src/constants/")}`,
      features: `${path.resolve(__dirname, "./src/features/")}`,
      layouts: `${path.resolve(__dirname, "./src/layouts/")}`,
      "redux-toolkit": `${path.resolve(__dirname, "./src/redux-toolkit/")}`,
      routes: `${path.resolve(__dirname, "./src/routes/")}`,
      types: `${path.resolve(__dirname, "./src/types/")}`,
    }
  },
})
