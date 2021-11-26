import { LinksFunction, Outlet } from "remix";
import clean from "~/styles/clean-css.css";

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: clean },
    {
      rel: "stylesheet",
      href: "https://unpkg.com/@highlightjs/cdn-assets@11.3.1/styles/base16/solarized-light.min.css",
    },
    {
      rel: "stylesheet",
      href: "https://unpkg.com/@highlightjs/cdn-assets@11.3.1/styles/base16/solarized-dark.min.css",
      media: "(prefers-color-scheme: dark)",
    },
  ];
};

export default function Index() {
  return <Outlet />;
}
