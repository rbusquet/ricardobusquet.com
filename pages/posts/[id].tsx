import type { GetServerSideProps, NextPage } from "next"

import Layout from "../../components/layout"
import { getPost } from "../../lib/posts"
import type { Post } from "../../lib/types"

import Date from "../../components/date"
import { NextSeo } from "next-seo"
import FourOhFour from "../404"

interface Props {
  postData: Post | null
  baseUrl: string
}

const PostComponent: NextPage<Props> = ({ postData, baseUrl }) => {
  if (postData === null) {
    return <FourOhFour />
  }

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

        <div dangerouslySetInnerHTML={{ __html: postData.code }} />
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
