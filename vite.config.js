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
      "constants": path.resolve(__dirname, "./src/constants"),
      "^context": path.resolve(__dirname, "./src/context"),
      "^hooks": path.resolve(__dirname, "./src/hooks"),
      "lib": path.resolve(__dirname, "./src/lib"),
      "^providers": path.resolve(__dirname, "./src/providers"),
    },
  },
});
