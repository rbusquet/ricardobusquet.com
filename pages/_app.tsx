import "../styles/global.css"
import type { NextComponentType } from "next/types"

interface AppTypes<T> {
  Component: NextComponentType<T>
  pageProps: T
}

export default function App<T>({ Component, pageProps }: AppTypes<T>) {
  return <Component {...pageProps} />
}
