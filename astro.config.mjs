import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import keystatic from '@keystatic/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://bukuputih.sngr.my.id',
  integrations: [react(), markdoc(), keystatic()],
  output: 'hybrid',
  adapter: vercel({
    includeFiles: [
      './node_modules/@fontsource/martel-sans/files/martel-sans-latin-700-normal.woff',
      './node_modules/@fontsource/source-serif-pro/files/source-serif-pro-latin-900-normal.woff',
    ],
  }),
})
