/* eslint-disable @typescript-eslint/no-var-requires */
import { useMemo } from "react"
import Link from "next/link"
import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { getMDXComponent } from "mdx-bundler/client"

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
  image,
  baseUrl,
  credits,
}: {
  image: string
  baseUrl: string
  credits: string
}) {
  if (!image) return null
  const cover = require(`covers/${image}?trace`)
  const webp = require(`covers/${image}?webp`)
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
        <CoverImage
          baseUrl={baseUrl}
          image={postData.coverImage}
          credits={postData.credits}
        />
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        {postData.categories ? (
          <small className={utilStyles.categories}>
            Categories:{" "}
            {postData.categories.map((category) => (
              <Link key={category} href={`/categories/${category}`}>
                <a>{category}</a>
              </Link>
            ))}
          </small>
        ) : null}

        <Component />

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
