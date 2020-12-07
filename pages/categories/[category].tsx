import { NextSeo } from "next-seo"
import Link from "next/link"
import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Layout from "../../components/layout"
import { getSortedPostsData, Post } from "../../lib/posts"
import utilStyles from "../../styles/utils.module.css"

import Date from "../../components/date"

interface Props {
  posts: Post[]
  category?: string
}

const CategoryComponent: NextPage<Props> = ({ posts, category }) => (
  <Layout>
    <NextSeo
      title={category ? `Posts tagged ${category}` : "oh, no"}
      description={category ? `Posts tagged ${category}` : "oh, no"}
      openGraph={{
        type: "website",
        url: `https://www.ricardobusquet.com/categories/${category}`,
      }}
    />
    {category ? (
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>
          Posts tagged <code>{category}</code>
        </h2>
        <ul className={utilStyles.list}>
          {posts.map(({ id, date, title }) => (
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
    ) : (
      <p>Nothing to see here...</p>
    )}
  </Layout>
)

export const getStaticPaths: GetStaticPaths<{
  category: string
}> = async () => {
  const posts = getSortedPostsData()
  const categories = posts
    .map((p) => p.categories)
    .flat()
    .filter((e) => Boolean(e))
  return {
    paths: categories.map((c) => ({
      params: {
        category: c as string,
      },
    })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<
  Props,
  { category?: string }
> = async ({ params }) => {
  const { category } = params || {}
  if (!category) {
    return {
      props: {
        posts: [],
        category,
      },
    }
  }
  const posts = getSortedPostsData(category)
  return {
    props: {
      posts,
      category,
    },
  }
}

export default CategoryComponent
