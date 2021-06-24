import type { GetServerSideProps, NextPage } from "next"

import Layout from "../../components/layout"
import { getPost } from "../../lib/posts"
import type { Post } from "../../lib/types"

import Date from "../../components/date"
import { NextSeo } from "next-seo"
import FourOhFour from "../404"
import React from "react"

interface Props {
  postData: Post | null
  baseUrl: string
}

const PostComponent: NextPage<Props> = ({ postData, baseUrl }) => {
  if (postData === null) {
    return <FourOhFour />
  }

  const Component = React.useMemo(() => getMDXComponent(postData.code), [
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

        <Component />
      </article>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<
  Props,
  { id: string }
> = async ({ params }) => {
  const postData = await getPost(params?.id as string)

  return {
    props: {
      postData,
      baseUrl: process.env.NEXT_PUBLIC_SITE_URL as string,
    },
  }
}

export default PostComponent
function getMDXComponent(code: any): any {
  throw new Error("Function not implemented.")
}
