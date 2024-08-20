import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// tsconfig-paths is required to resolve tsconfig references
import tsconfigPaths from "vite-tsconfig-paths";
// svgr is required to generate SVG components
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
});
