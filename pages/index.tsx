import Head from "next/head"
import type { GetStaticProps, NextPage } from "next/types"
import Layout, { siteTitle } from "../components/layout"
import utilStyles from "../styles/utils.module.css"
import { getSortedPostsData, Post } from "../lib/posts"
import Link from "next/link"
import Date from "../components/date"

interface Props {
  allPostsData: Post[]
}

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    allPostsData: getSortedPostsData(),
  },
})

const Home: NextPage<Props> = ({ allPostsData }) => (
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
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
)

export default Home
