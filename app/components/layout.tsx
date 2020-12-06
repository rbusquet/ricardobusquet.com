import { Link } from "@remix-run/react"
import React from "react"

const name = "Ricardo Busquet"
export const siteTitle = "Ricardo Busquet"

interface Props {
  home?: boolean
  ogImage?: string
}

const Layout: React.FC<Props> = ({ children, home = false, ogImage }) => (
  <div>
    <header>
      {home ? (
        <>
          <img src="/images/profile.jpg" alt={name} width={144} height={144} />
          <h1>{name}</h1>
        </>
      ) : (
        <>
          <Link to="/">
            <img
              src="/images/profile.jpg"
              alt={name}
              width={108}
              height={108}
            />
          </Link>
          <h2>
            <Link to="/">{name}</Link>
          </h2>
        </>
      )}
    </header>
    <main>{children}</main>
    {!home && (
      <div>
        <Link to="/">
          <a>← Back to home</a>
        </Link>
      </div>
    )}
  </div>
)

export default Layout
