import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

// Custom plugin to duplicate index.html to 404.html for GitHub Pages routing
const copy404Plugin = () => {
  return {
    name: 'copy-404-plugin',
    closeBundle() {
      if (fs.existsSync('dist/index.html')) {
        fs.copyFileSync('dist/index.html', 'dist/404.html');
      }
    }
  }
};

// https://vitejs.dev/config/
export default defineConfig(() => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    copy404Plugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
