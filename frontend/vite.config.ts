import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/clients": {
        target: "https://delivery-map87ml2o-alicelonghis-projects.vercel.app",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
