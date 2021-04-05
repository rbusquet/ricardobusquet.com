import type { NextPage } from "next/types"
import Layout from "../components/layout"
import { Post } from "../lib/posts"

interface Props {
  allPostsData: Post[]
}

const Home: NextPage<Props> = () => (
  <Layout>
    <section>
      <p>
        Hello, I'm <strong>Ricardo</strong>! I'm a software engineer based in
        New York. Born and raised in Brazil. Find me on{" "}
        <a href="https://twitter.com/@ricbusquet">Twitter</a> or{" "}
        <a href="https://github.com/rbusquet">GitHub</a>!
      </p>
    </section>
    <section>
      <small>
        You can also get in touch through{" "}
        <a href="https://facebook.com/rbusquet">Facebook</a> and{" "}
        <a href="https://www.linkedin.com/in/rbusquet/">Linkedin</a>. Or just
        shoot me an <a href="mailto:hello@rbusquet.dev">email</a>.
      </small>
    </section>
  </Layout>
)

export default Home
