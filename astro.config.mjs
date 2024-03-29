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
  adapter: vercel(),
})
