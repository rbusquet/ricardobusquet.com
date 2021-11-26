import { Form, json, Link, useLoaderData } from "remix";
import { getPosts } from "~/utils/db.server";
import type { Post } from "~/utils/db.server";

export let loader = async () => {
  return json(await getPosts());
};

export default function Posts() {
  let posts = useLoaderData();

  return (
    <>
      <h1>Blog posts</h1>

      <ul>
        {posts.map(
          (post: Post) =>
            post && (
              <li key={post.slug}>
                <Link to={post.slug}>{post.title}</Link>
              </li>
            )
        )}
      </ul>
    </>
  );
}
