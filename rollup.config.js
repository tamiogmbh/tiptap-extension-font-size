import esbuild from 'rollup-plugin-esbuild'

export default [
    {
      input: `src/index.ts`,
      plugins: [esbuild()],
      output: [
        {
          name: '@tiptap/extension-font-size',
          file: `dist/tiptap-extension-font-size.cjs`,
          format: 'cjs',
          sourcemap: true,
        },
        {
            name: '@tiptap/extension-font-size',
            file: `dist/tiptap-extension-font-size.umd.cjs`,
            format: 'umd',
            sourcemap: true,
          },
          {
            name: '@tiptap/extension-font-size',
            file: `dist/tiptap-extension-font-size.esm.js`,
            format: 'es',
            sourcemap: true,
          }
      ]
    }
  ]