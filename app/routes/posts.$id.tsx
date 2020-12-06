import { useRouteData } from "@remix-run/react"
import { totalmem } from "os"
import * as React from "react"
import Date from "../components/date"
import Layout from "../components/layout"

export function meta({ data }) {
  return { title: data.title }
}

export default function Post() {
  const postData = useRouteData<Record<string, string>>()
  console.log({ postData })
  return (
    <Layout>
      <article>
        <h1>{postData.title}</h1>

        {postData.contentHtml && (
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        )}
        <small>
          <Date dateString={postData.date} />
        </small>
      </article>
    </Layout>
  )
}
