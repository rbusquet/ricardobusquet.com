import { DefaultSeo } from "next-seo"

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
