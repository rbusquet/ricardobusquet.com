import Image from "next/image"
import Link from "next/link"

const name = "Ricardo Busquet"
export const siteTitle = "Ricardo Busquet"

interface Props {
  home?: boolean
  ogImage?: string
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <header>
      <Image src="/images/profile.jpg" alt={name} width={144} height={144} />
      <h1>{name}</h1>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        /{" "}
        <Link href="/blog">
          <a>Blog</a>
        </Link>{" "}
        / <a href="https://github.com/rbusquet">Github</a>
      </nav>
    </header>
    <main>{children}</main>
  </>
)

export default Layout
