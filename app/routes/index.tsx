import { Link, MetaFunction, useLoaderData } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "Ricardo Busquet",
    description: "Ricardo Busquet's page",
  };
};
import * as aoc from "./posts/dynamic-nature-python.md";
import * as dynamic from "./posts/dynamic-nature-python.md";
import * as usestate from "./posts/visualizing-use-state.md";

function postFromModule(mod: typeof import("*.mdx")) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
}

export function loader() {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
  return [
    postFromModule(aoc),
    postFromModule(dynamic),
    postFromModule(usestate),
  ];
}

export default function Index() {
  let posts = useLoaderData();

  return (
    <>
      <main>
        <h2>Hello, I'm Ricardo! 👋</h2>
        <p>Nice to meet you!</p>
        <p>
          I'm a software engineer based in New York. Born and raised in Brazil.
          Find me on <a href="https://twitter.com/ricbusquet">Twitter</a> or{" "}
          <a href="https://github.com/rbusquet">GitHub</a>!
        </p>
      </main>
      <aside>
        <h2>Blog posts</h2>

        <ul>
          {posts.map((post: ReturnType<typeof postFromModule>) => (
            <li key={post.slug}>
              <Link to={`posts/${post.slug}`}>{post.title}</Link>
              {post.description && <p>{post.description}</p>}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
