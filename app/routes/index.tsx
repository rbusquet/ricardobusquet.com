import React from "react"
import { Link, useRouteData } from "@remix-run/react"
import Date from "../components/date"
import Layout from "../components/layout"

export function meta() {
  return {
    title: "Ricardo Busquet",
    description: "Ricardo Busquet's personal blog (built with remix!)",
  }
}

export default function Index() {
  let data = useRouteData()

  return (
    <Layout home>
      <section>
        <p>
          Hello, I'm <strong>Ricardo</strong>! I'm a software engineer from
          Brazil. Currently living in the US. Find me on{" "}
          <a href="https://twitter.com/@ricbusquet">twitter</a>!
        </p>
      </section>
      <section>
        <h2>Blog</h2>

        {data.map(({ id, date, title }) => (
          <li key={id}>
            <Link to={`/posts/${id}`}>{title}</Link>
            <br />
            <small>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </section>
    </Layout>
  )
}
