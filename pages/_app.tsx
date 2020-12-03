import "../styles/global.css"
import "highlight.js/lib/core"
import "highlight.js/styles/a11y-light.css"

import type { AppProps } from "next/app"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App
