import type { MetaFunction } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "Ricardo Busquet",
    description: "Ricardo Busquet's page",
  };
};

export default function Index() {
  return (
    <div>
      <main>
        <h2>Hello, I'm Ricardo! 👋</h2>
        <p>Nice to meet you!</p>
        <p>
          I'm a software engineer based in New York. Born and raised in Brazil.
          Find me on <a href="https://twitter.com/ricbusquet">Twitter</a> or{" "}
          <a href="https://github.com/rbusquet">GitHub</a>!
        </p>
      </main>
      {/* <aside>
        <h2>Blog posts</h2>

        <h2>Repos</h2>
        <ul>
          {data.map((resource) => (
            <li key={resource.full_name}>
              <a href={resource.html_url}>{resource.full_name}</a>
            </li>
          ))}
        </ul>
      </aside> */}
    </div>
  );
}
