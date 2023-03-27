import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests"],
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
  resolve: {
    alias: {
      "components": path.resolve(__dirname, "./src/components"),
    },
  },
});
