import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import utilStyles from "../styles/utils.module.css"

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <strong>Ricardo</strong>! I'm a software engineer from
          Brazil. Currently living in the US. Find me on{" "}
          <a href="https://twitter.com/@ricbusquet">twitter</a>!
        </p>
      </section>
    </Layout>
  )
}
