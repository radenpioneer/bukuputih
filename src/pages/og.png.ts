import type { APIContext, APIRoute } from 'astro'
import { ImageResponse } from '@vercel/og'
import { html } from 'satori-html'
import fs from 'node:fs'
import path from 'node:path'

export const GET: APIRoute = ({ url }: APIContext) => {
  const searchParams = new URLSearchParams(url.searchParams)
  const title = searchParams.get('title')
  const subtitle = searchParams.get('subtitle')

  const MartelSansNormal = fs.readFileSync(
    path.resolve(
      process.cwd(),
      'node_modules/@fontsource/martel-sans/files/martel-sans-latin-700-normal.woff'
    )
  )

  const SourceSerifProBold = fs.readFileSync(
    path.resolve(
      process.cwd(),
      'node_modules/@fontsource/source-serif-pro/files/source-serif-pro-latin-900-normal.woff'
    )
  )

  const markup = html`
    <div
      style="
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        font-family: "Martel Sans";
        text-align: center;
      "
    >
      <span></span>
      <span style="font-size: 4rem; font-family: "Source Serif Pro"; font-weight: 900">${title}</span>
      <span style="font-size: 2rem;">${subtitle}</span>
    </div>
  `

  // @ts-ignore
  return new ImageResponse(markup, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Martel Sans',
        data: MartelSansNormal.buffer,
        style: 'normal',
      },
      {
        name: 'Source Serif Pro',
        data: SourceSerifProBold.buffer,
        style: 'normal',
      },
    ],
  })
}

export const prerender = false
