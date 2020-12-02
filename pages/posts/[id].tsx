import Head from "next/head"
import type { GetStaticPaths, GetStaticProps } from "next/types"
import Layout from "../../components/layout"
import { getAllPostIds, getPostData, Post } from "../../lib/posts"
import utilStyles from "../../styles/utils.module.css"

import Date from "../../components/date"

interface Props {
  postData: Post
}

export default function PostComponent({ postData }: Props) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        {postData.contentHtml && (
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        )}
      </article>
    </Layout>
  )
}

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
