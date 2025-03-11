import {defineConfig} from 'vite';
import * as partials from '@porsche-design-system/components-js/partials';
import {createHtmlPlugin} from "vite-plugin-html";

export default defineConfig({
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {
          headPartials: [
            partials.getInitialStyles({ prefix: ['', 'my-prefix'] }),
            partials.getFontFaceStyles(),
            partials.getFontLinks({ weights: ['regular', 'semi-bold', 'bold'] }),
          ].join('\n'),
          bodyPartials: [
            partials.getLoaderScript(),
            partials.getBrowserSupportFallbackScript(),
            partials.getCookiesFallbackScript(),
          ].join('\n'),
        },
      },
    }),
  ],
});
