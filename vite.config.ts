import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "mp3-loader",
      transform: (src, id) => {
        if (id.endsWith(".mp3")) {
          return `export default ${JSON.stringify(src)};`;
        }
      },
    },
  ],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
