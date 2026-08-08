import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Change this if your GitHub repository name is different.
export default defineConfig({
  plugins: [react()],
  base: "/react-calculator/",
});