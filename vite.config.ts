import { peerDependencies } from "./package.json";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ exclude: ["**/*stories.tsx", "**/*.test.tsx"] }), // Exclude test files from dts generation
  ],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "ai4ui",
      fileName: (format) => `ai4ui.${format}.js`,
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
