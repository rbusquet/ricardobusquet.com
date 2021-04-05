import { NextSeo } from "next-seo"
import Link from "next/link"
import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Layout from "../../components/layout"
import { getSortedPostsData, Post } from "../../lib/posts"

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
      <section>
        <h1>Posts tagged "{category}"</h1>
        <ul>
          {posts.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
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
