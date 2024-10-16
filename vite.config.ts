import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dtsPlugin from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    // This plugins generates global index.d.ts
    dtsPlugin({
      outDir: 'lib',
      rollupTypes: true,
      tsconfigPath: './tsconfig.build.json',
    }),
  ],
  build: {
    target: ['es6'],
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: '[name]', // This parameter keeps the original filenames of the .ts(x)
      formats: ['cjs'],
    },
    rollupOptions: {
      // These dependencies are peer dependencies and should not be included in the packaged lib
      external: [
        'react',
        'react/jsx-runtime',
        'react-dom',
        'styled-components',
        'react-draft-wysiwyg',
        'draftjs-to-html',
        'html-to-draftjs',
        'draft-js'
      ],
      output: {
        dir: 'lib',
        interop: 'auto',
        // These next 2 parameters are here to keep the structure of the src folder
        preserveModules: true,
        preserveModulesRoot: "./src",
        generatedCode: {
          /**
           * Without this parameter, the library contains a lot of
           * Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});
           * This string prevents right computation of tree shaking.
           * This next parameter removes all of them:
           * https://rollupjs.org/configuration-options/#output-generatedcode-symbols
           */
          symbols: false,
        }
      }
    }
  }
});
