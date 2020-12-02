import { NextComponentType } from "next/types"
import "../styles/global.css"

interface AppTypes<T> {
  Component: NextComponentType<T>
  pageProps: T
}

export default function App<T = {}>({ Component, pageProps }: AppTypes<T>) {
  return <Component {...pageProps} />
}
