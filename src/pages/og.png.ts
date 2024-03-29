import type { APIContext, APIRoute } from 'astro'
import { ImageResponse } from '@vercel/og'
import { html } from 'satori-html'

export const GET: APIRoute = async ({ url }: APIContext) => {
  const searchParams = new URLSearchParams(url.searchParams)
  const title = searchParams.get('title')
  const subtitle = searchParams.get('subtitle')

  const MartelSansNormal = await fetch(
    new URL('/public/fonts/martel-sans-latin-700-normal.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  const SourceSerifProBold = await fetch(
    new URL(
      '/public/fonts/source-serif-pro-latin-900-normal.ttf',
      import.meta.url
    )
  ).then((res) => res.arrayBuffer())

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
        data: MartelSansNormal,
        style: 'normal',
      },
      {
        name: 'Source Serif Pro',
        data: SourceSerifProBold,
        style: 'normal',
      },
    ],
  })
}

export const prerender = false
