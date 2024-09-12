import { globSync } from "glob";
import { relative, extname } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        globSync("src/routes/*.html").map((file) => [
          relative(
            "src",
            file.slice(0, file.length - extname(file).length)
          ),

          fileURLToPath(new URL(file, import.meta.url)),
        ])
      ),
    },
  },
});
