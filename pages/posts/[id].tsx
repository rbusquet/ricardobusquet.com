import { useMemo } from "react"
import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { getMDXComponent } from "mdx-bundler/client"

import Layout from "../../components/layout"
import { getAllPostIds, getPostData, Post } from "../../lib/posts"

import Date from "../../components/date"
import components from "../../components/mdx"
import { NextSeo } from "next-seo"

interface Props {
  postData: Post
  baseUrl: string
}

const PostComponent: NextPage<Props> = ({ postData, baseUrl }) => {
  const Component = useMemo(() => getMDXComponent(postData.code), [
    postData.code,
  ])

  return (
    <Layout>
      <NextSeo
        title={postData.title}
        description={postData.title}
        openGraph={{
          type: "article",
          url: `https://${baseUrl}/posts/${postData.id}`,
          article: {
            publishedTime: postData.date,
            tags: postData.categories ?? [],
            authors: ["https://twitter.com/@ricbusquet"],
          },
        }}
      />
      <article>
        <h1>{postData.title}</h1>
        <p>
          <Date dateString={postData.date} />
        </p>

        <Component components={components} />
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
      baseUrl: process.env.NEXT_PUBLIC_SITE_URL as string,
    },
  }
}

export default PostComponent
