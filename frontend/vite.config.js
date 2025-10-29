import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      admin: path.resolve(__dirname, "./src/pages/admin"),
      components: path.resolve(__dirname, "./src/components"),
      adminLayout: path.resolve(__dirname, "./src/layout/adminlayout"),
      adminContext: path.resolve(__dirname, "./src/context/admincontext"),
    },
  },
});
