import react from '@vitejs/plugin-react'
import { defineConfig } from "vite";

const defaultConfig = {
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    hmr: {
      port: 443,
    }
  }
};

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === "serve") {
    //dev config
    return {
      ...defaultConfig,
      define: {
        global: "globalThis",
        process: {
          env: "development",
        },
      },
    };
  }

  //prod config
  return { ...defaultConfig, define: { global: "globalThis" } };
});