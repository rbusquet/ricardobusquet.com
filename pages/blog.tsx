import fs from "fs"
import Link from "next/link"
import type { GetStaticProps, NextPage } from "next/types"
import Layout from "../components/layout"
import { getSortedPostsData, Post } from "../lib/posts"
import DateFormat from "../components/date"

interface Props {
  allPostsData: Post[]
}

const blogPostsRssXml = (blogPosts: Post[]) => {
  let latestPostDate = ""
  let rssItemsXml = ""
  blogPosts.forEach((post) => {
    const postDate = Date.parse(post.date)
    if (!latestPostDate || postDate > Date.parse(latestPostDate)) {
      latestPostDate = post.date
    }
    rssItemsXml += `
      <item>
        <guid>https://ricardobusquet.com/posts/${post.id}</guid>
        <title>${post.title}</title>
        <link>https://ricardobusquet.com/posts/${post.id}</link>
        <description>
        ${post.title}
        </description>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      </item>`
  })
  return {
    rssItemsXml,
    latestPostDate,
  }
}

const getRssXml = (blogPosts: Post[]) => {
  const { rssItemsXml, latestPostDate } = blogPostsRssXml(blogPosts)
  return `<?xml version="1.0" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Blog - Ricardo Busquet</title>
      <link>https://ricardobusquet.com</link>
      <description>I write about what I learn in tech</description>
      <language>en</language>
      <lastBuildDate>${new Date(latestPostDate).toUTCString()}</lastBuildDate>
      <atom:link href="https://ricardobusquet.com/rss.xml" rel="self" type="application/rss+xml"/>
      ${rssItemsXml}
    </channel>
  </rss>`
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPostsData = getSortedPostsData()
  fs.writeFileSync("./public/rss.xml", getRssXml(allPostsData))

  return {
    props: {
      allPostsData,
    },
  }
}

const Home: NextPage<Props> = ({ allPostsData }) => (
  <Layout home>
    <section>
      <h1>Blog</h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small>
              <DateFormat dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
)

export default Home
