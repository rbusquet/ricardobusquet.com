import Head from "next/head"
import Layout from "../../components/layout"

export default function FirstPost() {
  return (
    <Layout home={false}>
      <Head>
        <title>First post</title>
      </Head>
      <h1>First post</h1>
    </Layout>
  )
}
