import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
export default defineConfig({
  plugins: [
    react(),
    // dts({
    //     insertTypesEntry: true,
    // }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "./Index.jsx"),
      name: "MyLib",
      formats: ["es", "umd"],
      fileName: (format) => `my-lib.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "styled-components",
        "public/*",
        "index.html",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
        },
        // exclude: ['index.html']
      },
    },
  },
});
