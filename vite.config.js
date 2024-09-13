import { globSync } from "glob";
import { relative, extname, resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        globSync("src/routes/**/*.html").map((file) => [
          relative("src", file.slice(0, file.length - extname(file).length)),

          fileURLToPath(new URL(file, import.meta.url)),
        ])
      ),
      plugins: [
        {
          name: "html-path-modifier",
          generateBundle(options, bundle) {
            for (const f in bundle) {
              if (f.endsWith(".html")) {
                const html = bundle[f];
                html.source = html.source.replace(/\/assets\//g, "/dist/assets/");
              }
            }
          },
        },
      ],
    },
  },

  resolve: {
    alias: {
      "@css": resolve(__dirname, "./src/css"),
      "@js": resolve(__dirname, "./src/js"),
    },
  },
});
