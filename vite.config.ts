import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from 'url'; // Add this import

// Create __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use synchronous require for conditional imports
let cartographerPlugin = null;
if (process.env.NODE_ENV !== "production" && process.env.REPL_ID) {
  cartographerPlugin = require("@replit/vite-plugin-cartographer")().cartographer;
}

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(cartographerPlugin ? [cartographerPlugin] : [])
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});