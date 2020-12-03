import Head from "next/head"
import Image from "next/image"
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link"

const name = "Ricardo Busquet"
export const siteTitle = "Ricardo Busquet"

interface Props {
  home?: boolean
}

const Layout: React.FC<Props> = ({ children, home = false }) => (
  <div className={styles.container}>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Ricardo Busquet personal website" />
      <meta name="og:title" content={siteTitle} />
      <meta
        name="og:image"
        content={`https://${process.env.NEXT_PUBLIC_SITE_URL}/images/og_home.png`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@ricbusquet" />
    </Head>
    <header className={styles.header}>
      {home ? (
        <>
          <Image
            src="/images/profile.jpg"
            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            alt={name}
            width={144}
            height={144}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <Image
                src="/images/profile.jpg"
                className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                alt={name}
                width={108}
                height={108}
              />
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
          </h2>
        </>
      )}
    </header>
    <main>{children}</main>
    {!home && (
      <div className={styles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    )}
  </div>
)

export default Layout
