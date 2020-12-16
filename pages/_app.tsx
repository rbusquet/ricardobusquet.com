/* eslint-disable @typescript-eslint/ban-ts-comment */
import { DefaultSeo } from "next-seo"
import hljs from "highlight.js"

import "../styles/global.css"

import SEO from "../seo.json"

import type { AppProps } from "next/app"
import { useEffect } from "react"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    hljs.initHighlighting()
  }, [])
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default App
