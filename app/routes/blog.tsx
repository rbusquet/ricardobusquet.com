import { Link } from "react-router-dom";
import { MetaFunction, LoaderFunction, useLoaderData } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "Ricardo Busquet's blog",
    description: "Ricardo Busquet's blog",
  };
};

export let loader: LoaderFunction = () => {
  return [];
};

export default function Blog() {
  const allPostsData =
    useLoaderData<{ id: string; date: string; title: string }[]>();
  return (
    <>
      <h1>Blog</h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link to={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </>
  );
}
