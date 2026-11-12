import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages project-site deployment uses the repository name.
// If you deploy to https://USERNAME.github.io/ (user site), change base to "/".
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/anjani-universe/",
});
