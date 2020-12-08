/* eslint-disable @typescript-eslint/no-var-requires */
import Link from "next/link"
import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Layout from "../../components/layout"
import { getAllPostIds, getPostData, Post } from "../../lib/posts"
import utilStyles from "../../styles/utils.module.css"
import imgStyles from "../../styles/image.module.css"

import Date from "../../components/date"
import { NextSeo } from "next-seo"

interface Props {
  postData: Post
  baseUrl: string
}

function CoverImage({
  show,
  id,
  baseUrl,
  credits,
}: {
  show: boolean
  id: string
  baseUrl: string
  credits: string
}) {
  if (!show) return null

  const cover = require(`covers/${id}.jpg?trace`)
  const webp = require(`covers/${id}.jpg?webp`)
  return (
    <>
      <NextSeo
        openGraph={{
          images: [{ url: `https://${baseUrl}${cover.src}` }],
        }}
      />
      <div className={imgStyles.container}>
        <img className={imgStyles.placeholder} src={cover.trace} alt="" />
        <img className={imgStyles.main} src={webp} alt="" />
        {credits ? (
          <small
            className={imgStyles.caption}
            style={{ display: "block" }}
            dangerouslySetInnerHTML={{ __html: credits }}
          />
        ) : null}
      </div>
    </>
  )
}

const PostComponent: NextPage<Props> = ({ postData, baseUrl }) => {
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
        <CoverImage
          id={postData.id}
          baseUrl={baseUrl}
          show={postData.showCover}
          credits={postData.credits}
        />
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
