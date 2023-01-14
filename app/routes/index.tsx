import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import * as aoc from "./posts/advent-of-code.md";
import * as dynamic from "./posts/dynamic-nature-python.md";
import * as usestate from "./posts/visualizing-use-state.md";
import * as aoc2021 from "./posts/aoc-2021.md";

export let meta: MetaFunction = () => {
  return {
    title: "Ricardo Busquet",
    description: "Ricardo Busquet's page",
  };
};

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type Post = typeof import("*.mdx");

function postFromModule(mod: Post): {
  slug: string;
  description: string;
  title: string;
} {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
}

export async function loader() {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
  return json(
    [
      postFromModule(aoc2021),
      postFromModule(aoc),
      postFromModule(dynamic),
      postFromModule(usestate),
    ],
    { headers: { "Cache-Control": "public, max-age=604800, immutable" } }
  );
}

export default function Index() {
  let posts = useLoaderData<typeof loader>();
  return (
    <>
      <main>
        <h2>Hello, I'm Ricardo! 👋</h2>
        <p>Nice to meet you!</p>
        <p>
          I'm a software engineer based in New York. Born and raised in Brazil.
          Find me on{" "}
          <a rel="me" href="https://twitter.com/ricbusquet">
            Twitter
          </a>
          ,{" "}
          <a rel="me" href="https://bolha.us/@rbusquet">
            Mastodon
          </a>
          , and <a href="https://github.com/rbusquet">GitHub</a>!
        </p>
      </main>
      <aside>
        <h2>Blog posts</h2>

        <ul>
          {posts.map(post => (
            <li key={post.slug}>
              <Link to={`posts/${post.slug}`} prefetch="intent">
                {post.title}
              </Link>
              {post.description && <p>{post.description}</p>}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
