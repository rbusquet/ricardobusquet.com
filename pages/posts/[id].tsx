import Link from "next/link"
import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Layout from "../../components/layout"
import { getAllPostIds, getPostData, Post } from "../../lib/posts"
import utilStyles from "../../styles/utils.module.css"

import Date from "../../components/date"
import { NextSeo } from "next-seo"

interface Props {
  postData: Post
}

const PostComponent: NextPage<Props> = ({ postData }) => (
  <Layout>
    <NextSeo
      title={postData.title}
      description={postData.title}
      openGraph={{
        type: "article",
        url: `https://www.ricardobusquet.com/posts/${postData.id}`,
        article: {
          publishedTime: postData.date,
          tags: postData.categories ?? [],
          authors: ["https://twitter.com/@ricbusquet"],
        },
      }}
    />
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      {postData.categories ? (
        <small className={utilStyles.categories}>
          Categories:{" "}
          {postData.categories.map((category) => (
            <Link href={`/categories/${category}`}>
              <a>{category}</a>
            </Link>
          ))}
        </small>
      ) : null}

      {postData.contentHtml && (
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      )}
      <small className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </small>
    </article>
  </Layout>
)

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => ({
  paths: getAllPostIds(),
  fallback: false,
})

export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({
  params,
}) => {
  const postData = await getPostData(params?.id)
  return {
    props: {
      postData,
    },
  }
}

export default PostComponent
