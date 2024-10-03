import { globSync } from "glob";
import { relative, extname, resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

/**
 * Vite configuration file.
 * 
 * @file This file contains the configuration settings for the Vite build tool.
 * 
 * @see {@link https://vitejs.dev/config/} for more information on Vite configuration.
 * 
 * @typedef {Object} RollupOptions
 * @property {Object} input - The input files for the build process.
 * @property {Array} plugins - The plugins used during the build process.
 * 
 * @typedef {Object} Alias
 * @property {string} "@css" - Alias for the CSS directory.
 * @property {string} "@js" - Alias for the JavaScript directory.
 * 
 * @typedef {Object} Resolve
 * @property {Alias} alias - The alias configuration.
 * 
 * @typedef {Object} Build
 * @property {RollupOptions} rollupOptions - The Rollup options for the build process for packing the contents
 * 
 * @typedef {Object} ViteConfig
 * @property {Build} build - The build configuration.
 * @property {Resolve} resolve - The resolve configuration.
 * 
 * @type {ViteConfig}
 */

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
