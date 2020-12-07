import Head from "next/head"
import Link from "next/link"
import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Layout from "../../components/layout"
import { getAllPostIds, getPostData, Post } from "../../lib/posts"
import utilStyles from "../../styles/utils.module.css"

import Date from "../../components/date"

interface Props {
  postData: Post
}

const PostComponent: NextPage<Props> = ({ postData }) => (
  <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      {postData.category ? (
        <small>
          Categories:{" "}
          <Link href={`/categories/${postData.category}`}>
            <a>{postData.category}</a>
          </Link>
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
