/* eslint-disable @typescript-eslint/ban-ts-comment */
import { DefaultSeo } from "next-seo"

import "../styles/prism.css"
import "../styles/global.css"

import SEO from "../seo.json"

import type { AppProps } from "next/app"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default App
