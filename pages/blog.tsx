import Link from "next/link"
import type { GetServerSideProps, NextPage } from "next/types"
import Layout from "../components/layout"
import { listPosts } from "../lib/posts"
import type { PostTuple } from "../lib/types"
import DateFormat from "../components/date"

interface Props {
  allPostsData: PostTuple[]
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const allPostsData = await listPosts()

  return {
    props: {
      allPostsData,
    },
  }
}

const Home: NextPage<Props> = ({ allPostsData }) => (
  <Layout home>
    <h1>Blog</h1>
    <ul>
      {allPostsData.map(([date, id, title]) => (
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
  </Layout>
)

export default Home
