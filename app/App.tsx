import React from "react"
import { Meta, Scripts, Styles, Routes } from "@remix-run/react"
import "highlight.js/lib/core"

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@ricbusquet" />
        <Meta />
        <Styles />
      </head>
      <body>
        <Routes />
        <Scripts />
        <footer>
          <p>
            Built with <a href="https://remix.run">Remix</a>!
          </p>
        </footer>
      </body>
    </html>
  )
}
