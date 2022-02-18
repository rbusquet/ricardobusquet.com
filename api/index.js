var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest,
  handleDataRequest: () => handleDataRequest
});
init_react();
var import_etag = __toModule(require("etag"));
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, status, headers5, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  headers5.set("Content-Type", "text/html");
  headers5.set("ETag", (0, import_etag.default)(markup));
  if (request.headers.get("If-None-Match") === headers5.get("ETag")) {
    return new Response("", { status: 304, headers: headers5 });
  }
  return new Response("<!DOCTYPE html>" + markup, { status, headers: headers5 });
}
var handleDataRequest = async (response, { request }) => {
  let body = await response.text();
  if (request.method.toLowerCase() === "get") {
    response.headers.set("etag", (0, import_etag.default)(body));
    if (request.headers.get("If-None-Match") === response.headers.get("ETag")) {
      return new Response("", { status: 304, headers: response.headers });
    }
  }
  return response;
};

// route:/Users/ricardo/dev/ricardobusquet.com/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
init_react();
var React2 = __toModule(require("react"));
var import_remix2 = __toModule(require_remix());

// app/styles/global.css
var global_default = "/build/_assets/global-EKVLH265.css";

// app/styles/inter.css
var inter_default = "/build/_assets/inter-IHDYDF7X.css";

// route:/Users/ricardo/dev/ricardobusquet.com/app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: inter_default },
    { rel: "stylesheet", href: global_default }
  ];
};
function App() {
  return /* @__PURE__ */ React2.createElement(Document, null, /* @__PURE__ */ React2.createElement(Layout, null, /* @__PURE__ */ React2.createElement(import_remix2.Outlet, null)));
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ React2.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React2.createElement("head", null, /* @__PURE__ */ React2.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React2.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React2.createElement("title", null, title) : null, /* @__PURE__ */ React2.createElement("link", {
    rel: "stylesheet",
    href: ""
  }), /* @__PURE__ */ React2.createElement(import_remix2.Meta, null), /* @__PURE__ */ React2.createElement(import_remix2.Links, null)), /* @__PURE__ */ React2.createElement("body", null, children, /* @__PURE__ */ React2.createElement(RouteChangeAnnouncement, null), /* @__PURE__ */ React2.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React2.createElement(import_remix2.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("div", {
    role: "heading",
    className: "header"
  }, /* @__PURE__ */ React2.createElement("nav", {
    "aria-label": "Main navigation",
    className: "header-nav"
  }, /* @__PURE__ */ React2.createElement("h1", null, "Ricardo Busquet"), /* @__PURE__ */ React2.createElement("span", null, /* @__PURE__ */ React2.createElement(import_remix2.Link, {
    to: "/"
  }, "Home"), " \xB7 ", /* @__PURE__ */ React2.createElement("a", {
    href: "https://github.com/rbusquet"
  }, "GitHub")))), /* @__PURE__ */ React2.createElement("main", null, children), /* @__PURE__ */ React2.createElement("footer", null, "\xA9 Ricardo Busquet - ", new Date().getFullYear(), /* @__PURE__ */ React2.createElement("br", null), "powered by \u{1F4BF}", " ", /* @__PURE__ */ React2.createElement("a", {
    href: "https://remix.run",
    rel: "noopener noreferer"
  }, "REMIX")));
}
function CatchBoundary() {
  let caught = (0, import_remix2.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React2.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React2.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React2.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React2.createElement(Layout, null, /* @__PURE__ */ React2.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React2.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React2.createElement(Layout, null, /* @__PURE__ */ React2.createElement("h1", null, "There was an error"), /* @__PURE__ */ React2.createElement("p", null, error.message), /* @__PURE__ */ React2.createElement("hr", null), /* @__PURE__ */ React2.createElement("p", null, "Oh, no! Our website... it's broken!")));
}
var RouteChangeAnnouncement = React2.memo(() => {
  let [hydrated, setHydrated] = React2.useState(false);
  let [innerHtml, setInnerHtml] = React2.useState("");
  let location = (0, import_remix2.useLocation)();
  React2.useEffect(() => {
    setHydrated(true);
  }, []);
  let firstRenderRef = React2.useRef(true);
  React2.useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    let pageTitle = location.pathname === "/" ? "Home page" : document.title;
    setInnerHtml(`Navigated to ${pageTitle}`);
  }, [location.pathname]);
  if (!hydrated) {
    return null;
  }
  return /* @__PURE__ */ React2.createElement("div", {
    "aria-live": "assertive",
    "aria-atomic": true,
    id: "route-change-region",
    style: {
      border: "0",
      clipPath: "inset(100%)",
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: "0",
      position: "absolute",
      width: "1px",
      whiteSpace: "nowrap",
      wordWrap: "normal"
    }
  }, innerHtml);
});

// route:/Users/ricardo/dev/ricardobusquet.com/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader,
  meta: () => meta5
});
init_react();
var import_remix3 = __toModule(require_remix());

// mdx:/Users/ricardo/dev/ricardobusquet.com/app/routes/posts/advent-of-code.md
var advent_of_code_exports = {};
__export(advent_of_code_exports, {
  attributes: () => attributes,
  default: () => advent_of_code_default,
  filename: () => filename,
  headers: () => headers,
  links: () => links2,
  meta: () => meta
});
init_react();
var import_react = __toModule(require("react"));
var attributes = {
  "meta": {
    "title": "Advent of Code 2020 - Solutions review",
    "date": "2020-12-06",
    "categories": ["advent-of-code", "python"],
    "coverImage": "advent-of-code-2020-solutions-review.jpg",
    "credits": 'Photo by <a href="https://unsplash.com/@markusspiske">Markus Spiske</a>'
  }
};
function MDXContent(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    span: "span",
    h4: "h4",
    ul: "ul",
    li: "li",
    p: "p",
    del: "del",
    blockquote: "blockquote",
    h2: "h2",
    em: "em",
    code: "code",
    pre: "pre"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(_components.h1, {
    id: "advent-of-code-2020---solutions-review"
  }, /* @__PURE__ */ import_react.default.createElement(_components.a, {
    "aria-hidden": "true",
    tabIndex: "-1",
    href: "#advent-of-code-2020---solutions-review"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "icon icon-link"
  })), "Advent of Code 2020 - Solutions review"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h4, {
    id: "solved-challenges"
  }, /* @__PURE__ */ import_react.default.createElement(_components.a, {
    "aria-hidden": "true",
    tabIndex: "-1",
    href: "#solved-challenges"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "icon icon-link"
  })), "Solved challenges"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, /* @__PURE__ */ import_react.default.createElement(_components.a, {
    href: "#day-1-report-repair"
  }, "Day 1: Report Repair")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, /* @__PURE__ */ import_react.default.createElement(_components.a, {
    href: "#day-2-password-philosophy"
  }, "Day 2: Password Philosophy")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, /* @__PURE__ */ import_react.default.createElement(_components.a, {
    href: "#day-3-toboggan-trajectory"
  }, "Day 3: Toboggan Trajectory")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, /* @__PURE__ */ import_react.default.createElement(_components.a, {
    href: "#day-4-passport-processing"
  }, "Day 4: Passport Processing")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, /* @__PURE__ */ import_react.default.createElement(_components.a, {
    href: "#day-5-binary-boarding"
  }, "Day 5: Binary Boarding")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, /* @__PURE__ */ import_react.default.createElement(_components.a, {
    href: "#day-6-custom-customs"
  }, "Day 6: Custom Customs")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, /* @__PURE__ */ import_react.default.createElement(_components.a, {
    href: "#day-17-conway-cubes"
  }, "Day 17: Conway Cubes")), "\n"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Since 2018, every December, I ", /* @__PURE__ */ import_react.default.createElement(_components.del, null, "try to"), " work my way through ", /* @__PURE__ */ import_react.default.createElement(_components.a, {
    href: "https://adventofcode.com/about"
  }, "Advent of Code"), ", a set of 25 puzzles revealed each day this month, until Christmas day. This has been around since 2015 (I also tried working on the earlier years, check all of my solutions in my ", /* @__PURE__ */ import_react.default.createElement(_components.a, {
    href: "https://github.com/rbusquet/advent-of-code"
  }, "advent of code repo"), ")."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "A short description from their about page:"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.blockquote, null, "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Advent of Code is an Advent calendar of small programming puzzles for a variety of skill sets and skill levels that can be solved in any programming language you like. People use them as a speed contest, interview prep, company training, university coursework, practice problems, or to challenge each other."), "\n"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "The puzzles vary in difficulty, getting harder through the month. This year, I'll be writing about my solutions and a little about each puzzle's rationale and thought process. I'm not planning to get the best solution for each problem, but I try going about one or two steps on optimizations to showcase language features or get better run times. I'll also assume all my inputs will lead to a valid result, so no significant error checks will be done."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "I'll mainly use python for the solutions. It's the language I'm most proficient in, and this year it's been proving to have a lot of excellent tools to get cleaner results."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "We're on Day 6 at the time of writing, so I'll go over each day in this post, then update through the week. Follow along with me!"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h2, {
    id: "day-1-report-repair"
  }, /* @__PURE__ */ import_react.default.createElement(_components.a, {
    "aria-hidden": "true",
    tabIndex: "-1",
    href: "#day-1-report-repair"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "icon icon-link"
  })), "Day 1: Report Repair"), "\n", /* @__PURE__ */ import_react.default.createElement("small", null, /* @__PURE__ */ import_react.default.createElement(_components.a, {
    href: "https://adventofcode.com/2020/day/1"
  }, "Go to challenge")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "TO START: I absolutely love the stories every year. Every year, the main character is an elf, tasked with ", /* @__PURE__ */ import_react.default.createElement(_components.em, null, "saving Christmas"), ". This year though, we're going on a vacation. Christmas is safe! Some good news this year, at last :)"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, `In the first part of day 1, we're tasked with processing an expense report--a list of numbers, and we have to find the two entries that add up to 2020 and multiply these numbers together. The input was super short, so I could go with the "brute force" approach. For each number, go over the list again and find the one that adds up to 2020. I knew a simple trick to traverse the list once: using a set as the data structure to hold the numbers, I can find an item in constant time. For each number, I just need to check if `, /* @__PURE__ */ import_react.default.createElement(_components.code, null, "2020 - number"), " is on the list!"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-python"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "part_one"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-params"
  }, "report: ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-type"
  }, "List"), "[", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), "]"), "):\n    report_set = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "set"), "(report)\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " number ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " report:\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "2020"), " - number ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " report_set:\n            ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " number * (", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "2020"), " - number)\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "The second part presents a similar puzzle, but now we need to find 3 numbers that add up to 2020. At this point, I remembered of python's ", /* @__PURE__ */ import_react.default.createElement(_components.a, {
    href: "https://docs.python.org/3.8/library/itertools.html?#itertools.combinations"
  }, /* @__PURE__ */ import_react.default.createElement(_components.code, null, "itertools.combinations")), ". This returns the subsequences of a list with the given size. I can use it also for part 1, so I just wrote a generic solution:"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-python"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "from"), " functools ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "import"), " reduce\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "from"), " itertools ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "import"), " combinations\n\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "solve_with_combinations"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-params"
  }, "report, n"), "):\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " test ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " combinations(report, n):\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "sum"), "(test) == ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "2020"), ":\n            ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " reduce(mul, test)\n\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "part_one_combinations"), "():\n    solve_with_combinations(report, ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "2"), ")\n\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "part_one_combinations"), "():\n    solve_with_combinations(report, ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "3"), ")\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Python will generate the combinations in a complexity better than O(n", /* @__PURE__ */ import_react.default.createElement("sup", null, "2"), ") or O(n", /* @__PURE__ */ import_react.default.createElement("sup", null, "3"), "), but I found out I could get O(n", /* @__PURE__ */ import_react.default.createElement("sup", null, "2"), ") for part two. The solution involves sorting the list beforehand, then using a two-pointer technique: for each number in the list, I keep a pointer to the next number and the last of the list. If the sum is more than 2020, I decrease the end pointer to reduce the sum. If it's less than 2020, I increase the first pointer to get a larger sum. I repeat it for each item until I find all 3 numbers that match the requirements. I had to do a bit of research, so here's ", /* @__PURE__ */ import_react.default.createElement(_components.a, {
    href: "https://www.geeksforgeeks.org/find-a-triplet-that-sum-to-a-given-value/"
  }, "the source"), "."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-python"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "best_performance_part_two"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-params"
  }, "report"), "):\n    n = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "len"), "(report)\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " i ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "range"), "(n):\n        left = i + ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "1"), "\n        right = n - ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "1"), "\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "while"), " left < right:\n            result = report[i] + report[left] + report[right]\n            ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " result == ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "2020"), ":\n                ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " report[i] * report[left] * report[right]\n            ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " result < ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "2020"), ":\n                left += ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "1"), "\n            ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "else"), ":\n                right -= ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "1"), "\n\nbest_performance_part_two(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "sorted"), "(report))\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h2, {
    id: "day-2-password-philosophy"
  }, /* @__PURE__ */ import_react.default.createElement(_components.a, {
    "aria-hidden": "true",
    tabIndex: "-1",
    href: "#day-2-password-philosophy"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "icon icon-link"
  })), "Day 2: Password Philosophy"), "\n", /* @__PURE__ */ import_react.default.createElement("small", null, /* @__PURE__ */ import_react.default.createElement(_components.a, {
    href: "https://adventofcode.com/2020/day/2"
  }, "Go to challenge")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "On day 2, we're tasked with processing a list of passwords and checking if they follow a set policy. Each line of the input gives the policy and the password to check. The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. A valid input looks like this:"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-plaintext"
  }, "1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "For this one, I went with a ", /* @__PURE__ */ import_react.default.createElement(_components.a, {
    href: "https://en.wikipedia.org/wiki/Regular_expression"
  }, "regular expression"), " to parse each line and a ", /* @__PURE__ */ import_react.default.createElement(_components.a, {
    href: "https://docs.python.org/3/library/collections.html#collections.Counter"
  }, /* @__PURE__ */ import_react.default.createElement(_components.code, null, "collections.Counter")), " to see if the letter has the correct count. Not much to improve there."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-python"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "import"), " re\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "from"), " collections ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "import"), " Counter\n\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "part_one"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-params"
  }, "passwords: ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-type"
  }, "List"), "[", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "str"), "]"), "):\n    valid = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), "\n\n    expression = re.", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "compile"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, 'r"(\\d+)-(\\d+) (.): (.*)"'), ")\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " password ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " passwords:\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " match := expression.match(password):\n            min_, max_, letter, password = match.groups()\n            count = Counter(password)[letter]\n            ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " count >= ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), "(min_) ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "and"), " count <= ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), "(max_):\n                valid += ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "1"), "\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " valid\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "In part 2, the only difference is a reinterpretation of the policy. Each policy actually describes two positions in the password, and exactly one of these positions must contain the given letter. So I just get the letters, add a set, and test if the set has size two (meaning the letters are different), and the given letter is in the set. There might definitely be better ways to check this, but here it goes:"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-python"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "part_two"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-params"
  }, "passwords: ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-type"
  }, "List"), "[", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "str"), "]"), "):\n    valid = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), "\n\n    expression = re.", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "compile"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, 'r"(\\d+)-(\\d+) (.): (.*)"'), ")\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " password ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " passwords:\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " match := expression.match(password):\n            pos_1, pos_2, letter, password = match.groups()\n            letters = {password[", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), "(pos_1) - ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "1"), "], password[", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), "(pos_2) - ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "1"), "]}\n            ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "len"), "(letters) == ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "2"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "and"), " letter ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " letters:\n                valid += ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "1"), "\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " valid\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h2, {
    id: "day-3-toboggan-trajectory"
  }, /* @__PURE__ */ import_react.default.createElement(_components.a, {
    "aria-hidden": "true",
    tabIndex: "-1",
    href: "#day-3-toboggan-trajectory"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "icon icon-link"
  })), "Day 3: Toboggan Trajectory"), "\n", /* @__PURE__ */ import_react.default.createElement("small", null, /* @__PURE__ */ import_react.default.createElement(_components.a, {
    href: "https://adventofcode.com/2020/day/3"
  }, "Go to challenge")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, 'In this one, the puzzle input is a section of a "map", where the ', /* @__PURE__ */ import_react.default.createElement(_components.code, null, "."), " represent empty spaces and ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "#"), " represents a tree, representing the geography of an area you're going to be sliding with a ", /* @__PURE__ */ import_react.default.createElement(_components.a, {
    href: "https://en.wikipedia.org/wiki/Toboggan"
  }, "Toboggan"), ". You want to find a slope in the map where you're finding the smaller amount of trees (steering is hard in this area!)."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, 'The map is only a section of the geography: the pattern repeats to the right "many times". This was a hint to me that there might be a way to figure out where in the map you are without "glueing" those sections together.'), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Part 1 just asks how many trees are there if you go down a slope ", /* @__PURE__ */ import_react.default.createElement(_components.em, null, "right 3, down 1"), `, which means you'll walk 3 squares to the right, then one down. The map have much more rows than columns, so it means you'll end up in this "extended area". How can we read this map and count the trees without duplicating the lines to figure out how these hidden areas look like? The solution is keeping track of your position and every time your coordinates land outside the size of the line, you figure out the new index by getting the modulo of your position and the size of the line.`), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "I made part 1 generic to any slope thinking about the fact that I needed to do it for more cases, here's the solution I landed:"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-python"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "from"), " itertools ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "import"), " count\n\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "count_trees"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-params"
  }, "right, down"), "):\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# [`itertools.count`][count] yields numbers separated by `step`."), "\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# Think range() but unbound. Really nice for this case!"), "\n    counter = count(step=right)\n    total_trees = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), "\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " i, line ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "enumerate"), "(read_file()):\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, '# line is something like ".....#.##......#..##..........#"'), "\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " i % down != ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), ":\n            ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# If going down more than once at a time, go straight to"), "\n            ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# the lines that are multiple of `down`."), "\n            ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "continue"), "\n        line = line.strip()\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# next counter will return the steps I'm walking right."), "\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# If I land after the end of the line, the modulo"), "\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# will return an index that will represent what's in the"), "\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# square out of bounds."), "\n        position = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "next"), "(counter) % ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "len"), "(line)\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# this is a nice trick with python booleans. They are actually an"), "\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# extension of integers, and False == 1 :)"), "\n        total_trees += line[position] == ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"#"'), "\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " total_trees\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "For part 2, it was just asked to check the tree count for other slopes (including one where you'd be going down more two rows). I just passed these to the function above and multiplied the values."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-python"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "from"), " functools ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "import"), " reduce\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "from"), " operator ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "import"), " mul\n\nvals = [\n    count_trees(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "1"), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "1"), "),\n    count_trees(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "3"), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "1"), "),\n    count_trees(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "5"), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "1"), "),\n    count_trees(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "7"), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "1"), "),\n    count_trees(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "1"), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "2"), "),\n]\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "print"), "(reduce(mul, vals))\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h2, {
    id: "day-4-passport-processing"
  }, /* @__PURE__ */ import_react.default.createElement(_components.a, {
    "aria-hidden": "true",
    tabIndex: "-1",
    href: "#day-4-passport-processing"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "icon icon-link"
  })), "Day 4: Passport Processing"), "\n", /* @__PURE__ */ import_react.default.createElement("small", null, /* @__PURE__ */ import_react.default.createElement(_components.a, {
    href: "https://adventofcode.com/2020/day/4"
  }, "Go to challenge")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, `This one felt like work. We're tasked with validating passports, and checking if they have the required fields. Fields are those of a common passport (date of birth, issue date, country, etc.). Country is not required because "North Pole Credentials aren't issued by a country".`), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "I used [dataclasses][dataclasses] and read the input file, passing the a key-value map of the results to the auto-generated constructor. If any of the required arguments were missing, the constructor would raise an exception, which I catch and skip the passport as invalid."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-python"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-meta"
  }, "@dataclass"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "class"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "Passport"), ":\n    byr: ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "str"), "  ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# Birth Year"), "\n    iyr: ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "str"), "  ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# Issue Year"), "\n    eyr: ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "str"), "  ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# Expiration Year"), "\n    hgt: ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "str"), "  ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# Height"), "\n    hcl: ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "str"), "  ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# Hair Color"), "\n    ecl: ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "str"), "  ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# Eye Color"), "\n    pid: ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "str"), "  ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# Passport ID"), "\n    cid: ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "str"), " = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '""'), "  ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# country. The assignment at the class definition will make this field not required"), "\n\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "part_1"), "():\n    passports = []\n    p = {}\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " line ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " read_file():\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "not"), " line.strip():\n            ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "try"), ":\n                passports.append(Passport(**p))\n            ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "except"), " TypeError:\n                ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "continue"), "\n            ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "finally"), ":\n                p = {}\n            ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "continue"), "\n        values = line.strip().split(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '" "'), ")\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " value ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " values:\n            k, v = value.split(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '":"'), ")\n            p[k] = v\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# last line"), "\n    passports.append(Passport(**p))\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " passports\n\nfirst_pass_valid = part_1()\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "print"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "len"), "(first_pass_valid))\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Part 2 extends the validation. So I just added a ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "validate"), " method to the passport dataclass and called for the valid passports on part 1."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-python"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-meta"
  }, "@dataclass"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "class"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "Passport"), ":\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# fields..."), "\n\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "validate"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-params"
  }, "self"), "):\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "assert"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "1920"), " <= ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), "(self.byr) <= ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "2002"), "\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "assert"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "2010"), " <= ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), "(self.iyr) <= ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "2020"), "\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "assert"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "2020"), " <= ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), "(self.eyr) <= ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "2030"), "\n        h, unit = size_re.match(self.hgt).groups()\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " unit == ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"cm"'), ":\n            ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "assert"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "150"), " <= ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), "(h) <= ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "193"), "\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "else"), ":\n            ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "assert"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "59"), " <= ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), "(h) <= ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "76"), "\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "assert"), " hair_re.match(self.hcl)\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "assert"), " self.ecl ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " [", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"amb"'), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"blu"'), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"brn"'), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"gry"'), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"grn"'), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"hzl"'), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"oth"'), "]\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "assert"), " pid_re.match(self.pid)\n\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# ... part 1"), "\n\nvalid = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " passport ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " first_pass_valid:\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "try"), ":\n        passport.validate()\n        valid += ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "1"), "\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "except"), " Exception:\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "print"), "(passport)\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "continue"), "\n\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "print"), "(valid)\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "I almost skipped this one. This looks too much like my day-to-day work (validate forms for business logic and save is the bread and butter of web applications nowadays)."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h2, {
    id: "day-5-binary-boarding"
  }, /* @__PURE__ */ import_react.default.createElement(_components.a, {
    "aria-hidden": "true",
    tabIndex: "-1",
    href: "#day-5-binary-boarding"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "icon icon-link"
  })), "Day 5: Binary Boarding"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, `This was a fun one. I should've noticed by the name of today's puzzle there was an easier solution than almost writing verbatim the puzzle rules. Today we're looking through a list of boarding passes and "decoding" the seat IDs from the passes codes. From the day instructions, 'a seat might be specified like FBFBBFFRLR, where F means "front", B means "back", L means "left", and R means "right"'. This defines a `, /* @__PURE__ */ import_react.default.createElement(_components.code, null, "binary space partitioning"), ". I then proceeded to write the algorithm exactly like the puzzle described. Part 1 was asking to submit the highest seat ID. So here's the implementation:"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-python"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "partition"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-params"
  }, "code: ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "str"), ", count: ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), ", lower_ch: ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "str"), ", upper_ch: ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "str")), ") -> ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), ":\n    left = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), "\n    right = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "2"), " ** count\n\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " i ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "range"), "(count):  ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# for each char in the code"), "\n        ch = code[i]\n        mid = (right + left) // ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "2"), "  ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# split the current length in two groups"), "\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " ch == lower_ch:\n            ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, '# if the char represent the "lower half" of the current region, move'), "\n            ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# the right pointer to the middle"), "\n            right = mid\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "elif"), " ch == upper_ch:\n            ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# else, move the left pointer to the middle"), "\n            left = mid\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# you'll either end with the same number or there will be a difference"), "\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# of 1. Return the minimum."), "\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "min"), "(left, right)\n\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "part_1"), "():\n    max_id = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), "\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " code ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " read_file():\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# First 7 letters represent the row"), "\n        row = partition(code[:", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "7"), "], ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "7"), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"F"'), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"B"'), ")\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# last 3 represent the colums"), "\n        col = partition(code[-", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "3"), ":], ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "3"), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"L"'), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"R"'), ")\n        seat_id = row * ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "8"), " + col\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " seat_id > max_id:\n            max_id = seat_id\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " max_id\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, 'When discussing with colleagues about day 5 solutions, one of them pointed out the rules were just the steps to transform a binary number into its base-10 representation, where "F"/"B" and "L"/"R" are "0" and "1". The ', /* @__PURE__ */ import_react.default.createElement(_components.code, null, "int"), " constructor in python can cast string representation of numbers in any base, which you can set as the second parameter. So ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, 'int("1001", 2)'), " will return ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "9"), "."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-python"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "to_int"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-params"
  }, "code, zero, one"), "):\n    code = code.replace(zero, ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"0"'), ").replace(one, ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"1"'), ")\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), "(code, base=", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "2"), ")\n\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# ..."), "\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " code ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " read_file():\n        row = to_int(code[:", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "7"), "], ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"F"'), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"B"'), ")\n        col = to_int(code[-", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "3"), ":], ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"L"'), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"R"'), ")\n        seat_id = row * ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "8"), " + col\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Neat."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, `For part 2, we want to find the only missing seat ID in the list (the story character lost their boarding pass!). I could not for the life of me figure out how to do that. The puzzle states the "back" and the "front" of the airplane are empty, so you need to find the empty spot in the "middle". I went with the first idea in my mind: let's visualize the airplane after all seats are filled, print out the column and row, and manually find the seat ID.`), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-python"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "part_2_visualization"), "():\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, `"""
    Will print something like this with my input
    ...
    086 -> ['#', '#', '#', '#', '#', '#', '#', '#']
    087 -> ['#', '#', '#', '#', '#', '#', '#', '#']
    088 -> ['#', '.', '#', '#', '#', '#', '#', '#']
    089 -> ['#', '#', '#', '#', '#', '#', '#', '#']
    090 -> ['#', '#', '#', '#', '#', '#', '#', '#']
    ...
    meaning the free seat is in row 88, col 1.
    """`), "\n    aircraft = [[", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"."'), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " _ ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "range"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "8"), ")] ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " _ ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "range"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "128"), ")]\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " code ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " read_file():\n        row = partition(code[:", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "7"), "], ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "7"), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"F"'), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"B"'), ")\n        col = partition(code[-", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "3"), ":], ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "3"), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"L"'), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"R"'), ")\n        aircraft[row][col] = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"#"'), "\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " i, x ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "enumerate"), "(aircraft):\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "print"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"{:0>3} -> {}"'), ".", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "format"), "(i, x))\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Again, talking with colleagues made me understand a programatic solution. It's given that the plane is full. The ID formula is ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "row * 8 + col"), '. The airplane has 8 columns, so seats in the same row will all share the first "piece" of this equation, with the "col" making these ids map to all integers from 0 to 1024 (127 x 8 + 8). With all the ids calculated, I just need to find the difference between the ids I have and the set of all possible ids.'), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-python"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "part_2_for_real_now"), "():\n    ids = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "set"), "()\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " code ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " read_file():\n        row = partition(code[:", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "7"), "], ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "7"), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"F"'), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"B"'), ")\n        col = partition(code[-", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "3"), ":], ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "3"), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"L"'), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"R"'), ")\n\n        ids.add(row * ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "8"), " + col)\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# all possible IDs are between the first and last"), "\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# non-empty seat"), "\n    seat = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "set"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "range"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "min"), "(ids), ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "max"), "(ids))) - ids\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " seat.pop()\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h2, {
    id: "day-6-custom-customs"
  }, /* @__PURE__ */ import_react.default.createElement(_components.a, {
    "aria-hidden": "true",
    tabIndex: "-1",
    href: "#day-6-custom-customs"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "icon icon-link"
  })), "Day 6: Custom Customs"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "This day was an exercise on python's ", /* @__PURE__ */ import_react.default.createElement(_components.a, {
    href: "https://docs.python.org/3/library/collections.html#collections.Counter"
  }, /* @__PURE__ */ import_react.default.createElement(_components.code, null, "Counter")), ` data structure. The input represents questions (marked a to z) people answered "yes" to in a customs declaration form, and for part 1, we're interested in finding how many questions any individual in a group of people answered "yes" to. Each line is an individual, and groups are separated by an empty line.`), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Ah! Also since this day, I stopped separating the puzzles by parts. I'll just write the solutions and separate into functions the repeat bits for better organization."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "So I just pass each line to a ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "Counter"), " instance, and add them up for each group. ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "Counter"), " implements addition so ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "Counter('abc') + Counter('cde')"), " will be equivalent to the dictionary ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "{'c': 2, 'a': 1, 'b': 1, 'd': 1, 'e': 1}"), " (note the key ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "c"), " has value ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "2"), ", because it appears in both sides of the sum)."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-python"
  }, "groups = []\ncurrent_group = Counter()\ngroup_size = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " line ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " read_file():\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " line:\n        current_group += Counter(line)\n        group_size += ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "1"), "\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "else"), ":\n        groups.append([current_group, group_size])\n        current_group = Counter()\n        group_size = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), "\n\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "print"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"--- part 1 ---"'), ")\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, '# the "length" of each group counter is the amont of unique answers for that group.'), "\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# I could use a `set` here: the actual count is not important for part 1"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "print"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "sum"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "map"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "lambda"), " c: ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "len"), "(c[", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), "]), groups)))\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Using ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "Counter"), "s made part 2 super easy. We learn that we don't want to count how many questions ", /* @__PURE__ */ import_react.default.createElement(_components.em, null, "anyone"), ' answered "yes", but the ones where ', /* @__PURE__ */ import_react.default.createElement(_components.em, null, "everyone"), " in the group answered yes."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "So for each group captured in part 1, I call ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "most_common()"), ' in the counter, which will return each letter sorted by their count in decrescent order. If the count is the same as the size of the group, this letter represents the question all individuals answered "yes" to.'), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-python"
  }, "total_count = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " group, count ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " groups:\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " _, ans_count ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " group.most_common():\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " ans_count == count:\n            total_count += ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "1"), "\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "else"), ":\n            ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "break"), "\n\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "print"), "(total_count)\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h1, {
    id: "day-17-conway-cubes"
  }, /* @__PURE__ */ import_react.default.createElement(_components.a, {
    "aria-hidden": "true",
    tabIndex: "-1",
    href: "#day-17-conway-cubes"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "icon icon-link"
  })), "Day 17: Conway Cubes"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "The title says it all: we're dealing with ", /* @__PURE__ */ import_react.default.createElement(_components.a, {
    href: "https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
  }, "Conway's Game of Life"), `. The input is a two-dimensional slice of a three-dimensional grid of "cubes" that can either active or inactive. Cubes change their state in cycles, considering the state of their neighbors. In three-dimensional space, each cube has a total of 26 neighbors (a 3x3x3 integer region in this space). The rules are the general of Conway's game of life:`), "\n", /* @__PURE__ */ import_react.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "If a cube is active and exactly 2 or 3 of its neighbors are also active, the cube remains active. Otherwise, the cube becomes inactive."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "If a cube is inactive but exactly 3 of its neighbors are active, the cube becomes active. Otherwise, the cube remains inactive."), "\n"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "All the puzzle is asking is how many cubes will be active after 6 cycles."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, 'I borrowed the "neighbors" processing from day 11 adjacent seat calculation and extrapolated for N dimensions. I thought we were either using this in a future puzzle, or there would be more dimensions in part 2.'), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-python"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "from"), " itertools ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "import"), " product\n\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "neighborhood"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-params"
  }, "*position: ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int")), ") -> Iterator[", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-type"
  }, "Tuple"), "[", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), "]]:\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"""\n    Returns all "integer" neighbors of a point in an N-dimensional space.\n\n    >>> for n in neighborhood(0, 0):\n    ...     print(n, end=" ")\n    ... (-1, -1) (-1, 0) (-1, 1) (0, -1) (0, 0) (0, 1) (1, -1) (1, 0) (1, 1)\n    >>> for n in neighborhood(1, 2, 3):\n    ...    print(n, end=" ")\n    ... (0, 1, 2) (0, 1, 3) (0, 1, 4) (0, 2, 2) (0, 2, 3) (0, 2, 4) (0, 3, 2) # ...\n    """'), "\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " diff ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " product([-", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "1"), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "1"), "], repeat=", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "len"), "(position)):\n        neighbor = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "tuple"), "(pos + diff[i] ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " i, pos ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "enumerate"), "(position))\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "yield"), " neighbor\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "I start by processing the input, saving if they are active (", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "#"), ") or inactive (", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "."), ") in a dictionary keyed by the point in 3 dimensions"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-python"
  }, "initial = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"""\n####.#..\n.......#\n#..#####\n.....##.\n##...###\n#..#.#.#\n.##...#.\n#...##..\n"""'), ".strip()\n\nspace = defaultdict(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "lambda"), ": ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"."'), ")\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " x, line ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "enumerate"), "(initial.splitlines()):\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " y, state ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "enumerate"), "(line):\n        cube = (x, y, ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), ")\n        space[cube] = state\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Because the space is infinite, cubes for other values of the third-dimension and outside the borders of the input need to be taken into account. Instead of finding the borders of the active nodes, I decided to go over each of the known cubes, and if they are added, I would increment a counter for each of these neighbors. I would end up with more points than the iteration before, and how many of these points have active neighbors."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-python"
  }, "cube_to_active_count = defaultdict(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), ")\n\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " cube ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " space:\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " n ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " neighborhood(*cube):\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " n == cube:  ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# don't count the cube itself"), "\n            ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "continue"), "\n        cube_to_active_count[n] += space[cube] == ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"#"'), "\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "As I said earlier, dictionary ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "cube_to_active_count"), " will end up with more points than the space before. For each of those points I can now decide if they are active or inactive given how many of the original space were active. Here's the direct translation of the rules defined above:"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-python"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " n, count ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " cube_to_active_count.items():\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " space[n] == ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"#"'), ":\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " count ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " [", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "2"), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "3"), "]:\n            space[n] = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"#"'), "\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "else"), ":\n            space[n] = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"."'), "\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "elif"), " space[n] == ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"."'), ":\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " count == ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "3"), ":\n            space[n] = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"#"'), "\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "After running this 6 times (a simple ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "for _ in range(6)"), "), I just sum up the values of the space dictionary that are equal to the active state char ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "#"), "."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Part 2 of the puzzle just asked for running the same 6 cycles, but now in a four-dimensions space! No change was needed to the neighborhood calculation, so that was a win. I needed to change the input parsing to allow for another dimension:"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-diff"
  }, ' space = defaultdict(lambda: ".")\n for x, line in enumerate(initial.splitlines()):\n     for y, state in enumerate(line):\n', /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-deletion"
  }, "-        cube = (x, y, 0)"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-addition"
  }, "+        cube = (x, y, 0, 0)"), "\n         space[cube] = state\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, 'Then I just copied the code verbatim from part 1 and got to the correct answer. It was taking a couple of seconds to run though, given that now we are growing the space in each cycle due to each cube now adding at most 80 cubes to the "known" space state.'), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "I noticed that I was just counting active cubes in the first for loop to find the affected neighbors, adding a lot of references to new points but only saying these had 0 active cubes around them. So I edited the code to skip neighbor processing of inactive cubes (the majority of the iterations), and with a couple of adjustments, I had a solution running in 0.3 seconds. I then generalized it as well to run for multiple dimensions, with some nice tricks to parse the input. Here's the full code for the cycle:"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "hljs language-python"
  }, /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "full_cycle"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-params"
  }, "initial: ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "str"), ", dimensions: ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int")), ") -> ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), ":\n    space = defaultdict(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "lambda"), ": ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"."'), ")\n    padding = (", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), ",) * (dimensions - ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "2"), ")\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " x, line ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "enumerate"), "(initial.splitlines()):\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " y, state ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "enumerate"), "(line):\n            cube = (x, y) + padding\n            space[cube] = state\n\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " _ ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "range"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "6"), "):\n        cube_to_active_count = defaultdict(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), ")\n\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " cube ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " space:\n            ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " space[cube] == ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"."'), ":\n                ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "continue"), "\n            ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " n ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " neighborhood(*cube):\n                ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# neighborhood contains cube and all its neighbors."), "\n                ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# `cube_to_active_count[n] += n != cube` ensures"), "\n                ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# active cubes without active neighbors are counted"), "\n                ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# and proper deactivated by underpopulation in the"), "\n                ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# next for-loop."), "\n                cube_to_active_count[n] += n != cube ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "and"), " space[cube] == ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"#"'), "\n        ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " n, count ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " cube_to_active_count.items():\n            ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " space[n] == ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"#"'), ":\n                ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " count ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " [", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "2"), ", ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "3"), "]:\n                    space[n] = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"#"'), "\n                ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "else"), ":\n                    space[n] = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"."'), "\n            ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "elif"), " space[n] == ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"."'), ":\n                ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " count == ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "3"), ":\n                    space[n] = ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"#"'), "\n\n    ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "sum"), "(state == ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"#"'), " ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " state ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " space.values())\n\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "print"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"--- part 1 ---"'), ")\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "print"), "(full_cycle(initial, ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "3"), "))\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "print"), "(", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"--- part 2 ---"'), ")\n", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "print"), "(full_cycle(initial, ", /* @__PURE__ */ import_react.default.createElement(_components.span, {
    className: "hljs-number"
  }, "4"), "))\n")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "There are a couple of tricks to decrease the line count around the check if a cube becomes active or inactive, but it wouldn't add much in terms of performance. I'm pretty happy with this solution!"));
  return MDXLayout ? /* @__PURE__ */ import_react.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var advent_of_code_default = MDXContent;
var filename = "advent-of-code.md";
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta = typeof attributes !== "undefined" && attributes.meta;
var links2 = void 0;

// mdx:/Users/ricardo/dev/ricardobusquet.com/app/routes/posts/dynamic-nature-python.md
var dynamic_nature_python_exports = {};
__export(dynamic_nature_python_exports, {
  attributes: () => attributes2,
  default: () => dynamic_nature_python_default,
  filename: () => filename2,
  headers: () => headers2,
  links: () => links3,
  meta: () => meta2
});
init_react();
var import_react2 = __toModule(require("react"));
var attributes2 = {
  "meta": {
    "title": "The dynamic nature of Python's MRO",
    "date": "2020-10-02",
    "coverImage": "dynamic-nature-of-python.jpg",
    "categories": ["python"],
    "credits": 'Photo by <a href="https://unsplash.com/@smigielski">Adam \u015Amigielski</a>'
  }
};
function MDXContent2(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    span: "span",
    p: "p",
    pre: "pre",
    code: "code",
    strong: "strong",
    em: "em",
    ul: "ul",
    li: "li"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement(_components.h1, {
    id: "the-dynamic-nature-of-pythons-mro"
  }, /* @__PURE__ */ import_react2.default.createElement(_components.a, {
    "aria-hidden": "true",
    tabIndex: "-1",
    href: "#the-dynamic-nature-of-pythons-mro"
  }, /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "icon icon-link"
  })), "The dynamic nature of Python's MRO"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Imagine the following class relationships:"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.pre, null, /* @__PURE__ */ import_react2.default.createElement(_components.code, {
    className: "hljs language-python"
  }, /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "class"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "Base"), ":\n    ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "chain"), "(", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-params"
  }, "self"), "):\n        ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'Base'"), "\n\n\n", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "class"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "A"), "(", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-class hljs-inherited"
  }, "Base"), "):\n    ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "pass"), "\n\n\n", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "class"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "B"), "(", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-class hljs-inherited"
  }, "Base"), "):\n    ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "chain"), "(", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-params"
  }, "self"), "):\n        ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, 'f"', /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-subst"
  }, "{", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "super"), "().chain()}"), ' <- B"'), "\n\n\n", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "class"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "C"), "(A, B):\n    ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "pass"), "\n\n\n", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "class"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "D"), "(", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-class hljs-inherited"
  }, "C"), "):\n    ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "chain"), "(", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-params"
  }, "self"), "):\n        ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, 'f"', /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-subst"
  }, "{", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "super"), "().chain()}"), ' <- D"'), "\n\n")), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Calling ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "chain"), " in an instance of ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "D"), " will result in the following string:"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.pre, null, /* @__PURE__ */ import_react2.default.createElement(_components.code, {
    className: "hljs language-python"
  }, "In [", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-number"
  }, "1"), "]: d.chain()\nOut[", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-number"
  }, "1"), "]: ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'Base <- B <- D'"), "\n")), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "What would happen if the following code runs?"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.pre, null, /* @__PURE__ */ import_react2.default.createElement(_components.code, {
    className: "hljs language-python"
  }, "In [", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-number"
  }, "2"), "]: A.chain = A.chain\n")), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Inoffensive, right? Now try calling ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "d.chain()"), " again..."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.pre, null, /* @__PURE__ */ import_react2.default.createElement(_components.code, {
    className: "hljs language-python"
  }, "In [", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-number"
  }, "3"), "]: d.chain()\nOut[", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-number"
  }, "3"), "]: ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'Base <- D'"), "\n")), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Let's observe ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "D"), "'s ", /* @__PURE__ */ import_react2.default.createElement(_components.strong, null, "M"), "ethod ", /* @__PURE__ */ import_react2.default.createElement(_components.strong, null, "R"), "esolution ", /* @__PURE__ */ import_react2.default.createElement(_components.strong, null, "O"), "rder (", /* @__PURE__ */ import_react2.default.createElement(_components.em, null, "MRO"), ", the order of classes where Python will look for when resolving methods and attributes):"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.pre, null, /* @__PURE__ */ import_react2.default.createElement(_components.code, {
    className: "hljs language-python"
  }, "In [", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-number"
  }, "4"), "]: D.mro()\nOut[", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-number"
  }, "4"), "]: [__main__.D, __main__.C, __main__.A, __main__.B, __main__.Base, ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "object"), "]\n")), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "When calling ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "D.chain()"), ", Python will look in this list and return the first instance where ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "chain"), " is present as a ", /* @__PURE__ */ import_react2.default.createElement(_components.em, null, "member"), " of the class. In our example, ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "D"), " implements ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "chain"), "."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "D.chain"), " in turn will call ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "super().chain()"), ". What will Python do? it will grab the next class from ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "D"), " and try to find ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "chain"), " in this new list. ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "C"), " doesn't implement it; neither does ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "A"), ". ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "B"), " does! The result will be whatever ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "B.chain"), " returns, plus the bit ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, '" <- D"'), "."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "B.chain"), " does the super() call again... we know what we're doing. Base implements it and there are no more ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "super()"), " calls. So we have ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "Base.chain"), " returning ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, '"Base"'), ", ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "B.chain()"), " returning ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, '"Base <- B"'), ", and ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "D.chain()"), " finally returning ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, '"Base <- B <- D"'), "."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "So what\u2019s going on after we do ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "A.chain = A.chain"), "? Why is ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "B.chain()"), " ignored? Let\u2019s dissect what\u2019s going on with it. What\u2019s ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "A"), "'s MRO?"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.pre, null, /* @__PURE__ */ import_react2.default.createElement(_components.code, {
    className: "hljs language-python"
  }, "In [", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-number"
  }, "5"), "]: A.mro()\nOut[", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-number"
  }, "5"), "]: [__main__.A, __main__.Base, ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "object"), "]\n")), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Pretty simple. What happens when you do ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "A.chain"), "? Python will look at ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "A"), ", which does not implement it. But ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "Base"), " implements it, so that's the implementation it's gonna use. But what's going on when we do the assignment?"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Python evaluates this assignment right to left: ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "A.chain = A.chain"), ' then means "find ', /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "chain"), ' for A", which returns ', /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "Base.chain"), ". Then, ", /* @__PURE__ */ import_react2.default.createElement(_components.em, null, "python will effectively create a new member in the class A named ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "chain")), "!"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Let's go back to D's MRO:"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.pre, null, /* @__PURE__ */ import_react2.default.createElement(_components.code, {
    className: "hljs language-python"
  }, "[__main__.D, __main__.C, __main__.A, __main__.B, __main__.Base, ", /* @__PURE__ */ import_react2.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "object"), "]\n")), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "The way these classes were constructed, ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "A"), "'s members will be tested before ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "B"), "! What does it mean for the resolution order? When ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "D.chain()"), " calls ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "super().chain()"), ", it will now grab the newly added member of ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "A"), " and call it. And from ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "A"), "'s point of view, the implementation is the same as ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "Base.chain"), ", which doesn't have any ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "super()"), " call! \u{1F92F}"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "This happens due to the dynamic nature of Python. ", /* @__PURE__ */ import_react2.default.createElement(_components.a, {
    href: "https://docs.python.org/3/library/functions.html#super"
  }, "The entry for ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "super()"), " in Python's documentation"), " has an amazing description of this issue, and how it's a unique use case due to Python's nature."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Python's multiple inheritance feature, plus its dynamic nature, make it so the actual method resolution order and class hierarchy are only known at runtime and can change at any time during the application lifetime."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Classes designs MUST be ", /* @__PURE__ */ import_react2.default.createElement(_components.em, null, "collaborative"), ". The example above has many issues, ", /* @__PURE__ */ import_react2.default.createElement(_components.a, {
    href: "https://rhettinger.wordpress.com/2011/05/26/super-considered-super/"
  }, "but there is a simple set of rules that help designing collaborative classes"), ":"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react2.default.createElement(_components.li, null, "methods called by super() need to exist"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.li, null, "methods called and their implementations need to have a matching argument signature"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.li, null, "every occurrence of the method needs to use super()"), "\n"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "The point here is that the actual implementation of the method called by ", /* @__PURE__ */ import_react2.default.createElement(_components.code, null, "super()"), " is only known at runtime and cannot be easily defined statically."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Design your classes collaboratively, and watch for mutations in classes in your runtime."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Want to know more about Python's MRO? This amazing article in the Python docs introduces how the algorithm works after version 2.3. ", /* @__PURE__ */ import_react2.default.createElement(_components.a, {
    href: "https://www.python.org/download/releases/2.3/mro/"
  }, "Check it out"), "!"));
  return MDXLayout ? /* @__PURE__ */ import_react2.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var dynamic_nature_python_default = MDXContent2;
var filename2 = "dynamic-nature-python.md";
var headers2 = typeof attributes2 !== "undefined" && attributes2.headers;
var meta2 = typeof attributes2 !== "undefined" && attributes2.meta;
var links3 = void 0;

// mdx:/Users/ricardo/dev/ricardobusquet.com/app/routes/posts/visualizing-use-state.md
var visualizing_use_state_exports = {};
__export(visualizing_use_state_exports, {
  attributes: () => attributes3,
  default: () => visualizing_use_state_default,
  filename: () => filename3,
  headers: () => headers3,
  links: () => links4,
  meta: () => meta3
});
init_react();
var import_react3 = __toModule(require("react"));
var attributes3 = {
  "meta": {
    "title": "Visualizing React hooks' lazy initial state",
    "date": "2020-11-13",
    "categories": ["react", "javascript"],
    "credits": '<span>Photo by <a href="https://unsplash.com/@proozenburg">Presley Roozenburg</a> on <a href="https://unsplash.com/photos/gklfv5avr4c">Unsplash</a></span>',
    "coverImage": "visualizing-lazy-initial-state.jpg"
  }
};
function MDXContent3(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    span: "span",
    p: "p",
    pre: "pre",
    code: "code",
    em: "em",
    strong: "strong"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(_components.h1, {
    id: "visualizing-react-hooks-lazy-initial-state"
  }, /* @__PURE__ */ import_react3.default.createElement(_components.a, {
    "aria-hidden": "true",
    tabIndex: "-1",
    href: "#visualizing-react-hooks-lazy-initial-state"
  }, /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "icon icon-link"
  })), "Visualizing React hooks' lazy initial state"), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.p, null, "Most examples of React hook's ", /* @__PURE__ */ import_react3.default.createElement(_components.a, {
    href: "https://reactjs.org/docs/hooks-reference.html#lazy-initial-state"
  }, "lazy initial state"), " uses inline arrow functions to showcase the usage:"), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.pre, null, /* @__PURE__ */ import_react3.default.createElement(_components.code, {
    className: "hljs language-js"
  }, /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "function"), " ", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "App"), "(", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-params"
  }), ") {\n  ", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "const"), " [state, setState] = ", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "React"), ".", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "useState"), "(", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-function"
  }, "() =>"), " ", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "expensiveComputation"), "());\n  ", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "// ..."), "\n}\n")), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.p, null, "Paired with the idea that whatever you pass to ", /* @__PURE__ */ import_react3.default.createElement(_components.code, null, "React.useState"), " is the initial value of the state, it can be hard to grasp the difference from the example below:"), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.pre, null, /* @__PURE__ */ import_react3.default.createElement(_components.code, {
    className: "hljs language-js"
  }, /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "function"), " ", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "App"), "(", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-params"
  }), ") {\n  ", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "const"), " [state, setState] = ", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "React"), ".", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "useState"), "(", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "expensiveComputation"), "());\n  ", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "// ..."), "\n}\n")), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.p, null, "For me, it helps to visualize the difference if you assign what\u2019s inside the parentheses to a constant."), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.pre, null, /* @__PURE__ */ import_react3.default.createElement(_components.code, {
    className: "hljs language-js"
  }, /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "function"), " ", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "App"), "(", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-params"
  }), ") {\n  ", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "const"), " initialState = ", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), ";\n  ", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "const"), " [state, setState] = ", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "React"), ".", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "useState"), "(initialState);\n  ", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "// ..."), "\n}\n")), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.p, null, "Everytime ", /* @__PURE__ */ import_react3.default.createElement(_components.code, null, "App"), " re-renders, the function ", /* @__PURE__ */ import_react3.default.createElement(_components.code, null, "App"), " will re-run completely. This means ", /* @__PURE__ */ import_react3.default.createElement(_components.code, null, "0"), " is set to ", /* @__PURE__ */ import_react3.default.createElement(_components.code, null, "initialState"), " in every render. Now let's do the same with the expensive computation example:"), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.pre, null, /* @__PURE__ */ import_react3.default.createElement(_components.code, {
    className: "hljs language-js"
  }, /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "function"), " ", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "App"), "(", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-params"
  }), ") {\n  ", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "const"), " initialState = ", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "expensiveComputation"), "();\n  ", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "const"), " [state, setState] = ", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "React"), ".", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "useState"), "(initialState);\n  ", /* @__PURE__ */ import_react3.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "// ..."), "\n}\n")), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.p, null, "It's pretty clear now that the expensive function ", /* @__PURE__ */ import_react3.default.createElement(_components.em, null, "is called every time the component renders"), ". ", /* @__PURE__ */ import_react3.default.createElement(_components.code, null, "React.useState"), " is just ", /* @__PURE__ */ import_react3.default.createElement(_components.strong, null, "ignoring"), " its result in subsequent renders. And that's what you want to avoid when passing a function to the hook."), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.p, null, /* @__PURE__ */ import_react3.default.createElement(_components.code, null, "React.useState"), " implementation detects if you're passing a function and makes sure to call it once for the component's lifetime."), "\n", /* @__PURE__ */ import_react3.default.createElement(_components.p, null, "The tradeoff now is that you're creating a new function for every render. That's acceptable if the computation takes longer or is more complex than instantiating an inline function. If that's not the case (for example, when setting a constant like ", /* @__PURE__ */ import_react3.default.createElement(_components.code, null, "0"), " in the first example), go with passing the value directly to ", /* @__PURE__ */ import_react3.default.createElement(_components.code, null, "React.useState"), "."));
  return MDXLayout ? /* @__PURE__ */ import_react3.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var visualizing_use_state_default = MDXContent3;
var filename3 = "visualizing-use-state.md";
var headers3 = typeof attributes3 !== "undefined" && attributes3.headers;
var meta3 = typeof attributes3 !== "undefined" && attributes3.meta;
var links4 = void 0;

// mdx:/Users/ricardo/dev/ricardobusquet.com/app/routes/posts/aoc-2021.md
var aoc_2021_exports = {};
__export(aoc_2021_exports, {
  attributes: () => attributes4,
  default: () => aoc_2021_default,
  filename: () => filename4,
  headers: () => headers4,
  links: () => links5,
  meta: () => meta4
});
init_react();
var import_react4 = __toModule(require("react"));
var attributes4 = {
  "meta": {
    "title": "Advent of Code 2021",
    "date": "2021-12-01",
    "description": "Solutions + general comments for Advent of Code 2021"
  }
};
function MDXContent4(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    span: "span",
    pre: "pre",
    code: "code",
    p: "p",
    h3: "h3",
    ul: "ul",
    li: "li",
    h2: "h2",
    strong: "strong"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement(_components.h1, {
    id: "advent-of-code-2021"
  }, /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    "aria-hidden": "true",
    tabIndex: "-1",
    href: "#advent-of-code-2021"
  }, /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "icon icon-link"
  })), "Advent of Code 2021"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.pre, null, /* @__PURE__ */ import_react4.default.createElement(_components.code, {
    className: "hljs language-bash"
  }, "                      ~   ~  ~ ~~ ~~~~~~~~~~~~~~~\n                                           ..", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, "''"), /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, "''"), "\n                                  .   .   :\n                          .   . .", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'    ....'"), "\n")), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.p, null, "I'll be posting here my solutions for ", /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    href: "https://adventofcode"
  }, "AoC 2021"), ". Follow along!"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.h3, {
    id: "table-of-contents"
  }, /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    "aria-hidden": "true",
    tabIndex: "-1",
    href: "#table-of-contents"
  }, /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "icon icon-link"
  })), "Table of contents"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react4.default.createElement(_components.li, null, /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    href: "#day-1-sonar-sweep"
  }, "Day 1: Sonar Sweep")), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.li, null, /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    href: "#day-2-dive"
  }, "Day 2: Dive!")), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.li, null, /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    href: "#day-3-binary-diagnostic"
  }, "Day 3: Binary Diagnostic")), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.li, null, /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    href: "#day-4-giant-squid"
  }, "Day 4: Giant Squid")), "\n"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.h2, {
    id: "day-1-sonar-sweep"
  }, /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    "aria-hidden": "true",
    tabIndex: "-1",
    href: "#day-1-sonar-sweep"
  }, /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "icon icon-link"
  })), "Day 1: Sonar Sweep"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.p, null, /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    href: "https://adventofcode.com/2021/day/1"
  }, "https://adventofcode.com/2021/day/1")), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.p, null, "For part 1, we're given a list of numbers and are asked how many times the numbers increase relatively to the previous number. The solution is pretty straightforward: loop over the list, compare each item with the previous, count the occurrence where it's greater than the previous:"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.pre, null, /* @__PURE__ */ import_react4.default.createElement(_components.code, {
    className: "hljs language-python"
  }, /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "from"), " pathlib ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "import"), " Path\n", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "part_1"), "():\n    ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "with"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "open"), "(Path(__file__).parent / ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"input.txt"'), ") ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "as"), " file:\n        previous = ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), "(file.readline())\n    \n        increases = ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), "\n        ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " value ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "map"), "(", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), ", file):\n            increases += value > previous\n            previous = value\n        ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " increases\n")), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.p, null, "For part 2, we're asked to consider the sum of a ", /* @__PURE__ */ import_react4.default.createElement(_components.strong, null, "three-measurement sliding window"), ". I thought I would need a ", /* @__PURE__ */ import_react4.default.createElement(_components.code, null, "deque"), " to keep a list of 3 values, or use list comprehension + slices, when I remembered about ", /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    href: "https://docs.python.org/3/library/itertools.html#itertools-recipes"
  }, "these recipes"), " in the python docs. I copied over an implementation for a generator of these windows and used for my solution:"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.pre, null, /* @__PURE__ */ import_react4.default.createElement(_components.code, {
    className: "hljs language-python"
  }, /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "import"), " collections\n", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "from"), " itertools ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "import"), " islice\n", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "from"), " pathlib ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "import"), " Path\n\n", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "sliding_window"), "(", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-params"
  }, "iterable, n"), "):\n    ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# sliding_window('ABCDEFG', 4) -> ABCD BCDE CDEF DEFG"), "\n    it = ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "iter"), "(iterable)\n    window = collections.deque(islice(it, n), maxlen=n)\n    ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "len"), "(window) == n:\n        ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "yield"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "tuple"), "(window)\n    ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " x ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " it:\n        window.append(x)\n        ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "yield"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "tuple"), "(window)\n\n", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "part_2"), "():\n    ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "with"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "open"), "(Path(__file__).parent / ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"input.txt"'), ") ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "as"), " file:\n        it = sliding_window(", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "map"), "(", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), ", file), ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-number"
  }, "3"), ")\n        previous = ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "next"), "(it)\n    \n        increases = ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), "\n        ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " window ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " it:\n            increases += ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "sum"), "(window) > ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "sum"), "(previous)\n            previous = window\n        ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " increases\n")), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.p, null, "For the next days, I'm adding ", /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    href: "https://pypi.org/project/more-itertools/"
  }, /* @__PURE__ */ import_react4.default.createElement(_components.code, null, "more-itertools")), " to have these recipes readily available!"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.p, null, "Check my repository for the ", /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    href: "https://github.com/rbusquet/advent-of-code/blob/main/2021/01/day1.py"
  }, "final code for day 1"), ". See y'all tomorrow!"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.h2, {
    id: "day-2-dive"
  }, /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    "aria-hidden": "true",
    tabIndex: "-1",
    href: "#day-2-dive"
  }, /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "icon icon-link"
  })), "Day 2: Dive!"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.p, null, /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    href: "https://adventofcode.com/2021/day/2"
  }, "https://adventofcode.com/2021/day/2")), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.p, null, "Today, we're piloting a submarine, which has a planned course defined by a series of instructions (our input):"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react4.default.createElement(_components.li, null, /* @__PURE__ */ import_react4.default.createElement(_components.code, null, "forward X"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.strong, null, "increases"), " the horizontal position by ", /* @__PURE__ */ import_react4.default.createElement(_components.code, null, "X"), " units."), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.li, null, /* @__PURE__ */ import_react4.default.createElement(_components.code, null, "down X"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.strong, null, "increases"), " the depth by ", /* @__PURE__ */ import_react4.default.createElement(_components.code, null, "X"), " units."), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.li, null, /* @__PURE__ */ import_react4.default.createElement(_components.code, null, "up X"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.strong, null, "decreases"), " the depth by ", /* @__PURE__ */ import_react4.default.createElement(_components.code, null, "X"), " units."), "\n"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.p, null, "I think this looks neat with Python 3.10's structural pattern matching:"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.pre, null, /* @__PURE__ */ import_react4.default.createElement(_components.code, {
    className: "hljs language-python"
  }, "horizontal = depth = ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " command ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " file:\n    match command.split(", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, '" "'), "):\n        case [", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"forward"'), ", distance]:\n            horizontal += ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), "(distance)\n        case [", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"up"'), ", distance]:\n            depth -= ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), "(distance)\n        case [", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"down"'), ", distance]:\n            depth += ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), "(distance)\n", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " horizontal * depth\n")), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.p, null, "The puzzle claim that the result doesn't make sense, and when checking the submarine manual we notice the intructions track not only horizontal position and depth, but also ", /* @__PURE__ */ import_react4.default.createElement(_components.strong, null, "aim"), ", and the commands are also entirely different:"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react4.default.createElement(_components.li, null, /* @__PURE__ */ import_react4.default.createElement(_components.code, null, "down X"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.strong, null, "increases"), " your aim by ", /* @__PURE__ */ import_react4.default.createElement(_components.code, null, "X"), " units."), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.li, null, "up X ", /* @__PURE__ */ import_react4.default.createElement(_components.strong, null, "decreases"), " your aim by ", /* @__PURE__ */ import_react4.default.createElement(_components.code, null, "X"), " units."), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.li, null, "forward X does two things:", "\n", /* @__PURE__ */ import_react4.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react4.default.createElement(_components.li, null, "It ", /* @__PURE__ */ import_react4.default.createElement(_components.strong, null, "increases"), " your horizontal position by ", /* @__PURE__ */ import_react4.default.createElement(_components.code, null, "X"), " units."), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.li, null, "It ", /* @__PURE__ */ import_react4.default.createElement(_components.strong, null, "increases"), " your depth by your aim multiplied by ", /* @__PURE__ */ import_react4.default.createElement(_components.code, null, "X"), "."), "\n"), "\n"), "\n"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.p, null, "The solution looks a lot like part 1, but tracking the new ", /* @__PURE__ */ import_react4.default.createElement(_components.code, null, "aim"), " variable:"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.pre, null, /* @__PURE__ */ import_react4.default.createElement(_components.code, {
    className: "hljs language-python"
  }, "horizontal = depth = aim = ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " command ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " file:\n    match command.split(", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, '" "'), "):\n        case [", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"forward"'), ", distance]:\n            horizontal += ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), "(distance)\n            depth += ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), "(distance) * aim\n        case [", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"up"'), ", distance]:\n            aim -= ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), "(distance)\n        case [", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"down"'), ", distance]:\n            aim += ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), "(distance)\n", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " horizontal * depth\n")), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.p, null, "The final solution for day 2 is in my ", /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    href: "https://github.com/rbusquet/advent-of-code/blob/main/2021/02/day2.py"
  }, "aoc repository"), "!"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.h2, {
    id: "day-3-binary-diagnostic"
  }, /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    "aria-hidden": "true",
    tabIndex: "-1",
    href: "#day-3-binary-diagnostic"
  }, /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "icon icon-link"
  })), "Day 3: Binary Diagnostic"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.p, null, /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    href: "https://adventofcode.com/2021/day/2"
  }, "https://adventofcode.com/2021/day/2")), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.p, null, "On day 3, we're running diagnostics on the submarine. Our puzzle input is a list of binary number that can be decoded into information about the submarine.\nFor part 1, we're checking ", /* @__PURE__ */ import_react4.default.createElement(_components.strong, null, "power consumption"), " by calculating two values: the ", /* @__PURE__ */ import_react4.default.createElement(_components.strong, null, "game rate"), ", determined by finding the ", /* @__PURE__ */ import_react4.default.createElement(_components.strong, null, "most common bit in the corresponding position"), " of all numbers in our input; and the ", /* @__PURE__ */ import_react4.default.createElement(_components.strong, null, "epsilon rate"), ", calculated similarly, but by finding the ", /* @__PURE__ */ import_react4.default.createElement(_components.strong, null, "less common bit"), "."), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.p, null, "My solution was a straighforward translation of the requirements into python code. I used ", /* @__PURE__ */ import_react4.default.createElement(_components.code, null, "collection.Counter"), "s to count the bits for each position, retrieving the value using ", /* @__PURE__ */ import_react4.default.createElement(_components.code, null, "Counter.most_common"), "."), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.pre, null, /* @__PURE__ */ import_react4.default.createElement(_components.code, {
    className: "hljs language-python"
  }, "LENGTH = ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-number"
  }, "12"), "  ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# size of numbers in the report"), "\nreport = [line.strip() ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " line ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " file]\n\n", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "count"), "(", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-params"
  }, "report: Iterable[", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "str"), "], position: ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int")), ") -> Counter[", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "str"), "]:\n    ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " Counter([value[position] ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " value ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " report])\n\ncounters: ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "list"), "[Counter[", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "str"), "]] = []\n", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " position ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "range"), "(LENGTH):  ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# O(LENGTH)"), "\n    counters.append(count(report, position))  ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# O(n)"), "\n\ngamma = [counter.most_common()[", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), "][", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), "] ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " counter ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " counters]\nepsilon = [counter.most_common(", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-number"
  }, "2"), ")[", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-number"
  }, "1"), "][", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), "] ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " counter ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " counters]\n", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " list_of_bits_to_int(gamma) * list_of_bits_to_int(epsilon)\n")), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.p, null, "Next, we're checking the ", /* @__PURE__ */ import_react4.default.createElement(_components.strong, null, "life support rating"), ", again by calculating two numbers, the ", /* @__PURE__ */ import_react4.default.createElement(_components.strong, null, "oxygen generator rating"), " and the ", /* @__PURE__ */ import_react4.default.createElement(_components.strong, null, "CO2 scrubber rating"), ". To be honest, the description of how to locate these values will be much more clear ", /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    href: "https://adventofcode.com/2021/day/2"
  }, "in the actual puzzle"), " than I'd be able to summarize. Let me just show you the code:"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.pre, null, /* @__PURE__ */ import_react4.default.createElement(_components.code, {
    className: "hljs language-python"
  }, "report = ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "list"), "(parse(file))\n\noxygen_report = co2_report = report  ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# keep a reference of the original reports"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " position ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "range"), "(LENGTH):\n    counter = count(oxygen_report, position)  ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# count the bits at the posstion"), "\n    most_common, total = counter.most_common()[", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), "]\n    ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "len"), "(oxygen_report) % ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-number"
  }, "2"), " == ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "and"), " total == ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "len"), "(oxygen_report) / ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-number"
  }, "2"), ":\n        most_common = ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"1"'), "  ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# tie breaker"), "\n\n    ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "len"), "(oxygen_report) != ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-number"
  }, "1"), ":  ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# filter out the numbers in the report that matches the most common"), "\n        oxygen_report = [\n            value ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " value ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " oxygen_report ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " value[position] == most_common\n        ]\n", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " position ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "range"), "(LENGTH):\n    ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# same deal as the above--but we're filtering out the numbers that match the less common bit"), "\n    counter = count(co2_report, position)\n    most_common, total = counter.most_common()[", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), "]\n    ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "len"), "(co2_report) % ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-number"
  }, "2"), " == ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "and"), " total == ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "len"), "(co2_report) / ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-number"
  }, "2"), ":\n        most_common = ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"1"'), "\n\n    ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "len"), "(co2_report) != ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-number"
  }, "1"), ":\n        co2_report = [\n            value ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " value ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " co2_report ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " value[position] != most_common\n        ]\n\n", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " list_of_bits_to_int(oxygen_report[", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), "]) * list_of_bits_to_int(co2_report[", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-number"
  }, "0"), "])\n")), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.p, null, "On day 3 I basically translated the requirements to python--I was surprised there weren't a lot of bitwise trickery to get to the solution. Now we wait for day 4. ", /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    href: "http://was.tl/"
  }, "Eric"), " likes to make us work on the weekends with these puzzles (See ", /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    href: "https://adventofcode.com/2020/day/5"
  }, "https://adventofcode.com/2020/day/5"), ", ", /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    href: "https://adventofcode.com/2020/day/12"
  }, "https://adventofcode.com/2020/day/12"), "...), so I'll be waiting for some fun work tomorrow."), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.p, null, "Check the full solution ", /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    href: "https://github.com/rbusquet/advent-of-code/blob/main/2021/03/day3.py"
  }, "here"), "!"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.h2, {
    id: "day-4-giant-squid"
  }, /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    "aria-hidden": "true",
    tabIndex: "-1",
    href: "#day-4-giant-squid"
  }, /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "icon icon-link"
  })), "Day 4: Giant Squid"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.p, null, /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    href: "https://adventofcode.com/2021/day/4"
  }, "https://adventofcode.com/2021/day/4")), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.p, null, "As expected, a lot of work for me today, having to figure out a data model for storing a board of ", /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    href: "https://en.wikipedia.org/wiki/Bingo_(American_version)"
  }, "bingo"), ". I won't go over the process to get to this class a lot, there are some duplicated data and for-loops that can be optimized, but I got to a solution and I think the class is pretty clear to understand. Follow along in comments to understand each part--here it goes:"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.pre, null, /* @__PURE__ */ import_react4.default.createElement(_components.code, {
    className: "hljs language-python"
  }, /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "from"), " dataclasses ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "import"), " field, dataclass\n\n", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-meta"
  }, "@dataclass"), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "class"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-title hljs-class"
  }, "Board"), ":\n    numbers: ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "dict"), "[", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "tuple"), "[", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), ", ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), "], ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), "] = field(default_factory=", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "dict"), ")\n    checked: ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "dict"), "[", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "tuple"), "[", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), ", ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), "], ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "bool"), "] = field(init=", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-literal"
  }, "False"), ", default_factory=", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "dict"), ")\n    all_numbers: ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "dict"), "[", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), ", ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "tuple"), "[", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), ", ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), "]] = field(default_factory=", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "dict"), ", init=", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-literal"
  }, "False"), ")\n    _winner: ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "bool"), " = field(default=", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-literal"
  }, "False"), ", init=", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-literal"
  }, "False"), ")\n\n    ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "add_square"), "(", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-params"
  }, "self, i: ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), ", j: ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), ", number: ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int")), ") -> ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-literal"
  }, "None"), ":\n        ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, `"""
        Used to build the board, from numbers in the puzzle input.
        I'm storing the checked state as a separate dictionary. A colleague solution
        converted rows and columns into sets and compared to a set of the drawn numbers,
        which is pretty clever
        """`), "\n        self.numbers[i, j] = number\n        self.checked[i, j] = ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-literal"
  }, "False"), "\n        self.all_numbers[number] = (i, j)\n\n    ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "unchecked"), "(", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-params"
  }, "self"), ") -> Iterator[", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "int"), "]:\n        ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"""Yields the unchecked numbers on the board for score calculation."""'), "\n        ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " i ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "range"), "(BOARD_SIZE):\n            ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " j ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "range"), "(BOARD_SIZE):\n                ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "not"), " self.checked[i, j]:\n                    ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "yield"), " self.numbers[i, j]\n\n    ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "winner"), "(", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-params"
  }, "self"), ") -> ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "bool"), ":\n        ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"""Checks if a board is the winner if all positions in a row or column are checked."""'), "\n        ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " self._winner:\n            ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " self._winner\n        ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " i ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "range"), "(BOARD_SIZE):\n            row_checked = ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "all"), "(self.checked[i, j] ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " j ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "range"), "(BOARD_SIZE))\n            column_checked = ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "all"), "(self.checked[j, i] ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "for"), " j ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "range"), "(BOARD_SIZE))\n            ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " row_checked ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "or"), " column_checked:\n                self._winner = ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-literal"
  }, "True"), "\n                ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " self._winner\n        ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-literal"
  }, "False"), "\n\n    ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "def"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-title hljs-function"
  }, "check"), "(", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-params"
  }, "self, number"), ") -> ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-literal"
  }, "None"), ":\n        ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, `"""'checks' a  drawn number against the board, marking it."""`), "\n        ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " self.winner():\n            ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), "\n        ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " number ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "not"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "in"), " self.all_numbers:\n            ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), "\n        i, j = self.all_numbers[number]\n        self.checked[i, j] = ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-literal"
  }, "True"), "\n")), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.p, null, "Check the rest of the game in ", /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    href: "https://github.com/rbusquet/advent-of-code/blob/main/2021/04/day4.py"
  }, "the repo"), ", but it's basically a loop over the drawn numbers and all stored boards, calling ", /* @__PURE__ */ import_react4.default.createElement(_components.code, null, "board.check()"), " and ", /* @__PURE__ */ import_react4.default.createElement(_components.code, null, "board.winner()"), " to verify the states."), "\n", /* @__PURE__ */ import_react4.default.createElement(_components.p, null, "Let's wait for Sunday's puzzle!"));
  return MDXLayout ? /* @__PURE__ */ import_react4.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var aoc_2021_default = MDXContent4;
var filename4 = "aoc-2021.md";
var headers4 = typeof attributes4 !== "undefined" && attributes4.headers;
var meta4 = typeof attributes4 !== "undefined" && attributes4.meta;
var links5 = void 0;

// route:/Users/ricardo/dev/ricardobusquet.com/app/routes/index.tsx
var meta5 = () => {
  return {
    title: "Ricardo Busquet",
    description: "Ricardo Busquet's page"
  };
};
function postFromModule(mod) {
  return __spreadValues({
    slug: mod.filename.replace(/\.mdx?$/, "")
  }, mod.attributes.meta);
}
function loader() {
  return [
    postFromModule(aoc_2021_exports),
    postFromModule(advent_of_code_exports),
    postFromModule(dynamic_nature_python_exports),
    postFromModule(visualizing_use_state_exports)
  ];
}
function Index() {
  let posts = (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", null, "Hello, I'm Ricardo! \u{1F44B}"), /* @__PURE__ */ React.createElement("p", null, "Nice to meet you!"), /* @__PURE__ */ React.createElement("p", null, "I'm a software engineer based in New York. Born and raised in Brazil. Find me on ", /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/ricbusquet"
  }, "Twitter"), " or", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/rbusquet"
  }, "GitHub"), "!")), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h2", null, "Blog posts"), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: `posts/${post.slug}`,
    prefetch: "intent"
  }, post.title), post.description && /* @__PURE__ */ React.createElement("p", null, post.description))))));
}

// route:/Users/ricardo/dev/ricardobusquet.com/app/routes/posts.tsx
var posts_exports = {};
__export(posts_exports, {
  default: () => Index2,
  links: () => links6
});
init_react();
var import_remix4 = __toModule(require_remix());

// app/styles/clean-css.css
var clean_css_default = "/build/_assets/clean-css-O6EJVVHB.css";

// route:/Users/ricardo/dev/ricardobusquet.com/app/routes/posts.tsx
var links6 = () => {
  return [
    { rel: "stylesheet", href: clean_css_default },
    {
      rel: "stylesheet",
      href: "https://unpkg.com/@highlightjs/cdn-assets@11.3.1/styles/base16/default-light.min.css"
    },
    {
      rel: "stylesheet",
      href: "https://unpkg.com/@highlightjs/cdn-assets@11.3.1/styles/base16/default-dark.min.css",
      media: "(prefers-color-scheme: dark)"
    }
  ];
};
function Index2() {
  return /* @__PURE__ */ React.createElement(import_remix4.Outlet, null);
}

// route:/Users/ricardo/dev/ricardobusquet.com/app/routes/posts/index.tsx
var posts_exports2 = {};
__export(posts_exports2, {
  loader: () => loader2
});
init_react();
var import_remix5 = __toModule(require_remix());
var loader2 = () => {
  return (0, import_remix5.redirect)("/");
};

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "ab04cc8e", "entry": { "module": "/build/entry.client-WBPBUNWA.js", "imports": ["/build/_shared/chunk-TNWBCYIC.js", "/build/_shared/chunk-YZVLR6ER.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-FQ6DSCDH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-SHI7VOWV.js", "imports": ["/build/_shared/chunk-G5DTNQEX.js", "/build/_shared/chunk-HPZ4XL4Q.js", "/build/_shared/chunk-OK6TBQ2W.js", "/build/_shared/chunk-G2MB2TZ4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts": { "id": "routes/posts", "parentId": "root", "path": "posts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts-DS3FSD4V.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/advent-of-code": { "id": "routes/posts/advent-of-code", "parentId": "routes/posts", "path": "advent-of-code", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/advent-of-code-FKKRXPCY.js", "imports": ["/build/_shared/chunk-OK6TBQ2W.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/aoc-2021": { "id": "routes/posts/aoc-2021", "parentId": "routes/posts", "path": "aoc-2021", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/aoc-2021-H432AAWX.js", "imports": ["/build/_shared/chunk-G2MB2TZ4.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/dynamic-nature-python": { "id": "routes/posts/dynamic-nature-python", "parentId": "routes/posts", "path": "dynamic-nature-python", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/dynamic-nature-python-3IVE2U5O.js", "imports": ["/build/_shared/chunk-G5DTNQEX.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/index": { "id": "routes/posts/index", "parentId": "routes/posts", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/posts/index-W7XIPZW2.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/visualizing-use-state": { "id": "routes/posts/visualizing-use-state", "parentId": "routes/posts", "path": "visualizing-use-state", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/visualizing-use-state-ZQHNCAR3.js", "imports": ["/build/_shared/chunk-HPZ4XL4Q.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-AB04CC8E.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/posts": {
    id: "routes/posts",
    parentId: "root",
    path: "posts",
    index: void 0,
    caseSensitive: void 0,
    module: posts_exports
  },
  "routes/posts/dynamic-nature-python": {
    id: "routes/posts/dynamic-nature-python",
    parentId: "routes/posts",
    path: "dynamic-nature-python",
    index: void 0,
    caseSensitive: void 0,
    module: dynamic_nature_python_exports
  },
  "routes/posts/visualizing-use-state": {
    id: "routes/posts/visualizing-use-state",
    parentId: "routes/posts",
    path: "visualizing-use-state",
    index: void 0,
    caseSensitive: void 0,
    module: visualizing_use_state_exports
  },
  "routes/posts/advent-of-code": {
    id: "routes/posts/advent-of-code",
    parentId: "routes/posts",
    path: "advent-of-code",
    index: void 0,
    caseSensitive: void 0,
    module: advent_of_code_exports
  },
  "routes/posts/aoc-2021": {
    id: "routes/posts/aoc-2021",
    parentId: "routes/posts",
    path: "aoc-2021",
    index: void 0,
    caseSensitive: void 0,
    module: aoc_2021_exports
  },
  "routes/posts/index": {
    id: "routes/posts/index",
    parentId: "routes/posts",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: posts_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9yaWNhcmRvL2Rldi9yaWNhcmRvYnVzcXVldC5jb20vYXBwL3Jvb3QudHN4IiwgInJvdXRlOi9Vc2Vycy9yaWNhcmRvL2Rldi9yaWNhcmRvYnVzcXVldC5jb20vYXBwL3JvdXRlcy9pbmRleC50c3giLCAibWR4Oi9Vc2Vycy9yaWNhcmRvL2Rldi9yaWNhcmRvYnVzcXVldC5jb20vYXBwL3JvdXRlcy9wb3N0cy9hZHZlbnQtb2YtY29kZS5tZCIsICJtZHg6L1VzZXJzL3JpY2FyZG8vZGV2L3JpY2FyZG9idXNxdWV0LmNvbS9hcHAvcm91dGVzL3Bvc3RzL2R5bmFtaWMtbmF0dXJlLXB5dGhvbi5tZCIsICJtZHg6L1VzZXJzL3JpY2FyZG8vZGV2L3JpY2FyZG9idXNxdWV0LmNvbS9hcHAvcm91dGVzL3Bvc3RzL3Zpc3VhbGl6aW5nLXVzZS1zdGF0ZS5tZCIsICJtZHg6L1VzZXJzL3JpY2FyZG8vZGV2L3JpY2FyZG9idXNxdWV0LmNvbS9hcHAvcm91dGVzL3Bvc3RzL2FvYy0yMDIxLm1kIiwgInJvdXRlOi9Vc2Vycy9yaWNhcmRvL2Rldi9yaWNhcmRvYnVzcXVldC5jb20vYXBwL3JvdXRlcy9wb3N0cy50c3giLCAicm91dGU6L1VzZXJzL3JpY2FyZG8vZGV2L3JpY2FyZG9idXNxdWV0LmNvbS9hcHAvcm91dGVzL3Bvc3RzL2luZGV4LnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9yaWNhcmRvL2Rldi9yaWNhcmRvYnVzcXVldC5jb20vYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL3JpY2FyZG8vZGV2L3JpY2FyZG9idXNxdWV0LmNvbS9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL3JpY2FyZG8vZGV2L3JpY2FyZG9idXNxdWV0LmNvbS9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvcmljYXJkby9kZXYvcmljYXJkb2J1c3F1ZXQuY29tL2FwcC9yb3V0ZXMvcG9zdHMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9yaWNhcmRvL2Rldi9yaWNhcmRvYnVzcXVldC5jb20vYXBwL3JvdXRlcy9wb3N0cy9keW5hbWljLW5hdHVyZS1weXRob24ubWRcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL3JpY2FyZG8vZGV2L3JpY2FyZG9idXNxdWV0LmNvbS9hcHAvcm91dGVzL3Bvc3RzL3Zpc3VhbGl6aW5nLXVzZS1zdGF0ZS5tZFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvcmljYXJkby9kZXYvcmljYXJkb2J1c3F1ZXQuY29tL2FwcC9yb3V0ZXMvcG9zdHMvYWR2ZW50LW9mLWNvZGUubWRcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL3JpY2FyZG8vZGV2L3JpY2FyZG9idXNxdWV0LmNvbS9hcHAvcm91dGVzL3Bvc3RzL2FvYy0yMDIxLm1kXCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9yaWNhcmRvL2Rldi9yaWNhcmRvYnVzcXVldC5jb20vYXBwL3JvdXRlcy9wb3N0cy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL3Bvc3RzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wb3N0c1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwb3N0c1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvcG9zdHMvZHluYW1pYy1uYXR1cmUtcHl0aG9uXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wb3N0cy9keW5hbWljLW5hdHVyZS1weXRob25cIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9wb3N0c1wiLFxuICAgICAgcGF0aDogXCJkeW5hbWljLW5hdHVyZS1weXRob25cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL3Bvc3RzL3Zpc3VhbGl6aW5nLXVzZS1zdGF0ZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcG9zdHMvdmlzdWFsaXppbmctdXNlLXN0YXRlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcG9zdHNcIixcbiAgICAgIHBhdGg6IFwidmlzdWFsaXppbmctdXNlLXN0YXRlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9wb3N0cy9hZHZlbnQtb2YtY29kZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcG9zdHMvYWR2ZW50LW9mLWNvZGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9wb3N0c1wiLFxuICAgICAgcGF0aDogXCJhZHZlbnQtb2YtY29kZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvcG9zdHMvYW9jLTIwMjFcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Bvc3RzL2FvYy0yMDIxXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcG9zdHNcIixcbiAgICAgIHBhdGg6IFwiYW9jLTIwMjFcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL3Bvc3RzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wb3N0cy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3Bvc3RzXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfVxuICB9OyIsICJpbXBvcnQgZXRhZyBmcm9tIFwiZXRhZ1wiO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQsIEhhbmRsZURhdGFSZXF1ZXN0RnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHN0YXR1czogbnVtYmVyLFxuICBoZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIGhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuICBoZWFkZXJzLnNldChcIkVUYWdcIiwgZXRhZyhtYXJrdXApKTtcblxuICAvLyBjaGVjayBpZiB0aGUgYElmLU5vbmUtTWF0Y2hgIGhlYWRlciBtYXRjaGVzIHRoZSBFVGFnXG4gIGlmIChyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiSWYtTm9uZS1NYXRjaFwiKSA9PT0gaGVhZGVycy5nZXQoXCJFVGFnXCIpKSB7XG4gICAgLy8gYW5kIHNlbmQgYW4gZW1wdHkgUmVzcG9uc2Ugd2l0aCBzdGF0dXMgMzA0IGFuZCB0aGUgaGVhZGVycy5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiXCIsIHsgc3RhdHVzOiAzMDQsIGhlYWRlcnMgfSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHsgc3RhdHVzLCBoZWFkZXJzIH0pO1xufVxuXG5leHBvcnQgbGV0IGhhbmRsZURhdGFSZXF1ZXN0OiBIYW5kbGVEYXRhUmVxdWVzdEZ1bmN0aW9uID0gYXN5bmMgKFxuICByZXNwb25zZTogUmVzcG9uc2UsXG4gIHsgcmVxdWVzdCB9XG4pID0+IHtcbiAgbGV0IGJvZHkgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG5cbiAgaWYgKHJlcXVlc3QubWV0aG9kLnRvTG93ZXJDYXNlKCkgPT09IFwiZ2V0XCIpIHtcbiAgICByZXNwb25zZS5oZWFkZXJzLnNldChcImV0YWdcIiwgZXRhZyhib2R5KSk7XG4gICAgLy8gQXMgd2l0aCBkb2N1bWVudCByZXF1ZXN0cywgY2hlY2sgdGhlIGBJZi1Ob25lLU1hdGNoYCBoZWFkZXJcbiAgICAvLyBhbmQgY29tcGFyZSBpdCB3aXRoIHRoZSBFdGFnLCBpZiB0aGV5IG1hdGNoLCBzZW5kIHRoZSBlbXB0eSAzMDQgUmVzcG9uc2VcbiAgICBpZiAocmVxdWVzdC5oZWFkZXJzLmdldChcIklmLU5vbmUtTWF0Y2hcIikgPT09IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiRVRhZ1wiKSkge1xuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShcIlwiLCB7IHN0YXR1czogMzA0LCBoZWFkZXJzOiByZXNwb25zZS5oZWFkZXJzIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXNwb25zZTtcbn07XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBMaW5rLFxuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlQ2F0Y2gsXG4gIHVzZUxvY2F0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGdsb2JhbFN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IGludGVyU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9pbnRlci5jc3NcIjtcblxuZXhwb3J0IGxldCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IGludGVyU3R5bGVzIH0sXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBnbG9iYWxTdHlsZXMgfSxcbiAgXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG5mdW5jdGlvbiBEb2N1bWVudCh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZSxcbn06IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPHtcbiAgdGl0bGU/OiBzdHJpbmc7XG59Pikge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAge3RpdGxlID8gPHRpdGxlPnt0aXRsZX08L3RpdGxlPiA6IG51bGx9XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiXCIgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8Um91dGVDaGFuZ2VBbm5vdW5jZW1lbnQgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIHsvKiA8U2NyaXB0cyAvPiAqL31cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9OiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjx7fT4pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiByb2xlPVwiaGVhZGluZ1wiIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICA8bmF2IGFyaWEtbGFiZWw9XCJNYWluIG5hdmlnYXRpb25cIiBjbGFzc05hbWU9XCJoZWFkZXItbmF2XCI+XG4gICAgICAgICAgPGgxPlJpY2FyZG8gQnVzcXVldDwvaDE+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICAgICAge1wiIFx1MDBCNyBcIn1cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmJ1c3F1ZXRcIj5HaXRIdWI8L2E+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgICZjb3B5OyBSaWNhcmRvIEJ1c3F1ZXQgLSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxuICAgICAgICA8YnIgLz5cbiAgICAgICAgcG93ZXJlZCBieSBcdUQ4M0RcdURDQkZ7XCIgXCJ9XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1blwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJlclwiPlxuICAgICAgICAgIFJFTUlYXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgbGV0IGNhdWdodCA9IHVzZUNhdGNoKCk7XG5cbiAgbGV0IG1lc3NhZ2U7XG4gIHN3aXRjaCAoY2F1Z2h0LnN0YXR1cykge1xuICAgIGNhc2UgNDAxOlxuICAgICAgbWVzc2FnZSA9IChcbiAgICAgICAgPHA+XG4gICAgICAgICAgT29wcyEgTG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gdmlzaXQgYSBwYWdlIHRoYXQgeW91IGRvIG5vdCBoYXZlIGFjY2Vzc1xuICAgICAgICAgIHRvLlxuICAgICAgICA8L3A+XG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA0MDQ6XG4gICAgICBtZXNzYWdlID0gKFxuICAgICAgICA8cD5Pb3BzISBMb29rcyBsaWtlIHlvdSB0cmllZCB0byB2aXNpdCBhIHBhZ2UgdGhhdCBkb2VzIG5vdCBleGlzdC48L3A+XG4gICAgICApO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGNhdWdodC5kYXRhIHx8IGNhdWdodC5zdGF0dXNUZXh0KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50IHRpdGxlPXtgJHtjYXVnaHQuc3RhdHVzfSAke2NhdWdodC5zdGF0dXNUZXh0fWB9PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIHtjYXVnaHQuc3RhdHVzfToge2NhdWdodC5zdGF0dXNUZXh0fVxuICAgICAgICA8L2gxPlxuICAgICAgICB7bWVzc2FnZX1cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfTogeyBlcnJvcjogRXJyb3IgfSkge1xuICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQgdGl0bGU9XCJFcnJvciFcIj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT5UaGVyZSB3YXMgYW4gZXJyb3I8L2gxPlxuICAgICAgICA8cD57ZXJyb3IubWVzc2FnZX08L3A+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8cD5PaCwgbm8hIE91ciB3ZWJzaXRlLi4uIGl0J3MgYnJva2VuITwvcD5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG5cbi8qKlxuICogUHJvdmlkZXMgYW4gYWxlcnQgZm9yIHNjcmVlbiByZWFkZXIgdXNlcnMgd2hlbiB0aGUgcm91dGUgY2hhbmdlcy5cbiAqL1xuY29uc3QgUm91dGVDaGFuZ2VBbm5vdW5jZW1lbnQgPSBSZWFjdC5tZW1vKCgpID0+IHtcbiAgbGV0IFtoeWRyYXRlZCwgc2V0SHlkcmF0ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBsZXQgW2lubmVySHRtbCwgc2V0SW5uZXJIdG1sXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SHlkcmF0ZWQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBsZXQgZmlyc3RSZW5kZXJSZWYgPSBSZWFjdC51c2VSZWYodHJ1ZSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gU2tpcCB0aGUgZmlyc3QgcmVuZGVyIGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCBhbiBhbm5vdW5jZW1lbnQgb24gdGhlXG4gICAgLy8gaW5pdGlhbCBwYWdlIGxvYWQuXG4gICAgaWYgKGZpcnN0UmVuZGVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIGZpcnN0UmVuZGVyUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcGFnZVRpdGxlID0gbG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL1wiID8gXCJIb21lIHBhZ2VcIiA6IGRvY3VtZW50LnRpdGxlO1xuICAgIHNldElubmVySHRtbChgTmF2aWdhdGVkIHRvICR7cGFnZVRpdGxlfWApO1xuICB9LCBbbG9jYXRpb24ucGF0aG5hbWVdKTtcblxuICAvLyBSZW5kZXIgbm90aGluZyBvbiB0aGUgc2VydmVyLiBUaGUgbGl2ZSByZWdpb24gcHJvdmlkZXMgbm8gdmFsdWUgdW5sZXNzXG4gIC8vIHNjcmlwdHMgYXJlIGxvYWRlZCBhbmQgdGhlIGJyb3dzZXIgdGFrZXMgb3ZlciBub3JtYWwgcm91dGluZy5cbiAgaWYgKCFoeWRyYXRlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIlxuICAgICAgYXJpYS1hdG9taWNcbiAgICAgIGlkPVwicm91dGUtY2hhbmdlLXJlZ2lvblwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBib3JkZXI6IFwiMFwiLFxuICAgICAgICBjbGlwUGF0aDogXCJpbnNldCgxMDAlKVwiLFxuICAgICAgICBjbGlwOiBcInJlY3QoMCAwIDAgMClcIixcbiAgICAgICAgaGVpZ2h0OiBcIjFweFwiLFxuICAgICAgICBtYXJnaW46IFwiLTFweFwiLFxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgcGFkZGluZzogXCIwXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIHdpZHRoOiBcIjFweFwiLFxuICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgICAgICB3b3JkV3JhcDogXCJub3JtYWxcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAge2lubmVySHRtbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuIiwgImltcG9ydCB7IExpbmssIE1ldGFGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgbGV0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJSaWNhcmRvIEJ1c3F1ZXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSaWNhcmRvIEJ1c3F1ZXQncyBwYWdlXCIsXG4gIH07XG59O1xuaW1wb3J0ICogYXMgYW9jIGZyb20gXCIuL3Bvc3RzL2FkdmVudC1vZi1jb2RlLm1kXCI7XG5pbXBvcnQgKiBhcyBkeW5hbWljIGZyb20gXCIuL3Bvc3RzL2R5bmFtaWMtbmF0dXJlLXB5dGhvbi5tZFwiO1xuaW1wb3J0ICogYXMgdXNlc3RhdGUgZnJvbSBcIi4vcG9zdHMvdmlzdWFsaXppbmctdXNlLXN0YXRlLm1kXCI7XG5pbXBvcnQgKiBhcyBhb2MyMDIxIGZyb20gXCIuL3Bvc3RzL2FvYy0yMDIxLm1kXCI7XG5cbmZ1bmN0aW9uIHBvc3RGcm9tTW9kdWxlKG1vZDogdHlwZW9mIGltcG9ydChcIioubWR4XCIpKSB7XG4gIHJldHVybiB7XG4gICAgc2x1ZzogbW9kLmZpbGVuYW1lLnJlcGxhY2UoL1xcLm1keD8kLywgXCJcIiksXG4gICAgLi4ubW9kLmF0dHJpYnV0ZXMubWV0YSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRlcigpIHtcbiAgLy8gUmV0dXJuIG1ldGFkYXRhIGFib3V0IGVhY2ggb2YgdGhlIHBvc3RzIGZvciBkaXNwbGF5IG9uIHRoZSBpbmRleCBwYWdlLlxuICAvLyBSZWZlcmVuY2luZyB0aGUgcG9zdHMgaGVyZSBpbnN0ZWFkIG9mIGluIHRoZSBJbmRleCBjb21wb25lbnQgZG93biBiZWxvd1xuICAvLyBsZXRzIHVzIGF2b2lkIGJ1bmRsaW5nIHRoZSBhY3R1YWwgcG9zdHMgdGhlbXNlbHZlcyBpbiB0aGUgYnVuZGxlIGZvciB0aGVcbiAgLy8gaW5kZXggcGFnZS5cbiAgcmV0dXJuIFtcbiAgICBwb3N0RnJvbU1vZHVsZShhb2MyMDIxKSxcbiAgICBwb3N0RnJvbU1vZHVsZShhb2MpLFxuICAgIHBvc3RGcm9tTW9kdWxlKGR5bmFtaWMpLFxuICAgIHBvc3RGcm9tTW9kdWxlKHVzZXN0YXRlKSxcbiAgXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGxldCBwb3N0cyA9IHVzZUxvYWRlckRhdGEoKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1haW4+XG4gICAgICAgIDxoMj5IZWxsbywgSSdtIFJpY2FyZG8hIFx1RDgzRFx1REM0QjwvaDI+XG4gICAgICAgIDxwPk5pY2UgdG8gbWVldCB5b3UhPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBJJ20gYSBzb2Z0d2FyZSBlbmdpbmVlciBiYXNlZCBpbiBOZXcgWW9yay4gQm9ybiBhbmQgcmFpc2VkIGluIEJyYXppbC5cbiAgICAgICAgICBGaW5kIG1lIG9uIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3JpY2J1c3F1ZXRcIj5Ud2l0dGVyPC9hPiBvcntcIiBcIn1cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3JidXNxdWV0XCI+R2l0SHViPC9hPiFcbiAgICAgICAgPC9wPlxuICAgICAgPC9tYWluPlxuICAgICAgPGFzaWRlPlxuICAgICAgICA8aDI+QmxvZyBwb3N0czwvaDI+XG5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3Q6IFJldHVyblR5cGU8dHlwZW9mIHBvc3RGcm9tTW9kdWxlPikgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17cG9zdC5zbHVnfT5cbiAgICAgICAgICAgICAgPExpbmsgdG89e2Bwb3N0cy8ke3Bvc3Quc2x1Z31gfSBwcmVmZXRjaD1cImludGVudFwiPlxuICAgICAgICAgICAgICAgIHtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIHtwb3N0LmRlc2NyaXB0aW9uICYmIDxwPntwb3N0LmRlc2NyaXB0aW9ufTwvcD59XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9hc2lkZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibWV0YVwiOiB7XG4gICAgXCJ0aXRsZVwiOiBcIkFkdmVudCBvZiBDb2RlIDIwMjAgLSBTb2x1dGlvbnMgcmV2aWV3XCIsXG4gICAgXCJkYXRlXCI6IFwiMjAyMC0xMi0wNlwiLFxuICAgIFwiY2F0ZWdvcmllc1wiOiBbXCJhZHZlbnQtb2YtY29kZVwiLCBcInB5dGhvblwiXSxcbiAgICBcImNvdmVySW1hZ2VcIjogXCJhZHZlbnQtb2YtY29kZS0yMDIwLXNvbHV0aW9ucy1yZXZpZXcuanBnXCIsXG4gICAgXCJjcmVkaXRzXCI6IFwiUGhvdG8gYnkgPGEgaHJlZj1cXFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQG1hcmt1c3NwaXNrZVxcXCI+TWFya3VzIFNwaXNrZTwvYT5cIlxuICB9XG59O1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaDE6IFwiaDFcIixcbiAgICBhOiBcImFcIixcbiAgICBzcGFuOiBcInNwYW5cIixcbiAgICBoNDogXCJoNFwiLFxuICAgIHVsOiBcInVsXCIsXG4gICAgbGk6IFwibGlcIixcbiAgICBwOiBcInBcIixcbiAgICBkZWw6IFwiZGVsXCIsXG4gICAgYmxvY2txdW90ZTogXCJibG9ja3F1b3RlXCIsXG4gICAgaDI6IFwiaDJcIixcbiAgICBlbTogXCJlbVwiLFxuICAgIGNvZGU6IFwiY29kZVwiLFxuICAgIHByZTogXCJwcmVcIlxuICB9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjxfY29tcG9uZW50cy5oMSBpZD1cImFkdmVudC1vZi1jb2RlLTIwMjAtLS1zb2x1dGlvbnMtcmV2aWV3XCI+PF9jb21wb25lbnRzLmEgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdGFiSW5kZXg9XCItMVwiIGhyZWY9XCIjYWR2ZW50LW9mLWNvZGUtMjAyMC0tLXNvbHV0aW9ucy1yZXZpZXdcIj48X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tbGlua1wiIC8+PC9fY29tcG9uZW50cy5hPntcIkFkdmVudCBvZiBDb2RlIDIwMjAgLSBTb2x1dGlvbnMgcmV2aWV3XCJ9PC9fY29tcG9uZW50cy5oMT57XCJcXG5cIn08X2NvbXBvbmVudHMuaDQgaWQ9XCJzb2x2ZWQtY2hhbGxlbmdlc1wiPjxfY29tcG9uZW50cy5hIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRhYkluZGV4PVwiLTFcIiBocmVmPVwiI3NvbHZlZC1jaGFsbGVuZ2VzXCI+PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLWxpbmtcIiAvPjwvX2NvbXBvbmVudHMuYT57XCJTb2x2ZWQgY2hhbGxlbmdlc1wifTwvX2NvbXBvbmVudHMuaDQ+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT48X2NvbXBvbmVudHMuYSBocmVmPVwiI2RheS0xLXJlcG9ydC1yZXBhaXJcIj57XCJEYXkgMTogUmVwb3J0IFJlcGFpclwifTwvX2NvbXBvbmVudHMuYT48L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT48X2NvbXBvbmVudHMuYSBocmVmPVwiI2RheS0yLXBhc3N3b3JkLXBoaWxvc29waHlcIj57XCJEYXkgMjogUGFzc3dvcmQgUGhpbG9zb3BoeVwifTwvX2NvbXBvbmVudHMuYT48L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT48X2NvbXBvbmVudHMuYSBocmVmPVwiI2RheS0zLXRvYm9nZ2FuLXRyYWplY3RvcnlcIj57XCJEYXkgMzogVG9ib2dnYW4gVHJhamVjdG9yeVwifTwvX2NvbXBvbmVudHMuYT48L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT48X2NvbXBvbmVudHMuYSBocmVmPVwiI2RheS00LXBhc3Nwb3J0LXByb2Nlc3NpbmdcIj57XCJEYXkgNDogUGFzc3BvcnQgUHJvY2Vzc2luZ1wifTwvX2NvbXBvbmVudHMuYT48L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT48X2NvbXBvbmVudHMuYSBocmVmPVwiI2RheS01LWJpbmFyeS1ib2FyZGluZ1wiPntcIkRheSA1OiBCaW5hcnkgQm9hcmRpbmdcIn08L19jb21wb25lbnRzLmE+PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+PF9jb21wb25lbnRzLmEgaHJlZj1cIiNkYXktNi1jdXN0b20tY3VzdG9tc1wiPntcIkRheSA2OiBDdXN0b20gQ3VzdG9tc1wifTwvX2NvbXBvbmVudHMuYT48L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT48X2NvbXBvbmVudHMuYSBocmVmPVwiI2RheS0xNy1jb253YXktY3ViZXNcIj57XCJEYXkgMTc6IENvbndheSBDdWJlc1wifTwvX2NvbXBvbmVudHMuYT48L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiU2luY2UgMjAxOCwgZXZlcnkgRGVjZW1iZXIsIEkgXCJ9PF9jb21wb25lbnRzLmRlbD57XCJ0cnkgdG9cIn08L19jb21wb25lbnRzLmRlbD57XCIgd29yayBteSB3YXkgdGhyb3VnaCBcIn08X2NvbXBvbmVudHMuYSBocmVmPVwiaHR0cHM6Ly9hZHZlbnRvZmNvZGUuY29tL2Fib3V0XCI+e1wiQWR2ZW50IG9mIENvZGVcIn08L19jb21wb25lbnRzLmE+e1wiLCBhIHNldCBvZiAyNSBwdXp6bGVzIHJldmVhbGVkIGVhY2ggZGF5IHRoaXMgbW9udGgsIHVudGlsIENocmlzdG1hcyBkYXkuIFRoaXMgaGFzIGJlZW4gYXJvdW5kIHNpbmNlIDIwMTUgKEkgYWxzbyB0cmllZCB3b3JraW5nIG9uIHRoZSBlYXJsaWVyIHllYXJzLCBjaGVjayBhbGwgb2YgbXkgc29sdXRpb25zIGluIG15IFwifTxfY29tcG9uZW50cy5hIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmJ1c3F1ZXQvYWR2ZW50LW9mLWNvZGVcIj57XCJhZHZlbnQgb2YgY29kZSByZXBvXCJ9PC9fY29tcG9uZW50cy5hPntcIikuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkEgc2hvcnQgZGVzY3JpcHRpb24gZnJvbSB0aGVpciBhYm91dCBwYWdlOlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuYmxvY2txdW90ZT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJBZHZlbnQgb2YgQ29kZSBpcyBhbiBBZHZlbnQgY2FsZW5kYXIgb2Ygc21hbGwgcHJvZ3JhbW1pbmcgcHV6emxlcyBmb3IgYSB2YXJpZXR5IG9mIHNraWxsIHNldHMgYW5kIHNraWxsIGxldmVscyB0aGF0IGNhbiBiZSBzb2x2ZWQgaW4gYW55IHByb2dyYW1taW5nIGxhbmd1YWdlIHlvdSBsaWtlLiBQZW9wbGUgdXNlIHRoZW0gYXMgYSBzcGVlZCBjb250ZXN0LCBpbnRlcnZpZXcgcHJlcCwgY29tcGFueSB0cmFpbmluZywgdW5pdmVyc2l0eSBjb3Vyc2V3b3JrLCBwcmFjdGljZSBwcm9ibGVtcywgb3IgdG8gY2hhbGxlbmdlIGVhY2ggb3RoZXIuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTwvX2NvbXBvbmVudHMuYmxvY2txdW90ZT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJUaGUgcHV6emxlcyB2YXJ5IGluIGRpZmZpY3VsdHksIGdldHRpbmcgaGFyZGVyIHRocm91Z2ggdGhlIG1vbnRoLiBUaGlzIHllYXIsIEknbGwgYmUgd3JpdGluZyBhYm91dCBteSBzb2x1dGlvbnMgYW5kIGEgbGl0dGxlIGFib3V0IGVhY2ggcHV6emxlJ3MgcmF0aW9uYWxlIGFuZCB0aG91Z2h0IHByb2Nlc3MuIEknbSBub3QgcGxhbm5pbmcgdG8gZ2V0IHRoZSBiZXN0IHNvbHV0aW9uIGZvciBlYWNoIHByb2JsZW0sIGJ1dCBJIHRyeSBnb2luZyBhYm91dCBvbmUgb3IgdHdvIHN0ZXBzIG9uIG9wdGltaXphdGlvbnMgdG8gc2hvd2Nhc2UgbGFuZ3VhZ2UgZmVhdHVyZXMgb3IgZ2V0IGJldHRlciBydW4gdGltZXMuIEknbGwgYWxzbyBhc3N1bWUgYWxsIG15IGlucHV0cyB3aWxsIGxlYWQgdG8gYSB2YWxpZCByZXN1bHQsIHNvIG5vIHNpZ25pZmljYW50IGVycm9yIGNoZWNrcyB3aWxsIGJlIGRvbmUuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkknbGwgbWFpbmx5IHVzZSBweXRob24gZm9yIHRoZSBzb2x1dGlvbnMuIEl0J3MgdGhlIGxhbmd1YWdlIEknbSBtb3N0IHByb2ZpY2llbnQgaW4sIGFuZCB0aGlzIHllYXIgaXQncyBiZWVuIHByb3ZpbmcgdG8gaGF2ZSBhIGxvdCBvZiBleGNlbGxlbnQgdG9vbHMgdG8gZ2V0IGNsZWFuZXIgcmVzdWx0cy5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiV2UncmUgb24gRGF5IDYgYXQgdGhlIHRpbWUgb2Ygd3JpdGluZywgc28gSSdsbCBnbyBvdmVyIGVhY2ggZGF5IGluIHRoaXMgcG9zdCwgdGhlbiB1cGRhdGUgdGhyb3VnaCB0aGUgd2Vlay4gRm9sbG93IGFsb25nIHdpdGggbWUhXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5oMiBpZD1cImRheS0xLXJlcG9ydC1yZXBhaXJcIj48X2NvbXBvbmVudHMuYSBhcmlhLWhpZGRlbj1cInRydWVcIiB0YWJJbmRleD1cIi0xXCIgaHJlZj1cIiNkYXktMS1yZXBvcnQtcmVwYWlyXCI+PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLWxpbmtcIiAvPjwvX2NvbXBvbmVudHMuYT57XCJEYXkgMTogUmVwb3J0IFJlcGFpclwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PHNtYWxsPjxfY29tcG9uZW50cy5hIGhyZWY9XCJodHRwczovL2FkdmVudG9mY29kZS5jb20vMjAyMC9kYXkvMVwiPntcIkdvIHRvIGNoYWxsZW5nZVwifTwvX2NvbXBvbmVudHMuYT48L3NtYWxsPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlRPIFNUQVJUOiBJIGFic29sdXRlbHkgbG92ZSB0aGUgc3RvcmllcyBldmVyeSB5ZWFyLiBFdmVyeSB5ZWFyLCB0aGUgbWFpbiBjaGFyYWN0ZXIgaXMgYW4gZWxmLCB0YXNrZWQgd2l0aCBcIn08X2NvbXBvbmVudHMuZW0+e1wic2F2aW5nIENocmlzdG1hc1wifTwvX2NvbXBvbmVudHMuZW0+e1wiLiBUaGlzIHllYXIgdGhvdWdoLCB3ZSdyZSBnb2luZyBvbiBhIHZhY2F0aW9uLiBDaHJpc3RtYXMgaXMgc2FmZSEgU29tZSBnb29kIG5ld3MgdGhpcyB5ZWFyLCBhdCBsYXN0IDopXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkluIHRoZSBmaXJzdCBwYXJ0IG9mIGRheSAxLCB3ZSdyZSB0YXNrZWQgd2l0aCBwcm9jZXNzaW5nIGFuIGV4cGVuc2UgcmVwb3J0LS1hIGxpc3Qgb2YgbnVtYmVycywgYW5kIHdlIGhhdmUgdG8gZmluZCB0aGUgdHdvIGVudHJpZXMgdGhhdCBhZGQgdXAgdG8gMjAyMCBhbmQgbXVsdGlwbHkgdGhlc2UgbnVtYmVycyB0b2dldGhlci4gVGhlIGlucHV0IHdhcyBzdXBlciBzaG9ydCwgc28gSSBjb3VsZCBnbyB3aXRoIHRoZSBcXFwiYnJ1dGUgZm9yY2VcXFwiIGFwcHJvYWNoLiBGb3IgZWFjaCBudW1iZXIsIGdvIG92ZXIgdGhlIGxpc3QgYWdhaW4gYW5kIGZpbmQgdGhlIG9uZSB0aGF0IGFkZHMgdXAgdG8gMjAyMC4gSSBrbmV3IGEgc2ltcGxlIHRyaWNrIHRvIHRyYXZlcnNlIHRoZSBsaXN0IG9uY2U6IHVzaW5nIGEgc2V0IGFzIHRoZSBkYXRhIHN0cnVjdHVyZSB0byBob2xkIHRoZSBudW1iZXJzLCBJIGNhbiBmaW5kIGFuIGl0ZW0gaW4gY29uc3RhbnQgdGltZS4gRm9yIGVhY2ggbnVtYmVyLCBJIGp1c3QgbmVlZCB0byBjaGVjayBpZiBcIn08X2NvbXBvbmVudHMuY29kZT57XCIyMDIwIC0gbnVtYmVyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBpcyBvbiB0aGUgbGlzdCFcIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnByZT48X2NvbXBvbmVudHMuY29kZSBjbGFzc05hbWU9XCJobGpzIGxhbmd1YWdlLXB5dGhvblwiPjxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImRlZlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy10aXRsZSBobGpzLWZ1bmN0aW9uXCI+e1wicGFydF9vbmVcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtcGFyYW1zXCI+e1wicmVwb3J0OiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXR5cGVcIj57XCJMaXN0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIltcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wiaW50XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIl1cIn08L19jb21wb25lbnRzLnNwYW4+e1wiKTpcXG4gICAgcmVwb3J0X3NldCA9IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJzZXRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKHJlcG9ydClcXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZm9yXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBudW1iZXIgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIHJlcG9ydDpcXG4gICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImlmXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjIwMjBcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIC0gbnVtYmVyIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiByZXBvcnRfc2V0OlxcbiAgICAgICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcInJldHVyblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgbnVtYmVyICogKFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMjAyMFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgLSBudW1iZXIpXFxuXCJ9PC9fY29tcG9uZW50cy5jb2RlPjwvX2NvbXBvbmVudHMucHJlPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlRoZSBzZWNvbmQgcGFydCBwcmVzZW50cyBhIHNpbWlsYXIgcHV6emxlLCBidXQgbm93IHdlIG5lZWQgdG8gZmluZCAzIG51bWJlcnMgdGhhdCBhZGQgdXAgdG8gMjAyMC4gQXQgdGhpcyBwb2ludCwgSSByZW1lbWJlcmVkIG9mIHB5dGhvbidzIFwifTxfY29tcG9uZW50cy5hIGhyZWY9XCJodHRwczovL2RvY3MucHl0aG9uLm9yZy8zLjgvbGlicmFyeS9pdGVydG9vbHMuaHRtbD8jaXRlcnRvb2xzLmNvbWJpbmF0aW9uc1wiPjxfY29tcG9uZW50cy5jb2RlPntcIml0ZXJ0b29scy5jb21iaW5hdGlvbnNcIn08L19jb21wb25lbnRzLmNvZGU+PC9fY29tcG9uZW50cy5hPntcIi4gVGhpcyByZXR1cm5zIHRoZSBzdWJzZXF1ZW5jZXMgb2YgYSBsaXN0IHdpdGggdGhlIGdpdmVuIHNpemUuIEkgY2FuIHVzZSBpdCBhbHNvIGZvciBwYXJ0IDEsIHNvIEkganVzdCB3cm90ZSBhIGdlbmVyaWMgc29sdXRpb246XCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wcmU+PF9jb21wb25lbnRzLmNvZGUgY2xhc3NOYW1lPVwiaGxqcyBsYW5ndWFnZS1weXRob25cIj48X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJmcm9tXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBmdW5jdG9vbHMgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW1wb3J0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiByZWR1Y2VcXG5cIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJmcm9tXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBpdGVydG9vbHMgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW1wb3J0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBjb21iaW5hdGlvbnNcXG5cXG5cIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJkZWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtdGl0bGUgaGxqcy1mdW5jdGlvblwiPntcInNvbHZlX3dpdGhfY29tYmluYXRpb25zXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXBhcmFtc1wiPntcInJlcG9ydCwgblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIpOlxcbiAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJmb3JcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIHRlc3QgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIGNvbWJpbmF0aW9ucyhyZXBvcnQsIG4pOlxcbiAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJzdW1cIn08L19jb21wb25lbnRzLnNwYW4+e1wiKHRlc3QpID09IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMjAyMFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCI6XFxuICAgICAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wicmV0dXJuXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiByZWR1Y2UobXVsLCB0ZXN0KVxcblxcblwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImRlZlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy10aXRsZSBobGpzLWZ1bmN0aW9uXCI+e1wicGFydF9vbmVfY29tYmluYXRpb25zXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIigpOlxcbiAgICBzb2x2ZV93aXRoX2NvbWJpbmF0aW9ucyhyZXBvcnQsIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIpXFxuXFxuXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZGVmXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXRpdGxlIGhsanMtZnVuY3Rpb25cIj57XCJwYXJ0X29uZV9jb21iaW5hdGlvbnNcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKCk6XFxuICAgIHNvbHZlX3dpdGhfY29tYmluYXRpb25zKHJlcG9ydCwgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIzXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIilcXG5cIn08L19jb21wb25lbnRzLmNvZGU+PC9fY29tcG9uZW50cy5wcmU+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiUHl0aG9uIHdpbGwgZ2VuZXJhdGUgdGhlIGNvbWJpbmF0aW9ucyBpbiBhIGNvbXBsZXhpdHkgYmV0dGVyIHRoYW4gTyhuXCJ9PHN1cD57XCIyXCJ9PC9zdXA+e1wiKSBvciBPKG5cIn08c3VwPntcIjNcIn08L3N1cD57XCIpLCBidXQgSSBmb3VuZCBvdXQgSSBjb3VsZCBnZXQgTyhuXCJ9PHN1cD57XCIyXCJ9PC9zdXA+e1wiKSBmb3IgcGFydCB0d28uIFRoZSBzb2x1dGlvbiBpbnZvbHZlcyBzb3J0aW5nIHRoZSBsaXN0IGJlZm9yZWhhbmQsIHRoZW4gdXNpbmcgYSB0d28tcG9pbnRlciB0ZWNobmlxdWU6IGZvciBlYWNoIG51bWJlciBpbiB0aGUgbGlzdCwgSSBrZWVwIGEgcG9pbnRlciB0byB0aGUgbmV4dCBudW1iZXIgYW5kIHRoZSBsYXN0IG9mIHRoZSBsaXN0LiBJZiB0aGUgc3VtIGlzIG1vcmUgdGhhbiAyMDIwLCBJIGRlY3JlYXNlIHRoZSBlbmQgcG9pbnRlciB0byByZWR1Y2UgdGhlIHN1bS4gSWYgaXQncyBsZXNzIHRoYW4gMjAyMCwgSSBpbmNyZWFzZSB0aGUgZmlyc3QgcG9pbnRlciB0byBnZXQgYSBsYXJnZXIgc3VtLiBJIHJlcGVhdCBpdCBmb3IgZWFjaCBpdGVtIHVudGlsIEkgZmluZCBhbGwgMyBudW1iZXJzIHRoYXQgbWF0Y2ggdGhlIHJlcXVpcmVtZW50cy4gSSBoYWQgdG8gZG8gYSBiaXQgb2YgcmVzZWFyY2gsIHNvIGhlcmUncyBcIn08X2NvbXBvbmVudHMuYSBocmVmPVwiaHR0cHM6Ly93d3cuZ2Vla3Nmb3JnZWVrcy5vcmcvZmluZC1hLXRyaXBsZXQtdGhhdC1zdW0tdG8tYS1naXZlbi12YWx1ZS9cIj57XCJ0aGUgc291cmNlXCJ9PC9fY29tcG9uZW50cy5hPntcIi5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnByZT48X2NvbXBvbmVudHMuY29kZSBjbGFzc05hbWU9XCJobGpzIGxhbmd1YWdlLXB5dGhvblwiPjxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImRlZlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy10aXRsZSBobGpzLWZ1bmN0aW9uXCI+e1wiYmVzdF9wZXJmb3JtYW5jZV9wYXJ0X3R3b1wifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1wYXJhbXNcIj57XCJyZXBvcnRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKTpcXG4gICAgbiA9IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJsZW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiKHJlcG9ydClcXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZm9yXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBpIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wicmFuZ2VcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKG4pOlxcbiAgICAgICAgbGVmdCA9IGkgKyBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjFcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgICAgICByaWdodCA9IG4gLSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjFcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJ3aGlsZVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgbGVmdCA8IHJpZ2h0OlxcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlcG9ydFtpXSArIHJlcG9ydFtsZWZ0XSArIHJlcG9ydFtyaWdodF1cXG4gICAgICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJpZlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgcmVzdWx0ID09IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMjAyMFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCI6XFxuICAgICAgICAgICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcInJldHVyblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgcmVwb3J0W2ldICogcmVwb3J0W2xlZnRdICogcmVwb3J0W3JpZ2h0XVxcbiAgICAgICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImlmXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiByZXN1bHQgPCBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjIwMjBcIn08L19jb21wb25lbnRzLnNwYW4+e1wiOlxcbiAgICAgICAgICAgICAgICBsZWZ0ICs9IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJlbHNlXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIjpcXG4gICAgICAgICAgICAgICAgcmlnaHQgLT0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIxXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcblxcbmJlc3RfcGVyZm9ybWFuY2VfcGFydF90d28oXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcInNvcnRlZFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIocmVwb3J0KSlcXG5cIn08L19jb21wb25lbnRzLmNvZGU+PC9fY29tcG9uZW50cy5wcmU+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyIGlkPVwiZGF5LTItcGFzc3dvcmQtcGhpbG9zb3BoeVwiPjxfY29tcG9uZW50cy5hIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRhYkluZGV4PVwiLTFcIiBocmVmPVwiI2RheS0yLXBhc3N3b3JkLXBoaWxvc29waHlcIj48X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tbGlua1wiIC8+PC9fY29tcG9uZW50cy5hPntcIkRheSAyOiBQYXNzd29yZCBQaGlsb3NvcGh5XCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08c21hbGw+PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vYWR2ZW50b2Zjb2RlLmNvbS8yMDIwL2RheS8yXCI+e1wiR28gdG8gY2hhbGxlbmdlXCJ9PC9fY29tcG9uZW50cy5hPjwvc21hbGw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiT24gZGF5IDIsIHdlJ3JlIHRhc2tlZCB3aXRoIHByb2Nlc3NpbmcgYSBsaXN0IG9mIHBhc3N3b3JkcyBhbmQgY2hlY2tpbmcgaWYgdGhleSBmb2xsb3cgYSBzZXQgcG9saWN5LiBFYWNoIGxpbmUgb2YgdGhlIGlucHV0IGdpdmVzIHRoZSBwb2xpY3kgYW5kIHRoZSBwYXNzd29yZCB0byBjaGVjay4gVGhlIHBhc3N3b3JkIHBvbGljeSBpbmRpY2F0ZXMgdGhlIGxvd2VzdCBhbmQgaGlnaGVzdCBudW1iZXIgb2YgdGltZXMgYSBnaXZlbiBsZXR0ZXIgbXVzdCBhcHBlYXIgZm9yIHRoZSBwYXNzd29yZCB0byBiZSB2YWxpZC4gQSB2YWxpZCBpbnB1dCBsb29rcyBsaWtlIHRoaXM6XCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wcmU+PF9jb21wb25lbnRzLmNvZGUgY2xhc3NOYW1lPVwiaGxqcyBsYW5ndWFnZS1wbGFpbnRleHRcIj57XCIxLTMgYTogYWJjZGVcXG4xLTMgYjogY2RlZmdcXG4yLTkgYzogY2NjY2NjY2NjXFxuXCJ9PC9fY29tcG9uZW50cy5jb2RlPjwvX2NvbXBvbmVudHMucHJlPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkZvciB0aGlzIG9uZSwgSSB3ZW50IHdpdGggYSBcIn08X2NvbXBvbmVudHMuYSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUmVndWxhcl9leHByZXNzaW9uXCI+e1wicmVndWxhciBleHByZXNzaW9uXCJ9PC9fY29tcG9uZW50cy5hPntcIiB0byBwYXJzZSBlYWNoIGxpbmUgYW5kIGEgXCJ9PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vZG9jcy5weXRob24ub3JnLzMvbGlicmFyeS9jb2xsZWN0aW9ucy5odG1sI2NvbGxlY3Rpb25zLkNvdW50ZXJcIj48X2NvbXBvbmVudHMuY29kZT57XCJjb2xsZWN0aW9ucy5Db3VudGVyXCJ9PC9fY29tcG9uZW50cy5jb2RlPjwvX2NvbXBvbmVudHMuYT57XCIgdG8gc2VlIGlmIHRoZSBsZXR0ZXIgaGFzIHRoZSBjb3JyZWN0IGNvdW50LiBOb3QgbXVjaCB0byBpbXByb3ZlIHRoZXJlLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucHJlPjxfY29tcG9uZW50cy5jb2RlIGNsYXNzTmFtZT1cImhsanMgbGFuZ3VhZ2UtcHl0aG9uXCI+PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW1wb3J0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiByZVxcblwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImZyb21cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIGNvbGxlY3Rpb25zIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImltcG9ydFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgQ291bnRlclxcblxcblwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImRlZlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy10aXRsZSBobGpzLWZ1bmN0aW9uXCI+e1wicGFydF9vbmVcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtcGFyYW1zXCI+e1wicGFzc3dvcmRzOiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXR5cGVcIj57XCJMaXN0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIltcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wic3RyXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIl1cIn08L19jb21wb25lbnRzLnNwYW4+e1wiKTpcXG4gICAgdmFsaWQgPSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjBcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuXFxuICAgIGV4cHJlc3Npb24gPSByZS5cIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wiY29tcGlsZVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJyXFxcIihcXFxcZCspLShcXFxcZCspICguKTogKC4qKVxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKVxcbiAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJmb3JcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIHBhc3N3b3JkIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBwYXNzd29yZHM6XFxuICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJpZlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgbWF0Y2ggOj0gZXhwcmVzc2lvbi5tYXRjaChwYXNzd29yZCk6XFxuICAgICAgICAgICAgbWluXywgbWF4XywgbGV0dGVyLCBwYXNzd29yZCA9IG1hdGNoLmdyb3VwcygpXFxuICAgICAgICAgICAgY291bnQgPSBDb3VudGVyKHBhc3N3b3JkKVtsZXR0ZXJdXFxuICAgICAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIGNvdW50ID49IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJpbnRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKG1pbl8pIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImFuZFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgY291bnQgPD0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcImludFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIobWF4Xyk6XFxuICAgICAgICAgICAgICAgIHZhbGlkICs9IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wicmV0dXJuXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiB2YWxpZFxcblwifTwvX2NvbXBvbmVudHMuY29kZT48L19jb21wb25lbnRzLnByZT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJJbiBwYXJ0IDIsIHRoZSBvbmx5IGRpZmZlcmVuY2UgaXMgYSByZWludGVycHJldGF0aW9uIG9mIHRoZSBwb2xpY3kuIEVhY2ggcG9saWN5IGFjdHVhbGx5IGRlc2NyaWJlcyB0d28gcG9zaXRpb25zIGluIHRoZSBwYXNzd29yZCwgYW5kIGV4YWN0bHkgb25lIG9mIHRoZXNlIHBvc2l0aW9ucyBtdXN0IGNvbnRhaW4gdGhlIGdpdmVuIGxldHRlci4gU28gSSBqdXN0IGdldCB0aGUgbGV0dGVycywgYWRkIGEgc2V0LCBhbmQgdGVzdCBpZiB0aGUgc2V0IGhhcyBzaXplIHR3byAobWVhbmluZyB0aGUgbGV0dGVycyBhcmUgZGlmZmVyZW50KSwgYW5kIHRoZSBnaXZlbiBsZXR0ZXIgaXMgaW4gdGhlIHNldC4gVGhlcmUgbWlnaHQgZGVmaW5pdGVseSBiZSBiZXR0ZXIgd2F5cyB0byBjaGVjayB0aGlzLCBidXQgaGVyZSBpdCBnb2VzOlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucHJlPjxfY29tcG9uZW50cy5jb2RlIGNsYXNzTmFtZT1cImhsanMgbGFuZ3VhZ2UtcHl0aG9uXCI+PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZGVmXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXRpdGxlIGhsanMtZnVuY3Rpb25cIj57XCJwYXJ0X3R3b1wifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1wYXJhbXNcIj57XCJwYXNzd29yZHM6IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtdHlwZVwiPntcIkxpc3RcIn08L19jb21wb25lbnRzLnNwYW4+e1wiW1wifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJzdHJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIpOlxcbiAgICB2YWxpZCA9IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG5cXG4gICAgZXhwcmVzc2lvbiA9IHJlLlwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJjb21waWxlXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcInJcXFwiKFxcXFxkKyktKFxcXFxkKykgKC4pOiAoLiopXFxcIlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIpXFxuICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImZvclwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgcGFzc3dvcmQgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIHBhc3N3b3JkczpcXG4gICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImlmXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBtYXRjaCA6PSBleHByZXNzaW9uLm1hdGNoKHBhc3N3b3JkKTpcXG4gICAgICAgICAgICBwb3NfMSwgcG9zXzIsIGxldHRlciwgcGFzc3dvcmQgPSBtYXRjaC5ncm91cHMoKVxcbiAgICAgICAgICAgIGxldHRlcnMgPSB7cGFzc3dvcmRbXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcImludFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIocG9zXzEpIC0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIxXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIl0sIHBhc3N3b3JkW1wifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJpbnRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKHBvc18yKSAtIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJdfVxcbiAgICAgICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImlmXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wibGVuXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihsZXR0ZXJzKSA9PSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImFuZFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgbGV0dGVyIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBsZXR0ZXJzOlxcbiAgICAgICAgICAgICAgICB2YWxpZCArPSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjFcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcInJldHVyblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgdmFsaWRcXG5cIn08L19jb21wb25lbnRzLmNvZGU+PC9fY29tcG9uZW50cy5wcmU+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyIGlkPVwiZGF5LTMtdG9ib2dnYW4tdHJhamVjdG9yeVwiPjxfY29tcG9uZW50cy5hIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRhYkluZGV4PVwiLTFcIiBocmVmPVwiI2RheS0zLXRvYm9nZ2FuLXRyYWplY3RvcnlcIj48X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tbGlua1wiIC8+PC9fY29tcG9uZW50cy5hPntcIkRheSAzOiBUb2JvZ2dhbiBUcmFqZWN0b3J5XCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08c21hbGw+PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vYWR2ZW50b2Zjb2RlLmNvbS8yMDIwL2RheS8zXCI+e1wiR28gdG8gY2hhbGxlbmdlXCJ9PC9fY29tcG9uZW50cy5hPjwvc21hbGw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiSW4gdGhpcyBvbmUsIHRoZSBwdXp6bGUgaW5wdXQgaXMgYSBzZWN0aW9uIG9mIGEgXFxcIm1hcFxcXCIsIHdoZXJlIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCIuXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiByZXByZXNlbnQgZW1wdHkgc3BhY2VzIGFuZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCIjXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiByZXByZXNlbnRzIGEgdHJlZSwgcmVwcmVzZW50aW5nIHRoZSBnZW9ncmFwaHkgb2YgYW4gYXJlYSB5b3UncmUgZ29pbmcgdG8gYmUgc2xpZGluZyB3aXRoIGEgXCJ9PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1RvYm9nZ2FuXCI+e1wiVG9ib2dnYW5cIn08L19jb21wb25lbnRzLmE+e1wiLiBZb3Ugd2FudCB0byBmaW5kIGEgc2xvcGUgaW4gdGhlIG1hcCB3aGVyZSB5b3UncmUgZmluZGluZyB0aGUgc21hbGxlciBhbW91bnQgb2YgdHJlZXMgKHN0ZWVyaW5nIGlzIGhhcmQgaW4gdGhpcyBhcmVhISkuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlRoZSBtYXAgaXMgb25seSBhIHNlY3Rpb24gb2YgdGhlIGdlb2dyYXBoeTogdGhlIHBhdHRlcm4gcmVwZWF0cyB0byB0aGUgcmlnaHQgXFxcIm1hbnkgdGltZXNcXFwiLiBUaGlzIHdhcyBhIGhpbnQgdG8gbWUgdGhhdCB0aGVyZSBtaWdodCBiZSBhIHdheSB0byBmaWd1cmUgb3V0IHdoZXJlIGluIHRoZSBtYXAgeW91IGFyZSB3aXRob3V0IFxcXCJnbHVlaW5nXFxcIiB0aG9zZSBzZWN0aW9ucyB0b2dldGhlci5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiUGFydCAxIGp1c3QgYXNrcyBob3cgbWFueSB0cmVlcyBhcmUgdGhlcmUgaWYgeW91IGdvIGRvd24gYSBzbG9wZSBcIn08X2NvbXBvbmVudHMuZW0+e1wicmlnaHQgMywgZG93biAxXCJ9PC9fY29tcG9uZW50cy5lbT57XCIsIHdoaWNoIG1lYW5zIHlvdSdsbCB3YWxrIDMgc3F1YXJlcyB0byB0aGUgcmlnaHQsIHRoZW4gb25lIGRvd24uIFRoZSBtYXAgaGF2ZSBtdWNoIG1vcmUgcm93cyB0aGFuIGNvbHVtbnMsIHNvIGl0IG1lYW5zIHlvdSdsbCBlbmQgdXAgaW4gdGhpcyBcXFwiZXh0ZW5kZWQgYXJlYVxcXCIuIEhvdyBjYW4gd2UgcmVhZCB0aGlzIG1hcCBhbmQgY291bnQgdGhlIHRyZWVzIHdpdGhvdXQgZHVwbGljYXRpbmcgdGhlIGxpbmVzIHRvIGZpZ3VyZSBvdXQgaG93IHRoZXNlIGhpZGRlbiBhcmVhcyBsb29rIGxpa2U/IFRoZSBzb2x1dGlvbiBpcyBrZWVwaW5nIHRyYWNrIG9mIHlvdXIgcG9zaXRpb24gYW5kIGV2ZXJ5IHRpbWUgeW91ciBjb29yZGluYXRlcyBsYW5kIG91dHNpZGUgdGhlIHNpemUgb2YgdGhlIGxpbmUsIHlvdSBmaWd1cmUgb3V0IHRoZSBuZXcgaW5kZXggYnkgZ2V0dGluZyB0aGUgbW9kdWxvIG9mIHlvdXIgcG9zaXRpb24gYW5kIHRoZSBzaXplIG9mIHRoZSBsaW5lLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJJIG1hZGUgcGFydCAxIGdlbmVyaWMgdG8gYW55IHNsb3BlIHRoaW5raW5nIGFib3V0IHRoZSBmYWN0IHRoYXQgSSBuZWVkZWQgdG8gZG8gaXQgZm9yIG1vcmUgY2FzZXMsIGhlcmUncyB0aGUgc29sdXRpb24gSSBsYW5kZWQ6XCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wcmU+PF9jb21wb25lbnRzLmNvZGUgY2xhc3NOYW1lPVwiaGxqcyBsYW5ndWFnZS1weXRob25cIj48X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJmcm9tXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBpdGVydG9vbHMgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW1wb3J0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBjb3VudFxcblxcblwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImRlZlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy10aXRsZSBobGpzLWZ1bmN0aW9uXCI+e1wiY291bnRfdHJlZXNcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtcGFyYW1zXCI+e1wicmlnaHQsIGRvd25cIn08L19jb21wb25lbnRzLnNwYW4+e1wiKTpcXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1jb21tZW50XCI+e1wiIyBbYGl0ZXJ0b29scy5jb3VudGBdW2NvdW50XSB5aWVsZHMgbnVtYmVycyBzZXBhcmF0ZWQgYnkgYHN0ZXBgLlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1jb21tZW50XCI+e1wiIyBUaGluayByYW5nZSgpIGJ1dCB1bmJvdW5kLiBSZWFsbHkgbmljZSBmb3IgdGhpcyBjYXNlIVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgY291bnRlciA9IGNvdW50KHN0ZXA9cmlnaHQpXFxuICAgIHRvdGFsX3RyZWVzID0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIwXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJmb3JcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIGksIGxpbmUgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJlbnVtZXJhdGVcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKHJlYWRfZmlsZSgpKTpcXG4gICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtY29tbWVudFwiPntcIiMgbGluZSBpcyBzb21ldGhpbmcgbGlrZSBcXFwiLi4uLi4jLiMjLi4uLi4uIy4uIyMuLi4uLi4uLi4uI1xcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJpZlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgaSAlIGRvd24gIT0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIwXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIjpcXG4gICAgICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWNvbW1lbnRcIj57XCIjIElmIGdvaW5nIGRvd24gbW9yZSB0aGFuIG9uY2UgYXQgYSB0aW1lLCBnbyBzdHJhaWdodCB0b1wifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWNvbW1lbnRcIj57XCIjIHRoZSBsaW5lcyB0aGF0IGFyZSBtdWx0aXBsZSBvZiBgZG93bmAuXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICAgICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImNvbnRpbnVlXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICAgICAgbGluZSA9IGxpbmUuc3RyaXAoKVxcbiAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1jb21tZW50XCI+e1wiIyBuZXh0IGNvdW50ZXIgd2lsbCByZXR1cm4gdGhlIHN0ZXBzIEknbSB3YWxraW5nIHJpZ2h0LlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtY29tbWVudFwiPntcIiMgSWYgSSBsYW5kIGFmdGVyIHRoZSBlbmQgb2YgdGhlIGxpbmUsIHRoZSBtb2R1bG9cIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWNvbW1lbnRcIj57XCIjIHdpbGwgcmV0dXJuIGFuIGluZGV4IHRoYXQgd2lsbCByZXByZXNlbnQgd2hhdCdzIGluIHRoZVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtY29tbWVudFwiPntcIiMgc3F1YXJlIG91dCBvZiBib3VuZHMuXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICAgICAgcG9zaXRpb24gPSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wibmV4dFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoY291bnRlcikgJSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wibGVuXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihsaW5lKVxcbiAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1jb21tZW50XCI+e1wiIyB0aGlzIGlzIGEgbmljZSB0cmljayB3aXRoIHB5dGhvbiBib29sZWFucy4gVGhleSBhcmUgYWN0dWFsbHkgYW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWNvbW1lbnRcIj57XCIjIGV4dGVuc2lvbiBvZiBpbnRlZ2VycywgYW5kIEZhbHNlID09IDEgOilcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgICAgICB0b3RhbF90cmVlcyArPSBsaW5lW3Bvc2l0aW9uXSA9PSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIlxcXCIjXFxcIlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wicmV0dXJuXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiB0b3RhbF90cmVlc1xcblwifTwvX2NvbXBvbmVudHMuY29kZT48L19jb21wb25lbnRzLnByZT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJGb3IgcGFydCAyLCBpdCB3YXMganVzdCBhc2tlZCB0byBjaGVjayB0aGUgdHJlZSBjb3VudCBmb3Igb3RoZXIgc2xvcGVzIChpbmNsdWRpbmcgb25lIHdoZXJlIHlvdSdkIGJlIGdvaW5nIGRvd24gbW9yZSB0d28gcm93cykuIEkganVzdCBwYXNzZWQgdGhlc2UgdG8gdGhlIGZ1bmN0aW9uIGFib3ZlIGFuZCBtdWx0aXBsaWVkIHRoZSB2YWx1ZXMuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wcmU+PF9jb21wb25lbnRzLmNvZGUgY2xhc3NOYW1lPVwiaGxqcyBsYW5ndWFnZS1weXRob25cIj48X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJmcm9tXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBmdW5jdG9vbHMgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW1wb3J0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiByZWR1Y2VcXG5cIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJmcm9tXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBvcGVyYXRvciBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJpbXBvcnRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIG11bFxcblxcbnZhbHMgPSBbXFxuICAgIGNvdW50X3RyZWVzKFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIsIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIpLFxcbiAgICBjb3VudF90cmVlcyhcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjNcIn08L19jb21wb25lbnRzLnNwYW4+e1wiLCBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjFcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKSxcXG4gICAgY291bnRfdHJlZXMoXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCI1XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiwgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIxXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiksXFxuICAgIGNvdW50X3RyZWVzKFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiN1wifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIsIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIpLFxcbiAgICBjb3VudF90cmVlcyhcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjFcIn08L19jb21wb25lbnRzLnNwYW4+e1wiLCBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKSxcXG5dXFxuXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcInByaW50XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihyZWR1Y2UobXVsLCB2YWxzKSlcXG5cIn08L19jb21wb25lbnRzLmNvZGU+PC9fY29tcG9uZW50cy5wcmU+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyIGlkPVwiZGF5LTQtcGFzc3BvcnQtcHJvY2Vzc2luZ1wiPjxfY29tcG9uZW50cy5hIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRhYkluZGV4PVwiLTFcIiBocmVmPVwiI2RheS00LXBhc3Nwb3J0LXByb2Nlc3NpbmdcIj48X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tbGlua1wiIC8+PC9fY29tcG9uZW50cy5hPntcIkRheSA0OiBQYXNzcG9ydCBQcm9jZXNzaW5nXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08c21hbGw+PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vYWR2ZW50b2Zjb2RlLmNvbS8yMDIwL2RheS80XCI+e1wiR28gdG8gY2hhbGxlbmdlXCJ9PC9fY29tcG9uZW50cy5hPjwvc21hbGw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhpcyBvbmUgZmVsdCBsaWtlIHdvcmsuIFdlJ3JlIHRhc2tlZCB3aXRoIHZhbGlkYXRpbmcgcGFzc3BvcnRzLCBhbmQgY2hlY2tpbmcgaWYgdGhleSBoYXZlIHRoZSByZXF1aXJlZCBmaWVsZHMuIEZpZWxkcyBhcmUgdGhvc2Ugb2YgYSBjb21tb24gcGFzc3BvcnQgKGRhdGUgb2YgYmlydGgsIGlzc3VlIGRhdGUsIGNvdW50cnksIGV0Yy4pLiBDb3VudHJ5IGlzIG5vdCByZXF1aXJlZCBiZWNhdXNlIFxcXCJOb3J0aCBQb2xlIENyZWRlbnRpYWxzIGFyZW4ndCBpc3N1ZWQgYnkgYSBjb3VudHJ5XFxcIi5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiSSB1c2VkIFtkYXRhY2xhc3Nlc11bZGF0YWNsYXNzZXNdIGFuZCByZWFkIHRoZSBpbnB1dCBmaWxlLCBwYXNzaW5nIHRoZSBhIGtleS12YWx1ZSBtYXAgb2YgdGhlIHJlc3VsdHMgdG8gdGhlIGF1dG8tZ2VuZXJhdGVkIGNvbnN0cnVjdG9yLiBJZiBhbnkgb2YgdGhlIHJlcXVpcmVkIGFyZ3VtZW50cyB3ZXJlIG1pc3NpbmcsIHRoZSBjb25zdHJ1Y3RvciB3b3VsZCByYWlzZSBhbiBleGNlcHRpb24sIHdoaWNoIEkgY2F0Y2ggYW5kIHNraXAgdGhlIHBhc3Nwb3J0IGFzIGludmFsaWQuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wcmU+PF9jb21wb25lbnRzLmNvZGUgY2xhc3NOYW1lPVwiaGxqcyBsYW5ndWFnZS1weXRob25cIj48X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW1ldGFcIj57XCJAZGF0YWNsYXNzXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcblwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImNsYXNzXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXRpdGxlIGhsanMtY2xhc3NcIj57XCJQYXNzcG9ydFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCI6XFxuICAgIGJ5cjogXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcInN0clwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtY29tbWVudFwiPntcIiMgQmlydGggWWVhclwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgaXlyOiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wic3RyXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1jb21tZW50XCI+e1wiIyBJc3N1ZSBZZWFyXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICBleXI6IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJzdHJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWNvbW1lbnRcIj57XCIjIEV4cGlyYXRpb24gWWVhclwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgaGd0OiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wic3RyXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1jb21tZW50XCI+e1wiIyBIZWlnaHRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgIGhjbDogXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcInN0clwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtY29tbWVudFwiPntcIiMgSGFpciBDb2xvclwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgZWNsOiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wic3RyXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1jb21tZW50XCI+e1wiIyBFeWUgQ29sb3JcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgIHBpZDogXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcInN0clwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtY29tbWVudFwiPntcIiMgUGFzc3BvcnQgSURcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgIGNpZDogXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcInN0clwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgPSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIlxcXCJcXFwiXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1jb21tZW50XCI+e1wiIyBjb3VudHJ5LiBUaGUgYXNzaWdubWVudCBhdCB0aGUgY2xhc3MgZGVmaW5pdGlvbiB3aWxsIG1ha2UgdGhpcyBmaWVsZCBub3QgcmVxdWlyZWRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuXFxuXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZGVmXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXRpdGxlIGhsanMtZnVuY3Rpb25cIj57XCJwYXJ0XzFcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKCk6XFxuICAgIHBhc3Nwb3J0cyA9IFtdXFxuICAgIHAgPSB7fVxcbiAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJmb3JcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIGxpbmUgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIHJlYWRfZmlsZSgpOlxcbiAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcIm5vdFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgbGluZS5zdHJpcCgpOlxcbiAgICAgICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcInRyeVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCI6XFxuICAgICAgICAgICAgICAgIHBhc3Nwb3J0cy5hcHBlbmQoUGFzc3BvcnQoKipwKSlcXG4gICAgICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJleGNlcHRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFR5cGVFcnJvcjpcXG4gICAgICAgICAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiY29udGludWVcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgICAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZmluYWxseVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCI6XFxuICAgICAgICAgICAgICAgIHAgPSB7fVxcbiAgICAgICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImNvbnRpbnVlXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICAgICAgdmFsdWVzID0gbGluZS5zdHJpcCgpLnNwbGl0KFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtc3RyaW5nXCI+e1wiXFxcIiBcXFwiXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIilcXG4gICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImZvclwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgdmFsdWUgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIHZhbHVlczpcXG4gICAgICAgICAgICBrLCB2ID0gdmFsdWUuc3BsaXQoXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwiOlxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKVxcbiAgICAgICAgICAgIHBba10gPSB2XFxuICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtY29tbWVudFwiPntcIiMgbGFzdCBsaW5lXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICBwYXNzcG9ydHMuYXBwZW5kKFBhc3Nwb3J0KCoqcCkpXFxuICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcInJldHVyblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgcGFzc3BvcnRzXFxuXFxuZmlyc3RfcGFzc192YWxpZCA9IHBhcnRfMSgpXFxuXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcInByaW50XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wibGVuXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihmaXJzdF9wYXNzX3ZhbGlkKSlcXG5cIn08L19jb21wb25lbnRzLmNvZGU+PC9fY29tcG9uZW50cy5wcmU+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiUGFydCAyIGV4dGVuZHMgdGhlIHZhbGlkYXRpb24uIFNvIEkganVzdCBhZGRlZCBhIFwifTxfY29tcG9uZW50cy5jb2RlPntcInZhbGlkYXRlXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBtZXRob2QgdG8gdGhlIHBhc3Nwb3J0IGRhdGFjbGFzcyBhbmQgY2FsbGVkIGZvciB0aGUgdmFsaWQgcGFzc3BvcnRzIG9uIHBhcnQgMS5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnByZT48X2NvbXBvbmVudHMuY29kZSBjbGFzc05hbWU9XCJobGpzIGxhbmd1YWdlLXB5dGhvblwiPjxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbWV0YVwiPntcIkBkYXRhY2xhc3NcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiY2xhc3NcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtdGl0bGUgaGxqcy1jbGFzc1wiPntcIlBhc3Nwb3J0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIjpcXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1jb21tZW50XCI+e1wiIyBmaWVsZHMuLi5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuXFxuICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImRlZlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy10aXRsZSBobGpzLWZ1bmN0aW9uXCI+e1widmFsaWRhdGVcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtcGFyYW1zXCI+e1wic2VsZlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIpOlxcbiAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiYXNzZXJ0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjE5MjBcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIDw9IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJpbnRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKHNlbGYuYnlyKSA8PSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjIwMDJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJhc3NlcnRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMjAxMFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgPD0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcImludFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoc2VsZi5peXIpIDw9IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMjAyMFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImFzc2VydFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIyMDIwXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiA8PSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wiaW50XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihzZWxmLmV5cikgPD0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIyMDMwXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICAgICAgaCwgdW5pdCA9IHNpemVfcmUubWF0Y2goc2VsZi5oZ3QpLmdyb3VwcygpXFxuICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJpZlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgdW5pdCA9PSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIlxcXCJjbVxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiOlxcbiAgICAgICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImFzc2VydFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIxNTBcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIDw9IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJpbnRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKGgpIDw9IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMTkzXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZWxzZVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCI6XFxuICAgICAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiYXNzZXJ0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjU5XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiA8PSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wiaW50XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihoKSA8PSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjc2XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiYXNzZXJ0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBoYWlyX3JlLm1hdGNoKHNlbGYuaGNsKVxcbiAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiYXNzZXJ0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBzZWxmLmVjbCBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJpblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgW1wifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtc3RyaW5nXCI+e1wiXFxcImFtYlxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiLCBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIlxcXCJibHVcXFwiXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiwgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwiYnJuXFxcIlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIsIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtc3RyaW5nXCI+e1wiXFxcImdyeVxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiLCBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIlxcXCJncm5cXFwiXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiwgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwiaHpsXFxcIlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIsIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtc3RyaW5nXCI+e1wiXFxcIm90aFxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXVxcbiAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiYXNzZXJ0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBwaWRfcmUubWF0Y2goc2VsZi5waWQpXFxuXFxuXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1jb21tZW50XCI+e1wiIyAuLi4gcGFydCAxXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcblxcbnZhbGlkID0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIwXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcblwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImZvclwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgcGFzc3BvcnQgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIGZpcnN0X3Bhc3NfdmFsaWQ6XFxuICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcInRyeVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCI6XFxuICAgICAgICBwYXNzcG9ydC52YWxpZGF0ZSgpXFxuICAgICAgICB2YWxpZCArPSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjFcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImV4Y2VwdFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgRXhjZXB0aW9uOlxcbiAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcInByaW50XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihwYXNzcG9ydClcXG4gICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImNvbnRpbnVlXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcblxcblwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJwcmludFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIodmFsaWQpXFxuXCJ9PC9fY29tcG9uZW50cy5jb2RlPjwvX2NvbXBvbmVudHMucHJlPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkkgYWxtb3N0IHNraXBwZWQgdGhpcyBvbmUuIFRoaXMgbG9va3MgdG9vIG11Y2ggbGlrZSBteSBkYXktdG8tZGF5IHdvcmsgKHZhbGlkYXRlIGZvcm1zIGZvciBidXNpbmVzcyBsb2dpYyBhbmQgc2F2ZSBpcyB0aGUgYnJlYWQgYW5kIGJ1dHRlciBvZiB3ZWIgYXBwbGljYXRpb25zIG5vd2FkYXlzKS5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyIGlkPVwiZGF5LTUtYmluYXJ5LWJvYXJkaW5nXCI+PF9jb21wb25lbnRzLmEgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdGFiSW5kZXg9XCItMVwiIGhyZWY9XCIjZGF5LTUtYmluYXJ5LWJvYXJkaW5nXCI+PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLWxpbmtcIiAvPjwvX2NvbXBvbmVudHMuYT57XCJEYXkgNTogQmluYXJ5IEJvYXJkaW5nXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJUaGlzIHdhcyBhIGZ1biBvbmUuIEkgc2hvdWxkJ3ZlIG5vdGljZWQgYnkgdGhlIG5hbWUgb2YgdG9kYXkncyBwdXp6bGUgdGhlcmUgd2FzIGFuIGVhc2llciBzb2x1dGlvbiB0aGFuIGFsbW9zdCB3cml0aW5nIHZlcmJhdGltIHRoZSBwdXp6bGUgcnVsZXMuIFRvZGF5IHdlJ3JlIGxvb2tpbmcgdGhyb3VnaCBhIGxpc3Qgb2YgYm9hcmRpbmcgcGFzc2VzIGFuZCBcXFwiZGVjb2RpbmdcXFwiIHRoZSBzZWF0IElEcyBmcm9tIHRoZSBwYXNzZXMgY29kZXMuIEZyb20gdGhlIGRheSBpbnN0cnVjdGlvbnMsICdhIHNlYXQgbWlnaHQgYmUgc3BlY2lmaWVkIGxpa2UgRkJGQkJGRlJMUiwgd2hlcmUgRiBtZWFucyBcXFwiZnJvbnRcXFwiLCBCIG1lYW5zIFxcXCJiYWNrXFxcIiwgTCBtZWFucyBcXFwibGVmdFxcXCIsIGFuZCBSIG1lYW5zIFxcXCJyaWdodFxcXCInLiBUaGlzIGRlZmluZXMgYSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJiaW5hcnkgc3BhY2UgcGFydGl0aW9uaW5nXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIi4gSSB0aGVuIHByb2NlZWRlZCB0byB3cml0ZSB0aGUgYWxnb3JpdGhtIGV4YWN0bHkgbGlrZSB0aGUgcHV6emxlIGRlc2NyaWJlZC4gUGFydCAxIHdhcyBhc2tpbmcgdG8gc3VibWl0IHRoZSBoaWdoZXN0IHNlYXQgSUQuIFNvIGhlcmUncyB0aGUgaW1wbGVtZW50YXRpb246XCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wcmU+PF9jb21wb25lbnRzLmNvZGUgY2xhc3NOYW1lPVwiaGxqcyBsYW5ndWFnZS1weXRob25cIj48X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJkZWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtdGl0bGUgaGxqcy1mdW5jdGlvblwiPntcInBhcnRpdGlvblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1wYXJhbXNcIj57XCJjb2RlOiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wic3RyXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiwgY291bnQ6IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJpbnRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiLCBsb3dlcl9jaDogXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcInN0clwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIsIHVwcGVyX2NoOiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wic3RyXCJ9PC9fY29tcG9uZW50cy5zcGFuPjwvX2NvbXBvbmVudHMuc3Bhbj57XCIpIC0+IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJpbnRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiOlxcbiAgICBsZWZ0ID0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIwXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICByaWdodCA9IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgKiogY291bnRcXG5cXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZm9yXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBpIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wicmFuZ2VcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKGNvdW50KTogIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtY29tbWVudFwiPntcIiMgZm9yIGVhY2ggY2hhciBpbiB0aGUgY29kZVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgICAgIGNoID0gY29kZVtpXVxcbiAgICAgICAgbWlkID0gKHJpZ2h0ICsgbGVmdCkgLy8gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIyXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1jb21tZW50XCI+e1wiIyBzcGxpdCB0aGUgY3VycmVudCBsZW5ndGggaW4gdHdvIGdyb3Vwc1wifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImlmXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBjaCA9PSBsb3dlcl9jaDpcXG4gICAgICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWNvbW1lbnRcIj57XCIjIGlmIHRoZSBjaGFyIHJlcHJlc2VudCB0aGUgXFxcImxvd2VyIGhhbGZcXFwiIG9mIHRoZSBjdXJyZW50IHJlZ2lvbiwgbW92ZVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWNvbW1lbnRcIj57XCIjIHRoZSByaWdodCBwb2ludGVyIHRvIHRoZSBtaWRkbGVcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgICAgICAgICAgcmlnaHQgPSBtaWRcXG4gICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImVsaWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIGNoID09IHVwcGVyX2NoOlxcbiAgICAgICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtY29tbWVudFwiPntcIiMgZWxzZSwgbW92ZSB0aGUgbGVmdCBwb2ludGVyIHRvIHRoZSBtaWRkbGVcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgICAgICAgICAgbGVmdCA9IG1pZFxcbiAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWNvbW1lbnRcIj57XCIjIHlvdSdsbCBlaXRoZXIgZW5kIHdpdGggdGhlIHNhbWUgbnVtYmVyIG9yIHRoZXJlIHdpbGwgYmUgYSBkaWZmZXJlbmNlXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWNvbW1lbnRcIj57XCIjIG9mIDEuIFJldHVybiB0aGUgbWluaW11bS5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcInJldHVyblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcIm1pblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIobGVmdCwgcmlnaHQpXFxuXFxuXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZGVmXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXRpdGxlIGhsanMtZnVuY3Rpb25cIj57XCJwYXJ0XzFcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKCk6XFxuICAgIG1heF9pZCA9IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZm9yXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBjb2RlIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiByZWFkX2ZpbGUoKTpcXG4gICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtY29tbWVudFwiPntcIiMgRmlyc3QgNyBsZXR0ZXJzIHJlcHJlc2VudCB0aGUgcm93XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICAgICAgcm93ID0gcGFydGl0aW9uKGNvZGVbOlwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiN1wifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJdLCBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjdcIn08L19jb21wb25lbnRzLnNwYW4+e1wiLCBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIlxcXCJGXFxcIlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIsIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtc3RyaW5nXCI+e1wiXFxcIkJcXFwiXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIilcXG4gICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtY29tbWVudFwiPntcIiMgbGFzdCAzIHJlcHJlc2VudCB0aGUgY29sdW1zXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICAgICAgY29sID0gcGFydGl0aW9uKGNvZGVbLVwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiM1wifTwvX2NvbXBvbmVudHMuc3Bhbj57XCI6XSwgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIzXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiwgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwiTFxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiLCBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIlxcXCJSXFxcIlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIpXFxuICAgICAgICBzZWF0X2lkID0gcm93ICogXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCI4XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiArIGNvbFxcbiAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIHNlYXRfaWQgPiBtYXhfaWQ6XFxuICAgICAgICAgICAgbWF4X2lkID0gc2VhdF9pZFxcbiAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJyZXR1cm5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIG1heF9pZFxcblwifTwvX2NvbXBvbmVudHMuY29kZT48L19jb21wb25lbnRzLnByZT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJXaGVuIGRpc2N1c3Npbmcgd2l0aCBjb2xsZWFndWVzIGFib3V0IGRheSA1IHNvbHV0aW9ucywgb25lIG9mIHRoZW0gcG9pbnRlZCBvdXQgdGhlIHJ1bGVzIHdlcmUganVzdCB0aGUgc3RlcHMgdG8gdHJhbnNmb3JtIGEgYmluYXJ5IG51bWJlciBpbnRvIGl0cyBiYXNlLTEwIHJlcHJlc2VudGF0aW9uLCB3aGVyZSBcXFwiRlxcXCIvXFxcIkJcXFwiIGFuZCBcXFwiTFxcXCIvXFxcIlJcXFwiIGFyZSBcXFwiMFxcXCIgYW5kIFxcXCIxXFxcIi4gVGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcImludFwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgY29uc3RydWN0b3IgaW4gcHl0aG9uIGNhbiBjYXN0IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBudW1iZXJzIGluIGFueSBiYXNlLCB3aGljaCB5b3UgY2FuIHNldCBhcyB0aGUgc2Vjb25kIHBhcmFtZXRlci4gU28gXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiaW50KFxcXCIxMDAxXFxcIiwgMilcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHdpbGwgcmV0dXJuIFwifTxfY29tcG9uZW50cy5jb2RlPntcIjlcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucHJlPjxfY29tcG9uZW50cy5jb2RlIGNsYXNzTmFtZT1cImhsanMgbGFuZ3VhZ2UtcHl0aG9uXCI+PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZGVmXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXRpdGxlIGhsanMtZnVuY3Rpb25cIj57XCJ0b19pbnRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtcGFyYW1zXCI+e1wiY29kZSwgemVybywgb25lXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIik6XFxuICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UoemVybywgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwiMFxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKS5yZXBsYWNlKG9uZSwgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwiMVxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKVxcbiAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJyZXR1cm5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJpbnRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKGNvZGUsIGJhc2U9XCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIyXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIilcXG5cXG5cIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWNvbW1lbnRcIj57XCIjIC4uLlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZm9yXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBjb2RlIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiByZWFkX2ZpbGUoKTpcXG4gICAgICAgIHJvdyA9IHRvX2ludChjb2RlWzpcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjdcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXSwgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwiRlxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiLCBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIlxcXCJCXFxcIlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIpXFxuICAgICAgICBjb2wgPSB0b19pbnQoY29kZVstXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIzXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIjpdLCBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIlxcXCJMXFxcIlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIsIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtc3RyaW5nXCI+e1wiXFxcIlJcXFwiXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIilcXG4gICAgICAgIHNlYXRfaWQgPSByb3cgKiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjhcIn08L19jb21wb25lbnRzLnNwYW4+e1wiICsgY29sXFxuXCJ9PC9fY29tcG9uZW50cy5jb2RlPjwvX2NvbXBvbmVudHMucHJlPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIk5lYXQuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkZvciBwYXJ0IDIsIHdlIHdhbnQgdG8gZmluZCB0aGUgb25seSBtaXNzaW5nIHNlYXQgSUQgaW4gdGhlIGxpc3QgKHRoZSBzdG9yeSBjaGFyYWN0ZXIgbG9zdCB0aGVpciBib2FyZGluZyBwYXNzISkuIEkgY291bGQgbm90IGZvciB0aGUgbGlmZSBvZiBtZSBmaWd1cmUgb3V0IGhvdyB0byBkbyB0aGF0LiBUaGUgcHV6emxlIHN0YXRlcyB0aGUgXFxcImJhY2tcXFwiIGFuZCB0aGUgXFxcImZyb250XFxcIiBvZiB0aGUgYWlycGxhbmUgYXJlIGVtcHR5LCBzbyB5b3UgbmVlZCB0byBmaW5kIHRoZSBlbXB0eSBzcG90IGluIHRoZSBcXFwibWlkZGxlXFxcIi4gSSB3ZW50IHdpdGggdGhlIGZpcnN0IGlkZWEgaW4gbXkgbWluZDogbGV0J3MgdmlzdWFsaXplIHRoZSBhaXJwbGFuZSBhZnRlciBhbGwgc2VhdHMgYXJlIGZpbGxlZCwgcHJpbnQgb3V0IHRoZSBjb2x1bW4gYW5kIHJvdywgYW5kIG1hbnVhbGx5IGZpbmQgdGhlIHNlYXQgSUQuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wcmU+PF9jb21wb25lbnRzLmNvZGUgY2xhc3NOYW1lPVwiaGxqcyBsYW5ndWFnZS1weXRob25cIj48X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJkZWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtdGl0bGUgaGxqcy1mdW5jdGlvblwiPntcInBhcnRfMl92aXN1YWxpemF0aW9uXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIigpOlxcbiAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIlxcXCJcXFwiXFxcIlxcbiAgICBXaWxsIHByaW50IHNvbWV0aGluZyBsaWtlIHRoaXMgd2l0aCBteSBpbnB1dFxcbiAgICAuLi5cXG4gICAgMDg2IC0+IFsnIycsICcjJywgJyMnLCAnIycsICcjJywgJyMnLCAnIycsICcjJ11cXG4gICAgMDg3IC0+IFsnIycsICcjJywgJyMnLCAnIycsICcjJywgJyMnLCAnIycsICcjJ11cXG4gICAgMDg4IC0+IFsnIycsICcuJywgJyMnLCAnIycsICcjJywgJyMnLCAnIycsICcjJ11cXG4gICAgMDg5IC0+IFsnIycsICcjJywgJyMnLCAnIycsICcjJywgJyMnLCAnIycsICcjJ11cXG4gICAgMDkwIC0+IFsnIycsICcjJywgJyMnLCAnIycsICcjJywgJyMnLCAnIycsICcjJ11cXG4gICAgLi4uXFxuICAgIG1lYW5pbmcgdGhlIGZyZWUgc2VhdCBpcyBpbiByb3cgODgsIGNvbCAxLlxcbiAgICBcXFwiXFxcIlxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgIGFpcmNyYWZ0ID0gW1tcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIlxcXCIuXFxcIlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZm9yXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBfIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wicmFuZ2VcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiOFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIpXSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJmb3JcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIF8gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJyYW5nZVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIxMjhcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKV1cXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZm9yXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBjb2RlIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiByZWFkX2ZpbGUoKTpcXG4gICAgICAgIHJvdyA9IHBhcnRpdGlvbihjb2RlWzpcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjdcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXSwgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCI3XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiwgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwiRlxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiLCBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIlxcXCJCXFxcIlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIpXFxuICAgICAgICBjb2wgPSBwYXJ0aXRpb24oY29kZVstXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIzXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIjpdLCBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjNcIn08L19jb21wb25lbnRzLnNwYW4+e1wiLCBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIlxcXCJMXFxcIlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIsIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtc3RyaW5nXCI+e1wiXFxcIlJcXFwiXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIilcXG4gICAgICAgIGFpcmNyYWZ0W3Jvd11bY29sXSA9IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtc3RyaW5nXCI+e1wiXFxcIiNcXFwiXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJmb3JcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIGksIHggXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJlbnVtZXJhdGVcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKGFpcmNyYWZ0KTpcXG4gICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJwcmludFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwiezowPjN9IC0+IHt9XFxcIlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIuXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcImZvcm1hdFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoaSwgeCkpXFxuXCJ9PC9fY29tcG9uZW50cy5jb2RlPjwvX2NvbXBvbmVudHMucHJlPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkFnYWluLCB0YWxraW5nIHdpdGggY29sbGVhZ3VlcyBtYWRlIG1lIHVuZGVyc3RhbmQgYSBwcm9ncmFtYXRpYyBzb2x1dGlvbi4gSXQncyBnaXZlbiB0aGF0IHRoZSBwbGFuZSBpcyBmdWxsLiBUaGUgSUQgZm9ybXVsYSBpcyBcIn08X2NvbXBvbmVudHMuY29kZT57XCJyb3cgKiA4ICsgY29sXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIi4gVGhlIGFpcnBsYW5lIGhhcyA4IGNvbHVtbnMsIHNvIHNlYXRzIGluIHRoZSBzYW1lIHJvdyB3aWxsIGFsbCBzaGFyZSB0aGUgZmlyc3QgXFxcInBpZWNlXFxcIiBvZiB0aGlzIGVxdWF0aW9uLCB3aXRoIHRoZSBcXFwiY29sXFxcIiBtYWtpbmcgdGhlc2UgaWRzIG1hcCB0byBhbGwgaW50ZWdlcnMgZnJvbSAwIHRvIDEwMjQgKDEyNyB4IDggKyA4KS4gV2l0aCBhbGwgdGhlIGlkcyBjYWxjdWxhdGVkLCBJIGp1c3QgbmVlZCB0byBmaW5kIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIGlkcyBJIGhhdmUgYW5kIHRoZSBzZXQgb2YgYWxsIHBvc3NpYmxlIGlkcy5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnByZT48X2NvbXBvbmVudHMuY29kZSBjbGFzc05hbWU9XCJobGpzIGxhbmd1YWdlLXB5dGhvblwiPjxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImRlZlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy10aXRsZSBobGpzLWZ1bmN0aW9uXCI+e1wicGFydF8yX2Zvcl9yZWFsX25vd1wifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoKTpcXG4gICAgaWRzID0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcInNldFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoKVxcbiAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJmb3JcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIGNvZGUgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIHJlYWRfZmlsZSgpOlxcbiAgICAgICAgcm93ID0gcGFydGl0aW9uKGNvZGVbOlwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiN1wifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJdLCBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjdcIn08L19jb21wb25lbnRzLnNwYW4+e1wiLCBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIlxcXCJGXFxcIlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIsIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtc3RyaW5nXCI+e1wiXFxcIkJcXFwiXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIilcXG4gICAgICAgIGNvbCA9IHBhcnRpdGlvbihjb2RlWy1cIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjNcIn08L19jb21wb25lbnRzLnNwYW4+e1wiOl0sIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiM1wifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIsIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtc3RyaW5nXCI+e1wiXFxcIkxcXFwiXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiwgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwiUlxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKVxcblxcbiAgICAgICAgaWRzLmFkZChyb3cgKiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjhcIn08L19jb21wb25lbnRzLnNwYW4+e1wiICsgY29sKVxcbiAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWNvbW1lbnRcIj57XCIjIGFsbCBwb3NzaWJsZSBJRHMgYXJlIGJldHdlZW4gdGhlIGZpcnN0IGFuZCBsYXN0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWNvbW1lbnRcIj57XCIjIG5vbi1lbXB0eSBzZWF0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICBzZWF0ID0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcInNldFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcInJhbmdlXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wibWluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihpZHMpLCBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wibWF4XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihpZHMpKSkgLSBpZHNcXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wicmV0dXJuXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBzZWF0LnBvcCgpXFxuXCJ9PC9fY29tcG9uZW50cy5jb2RlPjwvX2NvbXBvbmVudHMucHJlPntcIlxcblwifTxfY29tcG9uZW50cy5oMiBpZD1cImRheS02LWN1c3RvbS1jdXN0b21zXCI+PF9jb21wb25lbnRzLmEgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdGFiSW5kZXg9XCItMVwiIGhyZWY9XCIjZGF5LTYtY3VzdG9tLWN1c3RvbXNcIj48X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tbGlua1wiIC8+PC9fY29tcG9uZW50cy5hPntcIkRheSA2OiBDdXN0b20gQ3VzdG9tc1wifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhpcyBkYXkgd2FzIGFuIGV4ZXJjaXNlIG9uIHB5dGhvbidzIFwifTxfY29tcG9uZW50cy5hIGhyZWY9XCJodHRwczovL2RvY3MucHl0aG9uLm9yZy8zL2xpYnJhcnkvY29sbGVjdGlvbnMuaHRtbCNjb2xsZWN0aW9ucy5Db3VudGVyXCI+PF9jb21wb25lbnRzLmNvZGU+e1wiQ291bnRlclwifTwvX2NvbXBvbmVudHMuY29kZT48L19jb21wb25lbnRzLmE+e1wiIGRhdGEgc3RydWN0dXJlLiBUaGUgaW5wdXQgcmVwcmVzZW50cyBxdWVzdGlvbnMgKG1hcmtlZCBhIHRvIHopIHBlb3BsZSBhbnN3ZXJlZCBcXFwieWVzXFxcIiB0byBpbiBhIGN1c3RvbXMgZGVjbGFyYXRpb24gZm9ybSwgYW5kIGZvciBwYXJ0IDEsIHdlJ3JlIGludGVyZXN0ZWQgaW4gZmluZGluZyBob3cgbWFueSBxdWVzdGlvbnMgYW55IGluZGl2aWR1YWwgaW4gYSBncm91cCBvZiBwZW9wbGUgYW5zd2VyZWQgXFxcInllc1xcXCIgdG8uIEVhY2ggbGluZSBpcyBhbiBpbmRpdmlkdWFsLCBhbmQgZ3JvdXBzIGFyZSBzZXBhcmF0ZWQgYnkgYW4gZW1wdHkgbGluZS5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiQWghIEFsc28gc2luY2UgdGhpcyBkYXksIEkgc3RvcHBlZCBzZXBhcmF0aW5nIHRoZSBwdXp6bGVzIGJ5IHBhcnRzLiBJJ2xsIGp1c3Qgd3JpdGUgdGhlIHNvbHV0aW9ucyBhbmQgc2VwYXJhdGUgaW50byBmdW5jdGlvbnMgdGhlIHJlcGVhdCBiaXRzIGZvciBiZXR0ZXIgb3JnYW5pemF0aW9uLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJTbyBJIGp1c3QgcGFzcyBlYWNoIGxpbmUgdG8gYSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJDb3VudGVyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBpbnN0YW5jZSwgYW5kIGFkZCB0aGVtIHVwIGZvciBlYWNoIGdyb3VwLiBcIn08X2NvbXBvbmVudHMuY29kZT57XCJDb3VudGVyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBpbXBsZW1lbnRzIGFkZGl0aW9uIHNvIFwifTxfY29tcG9uZW50cy5jb2RlPntcIkNvdW50ZXIoJ2FiYycpICsgQ291bnRlcignY2RlJylcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHdpbGwgYmUgZXF1aXZhbGVudCB0byB0aGUgZGljdGlvbmFyeSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ7J2MnOiAyLCAnYSc6IDEsICdiJzogMSwgJ2QnOiAxLCAnZSc6IDF9XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiAobm90ZSB0aGUga2V5IFwifTxfY29tcG9uZW50cy5jb2RlPntcImNcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGhhcyB2YWx1ZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCIyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiwgYmVjYXVzZSBpdCBhcHBlYXJzIGluIGJvdGggc2lkZXMgb2YgdGhlIHN1bSkuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wcmU+PF9jb21wb25lbnRzLmNvZGUgY2xhc3NOYW1lPVwiaGxqcyBsYW5ndWFnZS1weXRob25cIj57XCJncm91cHMgPSBbXVxcbmN1cnJlbnRfZ3JvdXAgPSBDb3VudGVyKClcXG5ncm91cF9zaXplID0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIwXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcblwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImZvclwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgbGluZSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJpblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgcmVhZF9maWxlKCk6XFxuICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImlmXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBsaW5lOlxcbiAgICAgICAgY3VycmVudF9ncm91cCArPSBDb3VudGVyKGxpbmUpXFxuICAgICAgICBncm91cF9zaXplICs9IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZWxzZVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCI6XFxuICAgICAgICBncm91cHMuYXBwZW5kKFtjdXJyZW50X2dyb3VwLCBncm91cF9zaXplXSlcXG4gICAgICAgIGN1cnJlbnRfZ3JvdXAgPSBDb3VudGVyKClcXG4gICAgICAgIGdyb3VwX3NpemUgPSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjBcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuXFxuXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcInByaW50XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIlxcXCItLS0gcGFydCAxIC0tLVxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKVxcblwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtY29tbWVudFwiPntcIiMgdGhlIFxcXCJsZW5ndGhcXFwiIG9mIGVhY2ggZ3JvdXAgY291bnRlciBpcyB0aGUgYW1vbnQgb2YgdW5pcXVlIGFuc3dlcnMgZm9yIHRoYXQgZ3JvdXAuXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcblwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtY29tbWVudFwiPntcIiMgSSBjb3VsZCB1c2UgYSBgc2V0YCBoZXJlOiB0aGUgYWN0dWFsIGNvdW50IGlzIG5vdCBpbXBvcnRhbnQgZm9yIHBhcnQgMVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG5cIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wicHJpbnRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJzdW1cIn08L19jb21wb25lbnRzLnNwYW4+e1wiKFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJtYXBcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImxhbWJkYVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgYzogXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcImxlblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoY1tcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjBcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXSksIGdyb3VwcykpKVxcblwifTwvX2NvbXBvbmVudHMuY29kZT48L19jb21wb25lbnRzLnByZT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJVc2luZyBcIn08X2NvbXBvbmVudHMuY29kZT57XCJDb3VudGVyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcInMgbWFkZSBwYXJ0IDIgc3VwZXIgZWFzeS4gV2UgbGVhcm4gdGhhdCB3ZSBkb24ndCB3YW50IHRvIGNvdW50IGhvdyBtYW55IHF1ZXN0aW9ucyBcIn08X2NvbXBvbmVudHMuZW0+e1wiYW55b25lXCJ9PC9fY29tcG9uZW50cy5lbT57XCIgYW5zd2VyZWQgXFxcInllc1xcXCIsIGJ1dCB0aGUgb25lcyB3aGVyZSBcIn08X2NvbXBvbmVudHMuZW0+e1wiZXZlcnlvbmVcIn08L19jb21wb25lbnRzLmVtPntcIiBpbiB0aGUgZ3JvdXAgYW5zd2VyZWQgeWVzLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJTbyBmb3IgZWFjaCBncm91cCBjYXB0dXJlZCBpbiBwYXJ0IDEsIEkgY2FsbCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJtb3N0X2NvbW1vbigpXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBpbiB0aGUgY291bnRlciwgd2hpY2ggd2lsbCByZXR1cm4gZWFjaCBsZXR0ZXIgc29ydGVkIGJ5IHRoZWlyIGNvdW50IGluIGRlY3Jlc2NlbnQgb3JkZXIuIElmIHRoZSBjb3VudCBpcyB0aGUgc2FtZSBhcyB0aGUgc2l6ZSBvZiB0aGUgZ3JvdXAsIHRoaXMgbGV0dGVyIHJlcHJlc2VudHMgdGhlIHF1ZXN0aW9uIGFsbCBpbmRpdmlkdWFscyBhbnN3ZXJlZCBcXFwieWVzXFxcIiB0by5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnByZT48X2NvbXBvbmVudHMuY29kZSBjbGFzc05hbWU9XCJobGpzIGxhbmd1YWdlLXB5dGhvblwiPntcInRvdGFsX2NvdW50ID0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIwXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcblwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImZvclwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgZ3JvdXAsIGNvdW50IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBncm91cHM6XFxuICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImZvclwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgXywgYW5zX2NvdW50IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBncm91cC5tb3N0X2NvbW1vbigpOlxcbiAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIGFuc19jb3VudCA9PSBjb3VudDpcXG4gICAgICAgICAgICB0b3RhbF9jb3VudCArPSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjFcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJlbHNlXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIjpcXG4gICAgICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJicmVha1wifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG5cXG5cIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wicHJpbnRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKHRvdGFsX2NvdW50KVxcblwifTwvX2NvbXBvbmVudHMuY29kZT48L19jb21wb25lbnRzLnByZT57XCJcXG5cIn08X2NvbXBvbmVudHMuaDEgaWQ9XCJkYXktMTctY29ud2F5LWN1YmVzXCI+PF9jb21wb25lbnRzLmEgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdGFiSW5kZXg9XCItMVwiIGhyZWY9XCIjZGF5LTE3LWNvbndheS1jdWJlc1wiPjxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1saW5rXCIgLz48L19jb21wb25lbnRzLmE+e1wiRGF5IDE3OiBDb253YXkgQ3ViZXNcIn08L19jb21wb25lbnRzLmgxPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlRoZSB0aXRsZSBzYXlzIGl0IGFsbDogd2UncmUgZGVhbGluZyB3aXRoIFwifTxfY29tcG9uZW50cy5hIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db253YXklMjdzX0dhbWVfb2ZfTGlmZVwiPntcIkNvbndheSdzIEdhbWUgb2YgTGlmZVwifTwvX2NvbXBvbmVudHMuYT57XCIuIFRoZSBpbnB1dCBpcyBhIHR3by1kaW1lbnNpb25hbCBzbGljZSBvZiBhIHRocmVlLWRpbWVuc2lvbmFsIGdyaWQgb2YgXFxcImN1YmVzXFxcIiB0aGF0IGNhbiBlaXRoZXIgYWN0aXZlIG9yIGluYWN0aXZlLiBDdWJlcyBjaGFuZ2UgdGhlaXIgc3RhdGUgaW4gY3ljbGVzLCBjb25zaWRlcmluZyB0aGUgc3RhdGUgb2YgdGhlaXIgbmVpZ2hib3JzLiBJbiB0aHJlZS1kaW1lbnNpb25hbCBzcGFjZSwgZWFjaCBjdWJlIGhhcyBhIHRvdGFsIG9mIDI2IG5laWdoYm9ycyAoYSAzeDN4MyBpbnRlZ2VyIHJlZ2lvbiBpbiB0aGlzIHNwYWNlKS4gVGhlIHJ1bGVzIGFyZSB0aGUgZ2VuZXJhbCBvZiBDb253YXkncyBnYW1lIG9mIGxpZmU6XCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiSWYgYSBjdWJlIGlzIGFjdGl2ZSBhbmQgZXhhY3RseSAyIG9yIDMgb2YgaXRzIG5laWdoYm9ycyBhcmUgYWxzbyBhY3RpdmUsIHRoZSBjdWJlIHJlbWFpbnMgYWN0aXZlLiBPdGhlcndpc2UsIHRoZSBjdWJlIGJlY29tZXMgaW5hY3RpdmUuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiSWYgYSBjdWJlIGlzIGluYWN0aXZlIGJ1dCBleGFjdGx5IDMgb2YgaXRzIG5laWdoYm9ycyBhcmUgYWN0aXZlLCB0aGUgY3ViZSBiZWNvbWVzIGFjdGl2ZS4gT3RoZXJ3aXNlLCB0aGUgY3ViZSByZW1haW5zIGluYWN0aXZlLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJBbGwgdGhlIHB1enpsZSBpcyBhc2tpbmcgaXMgaG93IG1hbnkgY3ViZXMgd2lsbCBiZSBhY3RpdmUgYWZ0ZXIgNiBjeWNsZXMuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkkgYm9ycm93ZWQgdGhlIFxcXCJuZWlnaGJvcnNcXFwiIHByb2Nlc3NpbmcgZnJvbSBkYXkgMTEgYWRqYWNlbnQgc2VhdCBjYWxjdWxhdGlvbiBhbmQgZXh0cmFwb2xhdGVkIGZvciBOIGRpbWVuc2lvbnMuIEkgdGhvdWdodCB3ZSB3ZXJlIGVpdGhlciB1c2luZyB0aGlzIGluIGEgZnV0dXJlIHB1enpsZSwgb3IgdGhlcmUgd291bGQgYmUgbW9yZSBkaW1lbnNpb25zIGluIHBhcnQgMi5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnByZT48X2NvbXBvbmVudHMuY29kZSBjbGFzc05hbWU9XCJobGpzIGxhbmd1YWdlLXB5dGhvblwiPjxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImZyb21cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIGl0ZXJ0b29scyBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJpbXBvcnRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIHByb2R1Y3RcXG5cXG5cIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJkZWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtdGl0bGUgaGxqcy1mdW5jdGlvblwiPntcIm5laWdoYm9yaG9vZFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1wYXJhbXNcIj57XCIqcG9zaXRpb246IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJpbnRcIn08L19jb21wb25lbnRzLnNwYW4+PC9fY29tcG9uZW50cy5zcGFuPntcIikgLT4gSXRlcmF0b3JbXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy10eXBlXCI+e1wiVHVwbGVcIn08L19jb21wb25lbnRzLnNwYW4+e1wiW1wifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJpbnRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXV06XFxuICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtc3RyaW5nXCI+e1wiXFxcIlxcXCJcXFwiXFxuICAgIFJldHVybnMgYWxsIFxcXCJpbnRlZ2VyXFxcIiBuZWlnaGJvcnMgb2YgYSBwb2ludCBpbiBhbiBOLWRpbWVuc2lvbmFsIHNwYWNlLlxcblxcbiAgICA+Pj4gZm9yIG4gaW4gbmVpZ2hib3Job29kKDAsIDApOlxcbiAgICAuLi4gICAgIHByaW50KG4sIGVuZD1cXFwiIFxcXCIpXFxuICAgIC4uLiAoLTEsIC0xKSAoLTEsIDApICgtMSwgMSkgKDAsIC0xKSAoMCwgMCkgKDAsIDEpICgxLCAtMSkgKDEsIDApICgxLCAxKVxcbiAgICA+Pj4gZm9yIG4gaW4gbmVpZ2hib3Job29kKDEsIDIsIDMpOlxcbiAgICAuLi4gICAgcHJpbnQobiwgZW5kPVxcXCIgXFxcIilcXG4gICAgLi4uICgwLCAxLCAyKSAoMCwgMSwgMykgKDAsIDEsIDQpICgwLCAyLCAyKSAoMCwgMiwgMykgKDAsIDIsIDQpICgwLCAzLCAyKSAjIC4uLlxcbiAgICBcXFwiXFxcIlxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImZvclwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgZGlmZiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJpblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgcHJvZHVjdChbLVwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIsIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIsIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJdLCByZXBlYXQ9XCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcImxlblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIocG9zaXRpb24pKTpcXG4gICAgICAgIG5laWdoYm9yID0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcInR1cGxlXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihwb3MgKyBkaWZmW2ldIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImZvclwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgaSwgcG9zIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wiZW51bWVyYXRlXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihwb3NpdGlvbikpXFxuICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJ5aWVsZFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgbmVpZ2hib3JcXG5cIn08L19jb21wb25lbnRzLmNvZGU+PC9fY29tcG9uZW50cy5wcmU+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiSSBzdGFydCBieSBwcm9jZXNzaW5nIHRoZSBpbnB1dCwgc2F2aW5nIGlmIHRoZXkgYXJlIGFjdGl2ZSAoXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiI1wifTwvX2NvbXBvbmVudHMuY29kZT57XCIpIG9yIGluYWN0aXZlIChcIn08X2NvbXBvbmVudHMuY29kZT57XCIuXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIikgaW4gYSBkaWN0aW9uYXJ5IGtleWVkIGJ5IHRoZSBwb2ludCBpbiAzIGRpbWVuc2lvbnNcIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnByZT48X2NvbXBvbmVudHMuY29kZSBjbGFzc05hbWU9XCJobGpzIGxhbmd1YWdlLXB5dGhvblwiPntcImluaXRpYWwgPSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIlxcXCJcXFwiXFxcIlxcbiMjIyMuIy4uXFxuLi4uLi4uLiNcXG4jLi4jIyMjI1xcbi4uLi4uIyMuXFxuIyMuLi4jIyNcXG4jLi4jLiMuI1xcbi4jIy4uLiMuXFxuIy4uLiMjLi5cXG5cXFwiXFxcIlxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiLnN0cmlwKClcXG5cXG5zcGFjZSA9IGRlZmF1bHRkaWN0KFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImxhbWJkYVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCI6IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtc3RyaW5nXCI+e1wiXFxcIi5cXFwiXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIilcXG5cIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJmb3JcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIHgsIGxpbmUgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJlbnVtZXJhdGVcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKGluaXRpYWwuc3BsaXRsaW5lcygpKTpcXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZm9yXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiB5LCBzdGF0ZSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJpblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcImVudW1lcmF0ZVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIobGluZSk6XFxuICAgICAgICBjdWJlID0gKHgsIHksIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIpXFxuICAgICAgICBzcGFjZVtjdWJlXSA9IHN0YXRlXFxuXCJ9PC9fY29tcG9uZW50cy5jb2RlPjwvX2NvbXBvbmVudHMucHJlPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkJlY2F1c2UgdGhlIHNwYWNlIGlzIGluZmluaXRlLCBjdWJlcyBmb3Igb3RoZXIgdmFsdWVzIG9mIHRoZSB0aGlyZC1kaW1lbnNpb24gYW5kIG91dHNpZGUgdGhlIGJvcmRlcnMgb2YgdGhlIGlucHV0IG5lZWQgdG8gYmUgdGFrZW4gaW50byBhY2NvdW50LiBJbnN0ZWFkIG9mIGZpbmRpbmcgdGhlIGJvcmRlcnMgb2YgdGhlIGFjdGl2ZSBub2RlcywgSSBkZWNpZGVkIHRvIGdvIG92ZXIgZWFjaCBvZiB0aGUga25vd24gY3ViZXMsIGFuZCBpZiB0aGV5IGFyZSBhZGRlZCwgSSB3b3VsZCBpbmNyZW1lbnQgYSBjb3VudGVyIGZvciBlYWNoIG9mIHRoZXNlIG5laWdoYm9ycy4gSSB3b3VsZCBlbmQgdXAgd2l0aCBtb3JlIHBvaW50cyB0aGFuIHRoZSBpdGVyYXRpb24gYmVmb3JlLCBhbmQgaG93IG1hbnkgb2YgdGhlc2UgcG9pbnRzIGhhdmUgYWN0aXZlIG5laWdoYm9ycy5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnByZT48X2NvbXBvbmVudHMuY29kZSBjbGFzc05hbWU9XCJobGpzIGxhbmd1YWdlLXB5dGhvblwiPntcImN1YmVfdG9fYWN0aXZlX2NvdW50ID0gZGVmYXVsdGRpY3QoXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcImludFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIpXFxuXFxuXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZm9yXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBjdWJlIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBzcGFjZTpcXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZm9yXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBuIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBuZWlnaGJvcmhvb2QoKmN1YmUpOlxcbiAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIG4gPT0gY3ViZTogIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtY29tbWVudFwiPntcIiMgZG9uJ3QgY291bnQgdGhlIGN1YmUgaXRzZWxmXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICAgICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImNvbnRpbnVlXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICAgICAgY3ViZV90b19hY3RpdmVfY291bnRbbl0gKz0gc3BhY2VbY3ViZV0gPT0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwiI1xcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5jb2RlPjwvX2NvbXBvbmVudHMucHJlPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkFzIEkgc2FpZCBlYXJsaWVyLCBkaWN0aW9uYXJ5IFwifTxfY29tcG9uZW50cy5jb2RlPntcImN1YmVfdG9fYWN0aXZlX2NvdW50XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiB3aWxsIGVuZCB1cCB3aXRoIG1vcmUgcG9pbnRzIHRoYW4gdGhlIHNwYWNlIGJlZm9yZS4gRm9yIGVhY2ggb2YgdGhvc2UgcG9pbnRzIEkgY2FuIG5vdyBkZWNpZGUgaWYgdGhleSBhcmUgYWN0aXZlIG9yIGluYWN0aXZlIGdpdmVuIGhvdyBtYW55IG9mIHRoZSBvcmlnaW5hbCBzcGFjZSB3ZXJlIGFjdGl2ZS4gSGVyZSdzIHRoZSBkaXJlY3QgdHJhbnNsYXRpb24gb2YgdGhlIHJ1bGVzIGRlZmluZWQgYWJvdmU6XCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wcmU+PF9jb21wb25lbnRzLmNvZGUgY2xhc3NOYW1lPVwiaGxqcyBsYW5ndWFnZS1weXRob25cIj48X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJmb3JcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIG4sIGNvdW50IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBjdWJlX3RvX2FjdGl2ZV9jb3VudC5pdGVtcygpOlxcbiAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJpZlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgc3BhY2Vbbl0gPT0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwiI1xcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiOlxcbiAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIGNvdW50IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBbXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIyXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiwgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIzXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIl06XFxuICAgICAgICAgICAgc3BhY2Vbbl0gPSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIlxcXCIjXFxcIlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImVsc2VcIn08L19jb21wb25lbnRzLnNwYW4+e1wiOlxcbiAgICAgICAgICAgIHNwYWNlW25dID0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwiLlxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImVsaWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIHNwYWNlW25dID09IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtc3RyaW5nXCI+e1wiXFxcIi5cXFwiXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIjpcXG4gICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImlmXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBjb3VudCA9PSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjNcIn08L19jb21wb25lbnRzLnNwYW4+e1wiOlxcbiAgICAgICAgICAgIHNwYWNlW25dID0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwiI1xcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5jb2RlPjwvX2NvbXBvbmVudHMucHJlPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkFmdGVyIHJ1bm5pbmcgdGhpcyA2IHRpbWVzIChhIHNpbXBsZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJmb3IgXyBpbiByYW5nZSg2KVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIpLCBJIGp1c3Qgc3VtIHVwIHRoZSB2YWx1ZXMgb2YgdGhlIHNwYWNlIGRpY3Rpb25hcnkgdGhhdCBhcmUgZXF1YWwgdG8gdGhlIGFjdGl2ZSBzdGF0ZSBjaGFyIFwifTxfY29tcG9uZW50cy5jb2RlPntcIiNcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJQYXJ0IDIgb2YgdGhlIHB1enpsZSBqdXN0IGFza2VkIGZvciBydW5uaW5nIHRoZSBzYW1lIDYgY3ljbGVzLCBidXQgbm93IGluIGEgZm91ci1kaW1lbnNpb25zIHNwYWNlISBObyBjaGFuZ2Ugd2FzIG5lZWRlZCB0byB0aGUgbmVpZ2hib3Job29kIGNhbGN1bGF0aW9uLCBzbyB0aGF0IHdhcyBhIHdpbi4gSSBuZWVkZWQgdG8gY2hhbmdlIHRoZSBpbnB1dCBwYXJzaW5nIHRvIGFsbG93IGZvciBhbm90aGVyIGRpbWVuc2lvbjpcIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnByZT48X2NvbXBvbmVudHMuY29kZSBjbGFzc05hbWU9XCJobGpzIGxhbmd1YWdlLWRpZmZcIj57XCIgc3BhY2UgPSBkZWZhdWx0ZGljdChsYW1iZGE6IFxcXCIuXFxcIilcXG4gZm9yIHgsIGxpbmUgaW4gZW51bWVyYXRlKGluaXRpYWwuc3BsaXRsaW5lcygpKTpcXG4gICAgIGZvciB5LCBzdGF0ZSBpbiBlbnVtZXJhdGUobGluZSk6XFxuXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1kZWxldGlvblwiPntcIi0gICAgICAgIGN1YmUgPSAoeCwgeSwgMClcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1hZGRpdGlvblwiPntcIisgICAgICAgIGN1YmUgPSAoeCwgeSwgMCwgMClcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgICAgICAgc3BhY2VbY3ViZV0gPSBzdGF0ZVxcblwifTwvX2NvbXBvbmVudHMuY29kZT48L19jb21wb25lbnRzLnByZT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJUaGVuIEkganVzdCBjb3BpZWQgdGhlIGNvZGUgdmVyYmF0aW0gZnJvbSBwYXJ0IDEgYW5kIGdvdCB0byB0aGUgY29ycmVjdCBhbnN3ZXIuIEl0IHdhcyB0YWtpbmcgYSBjb3VwbGUgb2Ygc2Vjb25kcyB0byBydW4gdGhvdWdoLCBnaXZlbiB0aGF0IG5vdyB3ZSBhcmUgZ3Jvd2luZyB0aGUgc3BhY2UgaW4gZWFjaCBjeWNsZSBkdWUgdG8gZWFjaCBjdWJlIG5vdyBhZGRpbmcgYXQgbW9zdCA4MCBjdWJlcyB0byB0aGUgXFxcImtub3duXFxcIiBzcGFjZSBzdGF0ZS5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiSSBub3RpY2VkIHRoYXQgSSB3YXMganVzdCBjb3VudGluZyBhY3RpdmUgY3ViZXMgaW4gdGhlIGZpcnN0IGZvciBsb29wIHRvIGZpbmQgdGhlIGFmZmVjdGVkIG5laWdoYm9ycywgYWRkaW5nIGEgbG90IG9mIHJlZmVyZW5jZXMgdG8gbmV3IHBvaW50cyBidXQgb25seSBzYXlpbmcgdGhlc2UgaGFkIDAgYWN0aXZlIGN1YmVzIGFyb3VuZCB0aGVtLiBTbyBJIGVkaXRlZCB0aGUgY29kZSB0byBza2lwIG5laWdoYm9yIHByb2Nlc3Npbmcgb2YgaW5hY3RpdmUgY3ViZXMgKHRoZSBtYWpvcml0eSBvZiB0aGUgaXRlcmF0aW9ucyksIGFuZCB3aXRoIGEgY291cGxlIG9mIGFkanVzdG1lbnRzLCBJIGhhZCBhIHNvbHV0aW9uIHJ1bm5pbmcgaW4gMC4zIHNlY29uZHMuIEkgdGhlbiBnZW5lcmFsaXplZCBpdCBhcyB3ZWxsIHRvIHJ1biBmb3IgbXVsdGlwbGUgZGltZW5zaW9ucywgd2l0aCBzb21lIG5pY2UgdHJpY2tzIHRvIHBhcnNlIHRoZSBpbnB1dC4gSGVyZSdzIHRoZSBmdWxsIGNvZGUgZm9yIHRoZSBjeWNsZTpcIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnByZT48X2NvbXBvbmVudHMuY29kZSBjbGFzc05hbWU9XCJobGpzIGxhbmd1YWdlLXB5dGhvblwiPjxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImRlZlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy10aXRsZSBobGpzLWZ1bmN0aW9uXCI+e1wiZnVsbF9jeWNsZVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1wYXJhbXNcIj57XCJpbml0aWFsOiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wic3RyXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiwgZGltZW5zaW9uczogXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcImludFwifTwvX2NvbXBvbmVudHMuc3Bhbj48L19jb21wb25lbnRzLnNwYW4+e1wiKSAtPiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wiaW50XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIjpcXG4gICAgc3BhY2UgPSBkZWZhdWx0ZGljdChcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJsYW1iZGFcIn08L19jb21wb25lbnRzLnNwYW4+e1wiOiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIlxcXCIuXFxcIlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIpXFxuICAgIHBhZGRpbmcgPSAoXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIwXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiwpICogKGRpbWVuc2lvbnMgLSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKVxcbiAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJmb3JcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIHgsIGxpbmUgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJlbnVtZXJhdGVcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKGluaXRpYWwuc3BsaXRsaW5lcygpKTpcXG4gICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImZvclwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgeSwgc3RhdGUgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJlbnVtZXJhdGVcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKGxpbmUpOlxcbiAgICAgICAgICAgIGN1YmUgPSAoeCwgeSkgKyBwYWRkaW5nXFxuICAgICAgICAgICAgc3BhY2VbY3ViZV0gPSBzdGF0ZVxcblxcbiAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJmb3JcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIF8gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJyYW5nZVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCI2XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIik6XFxuICAgICAgICBjdWJlX3RvX2FjdGl2ZV9jb3VudCA9IGRlZmF1bHRkaWN0KFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJpbnRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKVxcblxcbiAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZm9yXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBjdWJlIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBzcGFjZTpcXG4gICAgICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJpZlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgc3BhY2VbY3ViZV0gPT0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwiLlxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiOlxcbiAgICAgICAgICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJjb250aW51ZVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJmb3JcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIG4gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIG5laWdoYm9yaG9vZCgqY3ViZSk6XFxuICAgICAgICAgICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtY29tbWVudFwiPntcIiMgbmVpZ2hib3Job29kIGNvbnRhaW5zIGN1YmUgYW5kIGFsbCBpdHMgbmVpZ2hib3JzLlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgICAgICAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1jb21tZW50XCI+e1wiIyBgY3ViZV90b19hY3RpdmVfY291bnRbbl0gKz0gbiAhPSBjdWJlYCBlbnN1cmVzXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICAgICAgICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWNvbW1lbnRcIj57XCIjIGFjdGl2ZSBjdWJlcyB3aXRob3V0IGFjdGl2ZSBuZWlnaGJvcnMgYXJlIGNvdW50ZWRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgICAgICAgICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtY29tbWVudFwiPntcIiMgYW5kIHByb3BlciBkZWFjdGl2YXRlZCBieSB1bmRlcnBvcHVsYXRpb24gaW4gdGhlXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICAgICAgICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWNvbW1lbnRcIj57XCIjIG5leHQgZm9yLWxvb3AuXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICAgICAgICAgICAgICBjdWJlX3RvX2FjdGl2ZV9jb3VudFtuXSArPSBuICE9IGN1YmUgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiYW5kXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBzcGFjZVtjdWJlXSA9PSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIlxcXCIjXFxcIlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImZvclwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgbiwgY291bnQgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIGN1YmVfdG9fYWN0aXZlX2NvdW50Lml0ZW1zKCk6XFxuICAgICAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIHNwYWNlW25dID09IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtc3RyaW5nXCI+e1wiXFxcIiNcXFwiXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIjpcXG4gICAgICAgICAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIGNvdW50IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBbXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIyXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiwgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIzXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIl06XFxuICAgICAgICAgICAgICAgICAgICBzcGFjZVtuXSA9IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtc3RyaW5nXCI+e1wiXFxcIiNcXFwiXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICAgICAgICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJlbHNlXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIjpcXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlW25dID0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwiLlxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgICAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZWxpZlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgc3BhY2Vbbl0gPT0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwiLlxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiOlxcbiAgICAgICAgICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJpZlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgY291bnQgPT0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIzXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIjpcXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlW25dID0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwiI1xcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuXFxuICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcInJldHVyblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcInN1bVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoc3RhdGUgPT0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwiI1xcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImZvclwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgc3RhdGUgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIHNwYWNlLnZhbHVlcygpKVxcblxcblwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJwcmludFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwiLS0tIHBhcnQgMSAtLS1cXFwiXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIilcXG5cIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wicHJpbnRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKGZ1bGxfY3ljbGUoaW5pdGlhbCwgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIzXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIikpXFxuXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcInByaW50XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIlxcXCItLS0gcGFydCAyIC0tLVxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKVxcblwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJwcmludFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoZnVsbF9jeWNsZShpbml0aWFsLCBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKSlcXG5cIn08L19jb21wb25lbnRzLmNvZGU+PC9fY29tcG9uZW50cy5wcmU+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhlcmUgYXJlIGEgY291cGxlIG9mIHRyaWNrcyB0byBkZWNyZWFzZSB0aGUgbGluZSBjb3VudCBhcm91bmQgdGhlIGNoZWNrIGlmIGEgY3ViZSBiZWNvbWVzIGFjdGl2ZSBvciBpbmFjdGl2ZSwgYnV0IGl0IHdvdWxkbid0IGFkZCBtdWNoIGluIHRlcm1zIG9mIHBlcmZvcm1hbmNlLiBJJ20gcHJldHR5IGhhcHB5IHdpdGggdGhpcyBzb2x1dGlvbiFcIn08L19jb21wb25lbnRzLnA+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJhZHZlbnQtb2YtY29kZS5tZFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm1ldGFcIjoge1xuICAgIFwidGl0bGVcIjogXCJUaGUgZHluYW1pYyBuYXR1cmUgb2YgUHl0aG9uJ3MgTVJPXCIsXG4gICAgXCJkYXRlXCI6IFwiMjAyMC0xMC0wMlwiLFxuICAgIFwiY292ZXJJbWFnZVwiOiBcImR5bmFtaWMtbmF0dXJlLW9mLXB5dGhvbi5qcGdcIixcbiAgICBcImNhdGVnb3JpZXNcIjogW1wicHl0aG9uXCJdLFxuICAgIFwiY3JlZGl0c1wiOiBcIlBob3RvIGJ5IDxhIGhyZWY9XFxcImh0dHBzOi8vdW5zcGxhc2guY29tL0BzbWlnaWVsc2tpXFxcIj5BZGFtIFx1MDE1QW1pZ2llbHNraTwvYT5cIlxuICB9XG59O1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaDE6IFwiaDFcIixcbiAgICBhOiBcImFcIixcbiAgICBzcGFuOiBcInNwYW5cIixcbiAgICBwOiBcInBcIixcbiAgICBwcmU6IFwicHJlXCIsXG4gICAgY29kZTogXCJjb2RlXCIsXG4gICAgc3Ryb25nOiBcInN0cm9uZ1wiLFxuICAgIGVtOiBcImVtXCIsXG4gICAgdWw6IFwidWxcIixcbiAgICBsaTogXCJsaVwiXG4gIH0sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PF9jb21wb25lbnRzLmgxIGlkPVwidGhlLWR5bmFtaWMtbmF0dXJlLW9mLXB5dGhvbnMtbXJvXCI+PF9jb21wb25lbnRzLmEgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdGFiSW5kZXg9XCItMVwiIGhyZWY9XCIjdGhlLWR5bmFtaWMtbmF0dXJlLW9mLXB5dGhvbnMtbXJvXCI+PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLWxpbmtcIiAvPjwvX2NvbXBvbmVudHMuYT57XCJUaGUgZHluYW1pYyBuYXR1cmUgb2YgUHl0aG9uJ3MgTVJPXCJ9PC9fY29tcG9uZW50cy5oMT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJJbWFnaW5lIHRoZSBmb2xsb3dpbmcgY2xhc3MgcmVsYXRpb25zaGlwczpcIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnByZT48X2NvbXBvbmVudHMuY29kZSBjbGFzc05hbWU9XCJobGpzIGxhbmd1YWdlLXB5dGhvblwiPjxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImNsYXNzXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXRpdGxlIGhsanMtY2xhc3NcIj57XCJCYXNlXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIjpcXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZGVmXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXRpdGxlIGhsanMtZnVuY3Rpb25cIj57XCJjaGFpblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1wYXJhbXNcIj57XCJzZWxmXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIik6XFxuICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJyZXR1cm5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtc3RyaW5nXCI+e1wiJ0Jhc2UnXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcblxcblxcblwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImNsYXNzXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXRpdGxlIGhsanMtY2xhc3NcIj57XCJBXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXRpdGxlIGhsanMtY2xhc3MgaGxqcy1pbmhlcml0ZWRcIj57XCJCYXNlXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIik6XFxuICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcInBhc3NcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuXFxuXFxuXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiY2xhc3NcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtdGl0bGUgaGxqcy1jbGFzc1wiPntcIkJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtdGl0bGUgaGxqcy1jbGFzcyBobGpzLWluaGVyaXRlZFwiPntcIkJhc2VcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKTpcXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZGVmXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXRpdGxlIGhsanMtZnVuY3Rpb25cIj57XCJjaGFpblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1wYXJhbXNcIj57XCJzZWxmXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIik6XFxuICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJyZXR1cm5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtc3RyaW5nXCI+e1wiZlxcXCJcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN1YnN0XCI+e1wie1wifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJzdXBlclwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoKS5jaGFpbigpfVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgPC0gQlxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuXFxuXFxuXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiY2xhc3NcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtdGl0bGUgaGxqcy1jbGFzc1wiPntcIkNcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKEEsIEIpOlxcbiAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJwYXNzXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcblxcblxcblwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImNsYXNzXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXRpdGxlIGhsanMtY2xhc3NcIj57XCJEXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXRpdGxlIGhsanMtY2xhc3MgaGxqcy1pbmhlcml0ZWRcIj57XCJDXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIik6XFxuICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImRlZlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy10aXRsZSBobGpzLWZ1bmN0aW9uXCI+e1wiY2hhaW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiKFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtcGFyYW1zXCI+e1wic2VsZlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIpOlxcbiAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wicmV0dXJuXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcImZcXFwiXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdWJzdFwiPntcIntcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wic3VwZXJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKCkuY2hhaW4oKX1cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIDwtIERcXFwiXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcblxcblwifTwvX2NvbXBvbmVudHMuY29kZT48L19jb21wb25lbnRzLnByZT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJDYWxsaW5nIFwifTxfY29tcG9uZW50cy5jb2RlPntcImNoYWluXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBpbiBhbiBpbnN0YW5jZSBvZiBcIn08X2NvbXBvbmVudHMuY29kZT57XCJEXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiB3aWxsIHJlc3VsdCBpbiB0aGUgZm9sbG93aW5nIHN0cmluZzpcIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnByZT48X2NvbXBvbmVudHMuY29kZSBjbGFzc05hbWU9XCJobGpzIGxhbmd1YWdlLXB5dGhvblwiPntcIkluIFtcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjFcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXTogZC5jaGFpbigpXFxuT3V0W1wifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJdOiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIidCYXNlIDwtIEIgPC0gRCdcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5jb2RlPjwvX2NvbXBvbmVudHMucHJlPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIldoYXQgd291bGQgaGFwcGVuIGlmIHRoZSBmb2xsb3dpbmcgY29kZSBydW5zP1wifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucHJlPjxfY29tcG9uZW50cy5jb2RlIGNsYXNzTmFtZT1cImhsanMgbGFuZ3VhZ2UtcHl0aG9uXCI+e1wiSW4gW1wifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJdOiBBLmNoYWluID0gQS5jaGFpblxcblwifTwvX2NvbXBvbmVudHMuY29kZT48L19jb21wb25lbnRzLnByZT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJJbm9mZmVuc2l2ZSwgcmlnaHQ/IE5vdyB0cnkgY2FsbGluZyBcIn08X2NvbXBvbmVudHMuY29kZT57XCJkLmNoYWluKClcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGFnYWluLi4uXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wcmU+PF9jb21wb25lbnRzLmNvZGUgY2xhc3NOYW1lPVwiaGxqcyBsYW5ndWFnZS1weXRob25cIj57XCJJbiBbXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIzXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIl06IGQuY2hhaW4oKVxcbk91dFtcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjNcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXTogXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCInQmFzZSA8LSBEJ1wifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG5cIn08L19jb21wb25lbnRzLmNvZGU+PC9fY29tcG9uZW50cy5wcmU+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiTGV0J3Mgb2JzZXJ2ZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJEXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIidzIFwifTxfY29tcG9uZW50cy5zdHJvbmc+e1wiTVwifTwvX2NvbXBvbmVudHMuc3Ryb25nPntcImV0aG9kIFwifTxfY29tcG9uZW50cy5zdHJvbmc+e1wiUlwifTwvX2NvbXBvbmVudHMuc3Ryb25nPntcImVzb2x1dGlvbiBcIn08X2NvbXBvbmVudHMuc3Ryb25nPntcIk9cIn08L19jb21wb25lbnRzLnN0cm9uZz57XCJyZGVyIChcIn08X2NvbXBvbmVudHMuZW0+e1wiTVJPXCJ9PC9fY29tcG9uZW50cy5lbT57XCIsIHRoZSBvcmRlciBvZiBjbGFzc2VzIHdoZXJlIFB5dGhvbiB3aWxsIGxvb2sgZm9yIHdoZW4gcmVzb2x2aW5nIG1ldGhvZHMgYW5kIGF0dHJpYnV0ZXMpOlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucHJlPjxfY29tcG9uZW50cy5jb2RlIGNsYXNzTmFtZT1cImhsanMgbGFuZ3VhZ2UtcHl0aG9uXCI+e1wiSW4gW1wifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiNFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJdOiBELm1ybygpXFxuT3V0W1wifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiNFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJdOiBbX19tYWluX18uRCwgX19tYWluX18uQywgX19tYWluX18uQSwgX19tYWluX18uQiwgX19tYWluX18uQmFzZSwgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcIm9iamVjdFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJdXFxuXCJ9PC9fY29tcG9uZW50cy5jb2RlPjwvX2NvbXBvbmVudHMucHJlPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIldoZW4gY2FsbGluZyBcIn08X2NvbXBvbmVudHMuY29kZT57XCJELmNoYWluKClcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLCBQeXRob24gd2lsbCBsb29rIGluIHRoaXMgbGlzdCBhbmQgcmV0dXJuIHRoZSBmaXJzdCBpbnN0YW5jZSB3aGVyZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJjaGFpblwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgaXMgcHJlc2VudCBhcyBhIFwifTxfY29tcG9uZW50cy5lbT57XCJtZW1iZXJcIn08L19jb21wb25lbnRzLmVtPntcIiBvZiB0aGUgY2xhc3MuIEluIG91ciBleGFtcGxlLCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJEXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBpbXBsZW1lbnRzIFwifTxfY29tcG9uZW50cy5jb2RlPntcImNoYWluXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIi5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+PF9jb21wb25lbnRzLmNvZGU+e1wiRC5jaGFpblwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgaW4gdHVybiB3aWxsIGNhbGwgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wic3VwZXIoKS5jaGFpbigpXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIi4gV2hhdCB3aWxsIFB5dGhvbiBkbz8gaXQgd2lsbCBncmFiIHRoZSBuZXh0IGNsYXNzIGZyb20gXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiRFwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgYW5kIHRyeSB0byBmaW5kIFwifTxfY29tcG9uZW50cy5jb2RlPntcImNoYWluXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBpbiB0aGlzIG5ldyBsaXN0LiBcIn08X2NvbXBvbmVudHMuY29kZT57XCJDXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBkb2Vzbid0IGltcGxlbWVudCBpdDsgbmVpdGhlciBkb2VzIFwifTxfY29tcG9uZW50cy5jb2RlPntcIkFcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLiBcIn08X2NvbXBvbmVudHMuY29kZT57XCJCXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBkb2VzISBUaGUgcmVzdWx0IHdpbGwgYmUgd2hhdGV2ZXIgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiQi5jaGFpblwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgcmV0dXJucywgcGx1cyB0aGUgYml0IFwifTxfY29tcG9uZW50cy5jb2RlPntcIlxcXCIgPC0gRFxcXCJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD48X2NvbXBvbmVudHMuY29kZT57XCJCLmNoYWluXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBkb2VzIHRoZSBzdXBlcigpIGNhbGwgYWdhaW4uLi4gd2Uga25vdyB3aGF0IHdlJ3JlIGRvaW5nLiBCYXNlIGltcGxlbWVudHMgaXQgYW5kIHRoZXJlIGFyZSBubyBtb3JlIFwifTxfY29tcG9uZW50cy5jb2RlPntcInN1cGVyKClcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGNhbGxzLiBTbyB3ZSBoYXZlIFwifTxfY29tcG9uZW50cy5jb2RlPntcIkJhc2UuY2hhaW5cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHJldHVybmluZyBcIn08X2NvbXBvbmVudHMuY29kZT57XCJcXFwiQmFzZVxcXCJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJCLmNoYWluKClcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHJldHVybmluZyBcIn08X2NvbXBvbmVudHMuY29kZT57XCJcXFwiQmFzZSA8LSBCXFxcIlwifTwvX2NvbXBvbmVudHMuY29kZT57XCIsIGFuZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJELmNoYWluKClcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGZpbmFsbHkgcmV0dXJuaW5nIFwifTxfY29tcG9uZW50cy5jb2RlPntcIlxcXCJCYXNlIDwtIEIgPC0gRFxcXCJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJTbyB3aGF0XHUyMDE5cyBnb2luZyBvbiBhZnRlciB3ZSBkbyBcIn08X2NvbXBvbmVudHMuY29kZT57XCJBLmNoYWluID0gQS5jaGFpblwifTwvX2NvbXBvbmVudHMuY29kZT57XCI/IFdoeSBpcyBcIn08X2NvbXBvbmVudHMuY29kZT57XCJCLmNoYWluKClcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGlnbm9yZWQ/IExldFx1MjAxOXMgZGlzc2VjdCB3aGF0XHUyMDE5cyBnb2luZyBvbiB3aXRoIGl0LiBXaGF0XHUyMDE5cyBcIn08X2NvbXBvbmVudHMuY29kZT57XCJBXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIidzIE1STz9cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnByZT48X2NvbXBvbmVudHMuY29kZSBjbGFzc05hbWU9XCJobGpzIGxhbmd1YWdlLXB5dGhvblwiPntcIkluIFtcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjVcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXTogQS5tcm8oKVxcbk91dFtcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjVcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXTogW19fbWFpbl9fLkEsIF9fbWFpbl9fLkJhc2UsIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJvYmplY3RcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXVxcblwifTwvX2NvbXBvbmVudHMuY29kZT48L19jb21wb25lbnRzLnByZT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJQcmV0dHkgc2ltcGxlLiBXaGF0IGhhcHBlbnMgd2hlbiB5b3UgZG8gXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiQS5jaGFpblwifTwvX2NvbXBvbmVudHMuY29kZT57XCI/IFB5dGhvbiB3aWxsIGxvb2sgYXQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiQVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIsIHdoaWNoIGRvZXMgbm90IGltcGxlbWVudCBpdC4gQnV0IFwifTxfY29tcG9uZW50cy5jb2RlPntcIkJhc2VcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGltcGxlbWVudHMgaXQsIHNvIHRoYXQncyB0aGUgaW1wbGVtZW50YXRpb24gaXQncyBnb25uYSB1c2UuIEJ1dCB3aGF0J3MgZ29pbmcgb24gd2hlbiB3ZSBkbyB0aGUgYXNzaWdubWVudD9cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiUHl0aG9uIGV2YWx1YXRlcyB0aGlzIGFzc2lnbm1lbnQgcmlnaHQgdG8gbGVmdDogXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiQS5jaGFpbiA9IEEuY2hhaW5cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHRoZW4gbWVhbnMgXFxcImZpbmQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiY2hhaW5cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGZvciBBXFxcIiwgd2hpY2ggcmV0dXJucyBcIn08X2NvbXBvbmVudHMuY29kZT57XCJCYXNlLmNoYWluXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIi4gVGhlbiwgXCJ9PF9jb21wb25lbnRzLmVtPntcInB5dGhvbiB3aWxsIGVmZmVjdGl2ZWx5IGNyZWF0ZSBhIG5ldyBtZW1iZXIgaW4gdGhlIGNsYXNzIEEgbmFtZWQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiY2hhaW5cIn08L19jb21wb25lbnRzLmNvZGU+PC9fY29tcG9uZW50cy5lbT57XCIhXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkxldCdzIGdvIGJhY2sgdG8gRCdzIE1STzpcIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnByZT48X2NvbXBvbmVudHMuY29kZSBjbGFzc05hbWU9XCJobGpzIGxhbmd1YWdlLXB5dGhvblwiPntcIltfX21haW5fXy5ELCBfX21haW5fXy5DLCBfX21haW5fXy5BLCBfX21haW5fXy5CLCBfX21haW5fXy5CYXNlLCBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wib2JqZWN0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIl1cXG5cIn08L19jb21wb25lbnRzLmNvZGU+PC9fY29tcG9uZW50cy5wcmU+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhlIHdheSB0aGVzZSBjbGFzc2VzIHdlcmUgY29uc3RydWN0ZWQsIFwifTxfY29tcG9uZW50cy5jb2RlPntcIkFcIn08L19jb21wb25lbnRzLmNvZGU+e1wiJ3MgbWVtYmVycyB3aWxsIGJlIHRlc3RlZCBiZWZvcmUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiQlwifTwvX2NvbXBvbmVudHMuY29kZT57XCIhIFdoYXQgZG9lcyBpdCBtZWFuIGZvciB0aGUgcmVzb2x1dGlvbiBvcmRlcj8gV2hlbiBcIn08X2NvbXBvbmVudHMuY29kZT57XCJELmNoYWluKClcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGNhbGxzIFwifTxfY29tcG9uZW50cy5jb2RlPntcInN1cGVyKCkuY2hhaW4oKVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIsIGl0IHdpbGwgbm93IGdyYWIgdGhlIG5ld2x5IGFkZGVkIG1lbWJlciBvZiBcIn08X2NvbXBvbmVudHMuY29kZT57XCJBXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBhbmQgY2FsbCBpdC4gQW5kIGZyb20gXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiQVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIncyBwb2ludCBvZiB2aWV3LCB0aGUgaW1wbGVtZW50YXRpb24gaXMgdGhlIHNhbWUgYXMgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiQmFzZS5jaGFpblwifTwvX2NvbXBvbmVudHMuY29kZT57XCIsIHdoaWNoIGRvZXNuJ3QgaGF2ZSBhbnkgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wic3VwZXIoKVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgY2FsbCEgXHVEODNFXHVERDJGXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlRoaXMgaGFwcGVucyBkdWUgdG8gdGhlIGR5bmFtaWMgbmF0dXJlIG9mIFB5dGhvbi4gXCJ9PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vZG9jcy5weXRob24ub3JnLzMvbGlicmFyeS9mdW5jdGlvbnMuaHRtbCNzdXBlclwiPntcIlRoZSBlbnRyeSBmb3IgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wic3VwZXIoKVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgaW4gUHl0aG9uJ3MgZG9jdW1lbnRhdGlvblwifTwvX2NvbXBvbmVudHMuYT57XCIgaGFzIGFuIGFtYXppbmcgZGVzY3JpcHRpb24gb2YgdGhpcyBpc3N1ZSwgYW5kIGhvdyBpdCdzIGEgdW5pcXVlIHVzZSBjYXNlIGR1ZSB0byBQeXRob24ncyBuYXR1cmUuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlB5dGhvbidzIG11bHRpcGxlIGluaGVyaXRhbmNlIGZlYXR1cmUsIHBsdXMgaXRzIGR5bmFtaWMgbmF0dXJlLCBtYWtlIGl0IHNvIHRoZSBhY3R1YWwgbWV0aG9kIHJlc29sdXRpb24gb3JkZXIgYW5kIGNsYXNzIGhpZXJhcmNoeSBhcmUgb25seSBrbm93biBhdCBydW50aW1lIGFuZCBjYW4gY2hhbmdlIGF0IGFueSB0aW1lIGR1cmluZyB0aGUgYXBwbGljYXRpb24gbGlmZXRpbWUuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkNsYXNzZXMgZGVzaWducyBNVVNUIGJlIFwifTxfY29tcG9uZW50cy5lbT57XCJjb2xsYWJvcmF0aXZlXCJ9PC9fY29tcG9uZW50cy5lbT57XCIuIFRoZSBleGFtcGxlIGFib3ZlIGhhcyBtYW55IGlzc3VlcywgXCJ9PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vcmhldHRpbmdlci53b3JkcHJlc3MuY29tLzIwMTEvMDUvMjYvc3VwZXItY29uc2lkZXJlZC1zdXBlci9cIj57XCJidXQgdGhlcmUgaXMgYSBzaW1wbGUgc2V0IG9mIHJ1bGVzIHRoYXQgaGVscCBkZXNpZ25pbmcgY29sbGFib3JhdGl2ZSBjbGFzc2VzXCJ9PC9fY29tcG9uZW50cy5hPntcIjpcIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJtZXRob2RzIGNhbGxlZCBieSBzdXBlcigpIG5lZWQgdG8gZXhpc3RcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJtZXRob2RzIGNhbGxlZCBhbmQgdGhlaXIgaW1wbGVtZW50YXRpb25zIG5lZWQgdG8gaGF2ZSBhIG1hdGNoaW5nIGFyZ3VtZW50IHNpZ25hdHVyZVwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcImV2ZXJ5IG9jY3VycmVuY2Ugb2YgdGhlIG1ldGhvZCBuZWVkcyB0byB1c2Ugc3VwZXIoKVwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJUaGUgcG9pbnQgaGVyZSBpcyB0aGF0IHRoZSBhY3R1YWwgaW1wbGVtZW50YXRpb24gb2YgdGhlIG1ldGhvZCBjYWxsZWQgYnkgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wic3VwZXIoKVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgaXMgb25seSBrbm93biBhdCBydW50aW1lIGFuZCBjYW5ub3QgYmUgZWFzaWx5IGRlZmluZWQgc3RhdGljYWxseS5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiRGVzaWduIHlvdXIgY2xhc3NlcyBjb2xsYWJvcmF0aXZlbHksIGFuZCB3YXRjaCBmb3IgbXV0YXRpb25zIGluIGNsYXNzZXMgaW4geW91ciBydW50aW1lLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJXYW50IHRvIGtub3cgbW9yZSBhYm91dCBQeXRob24ncyBNUk8/IFRoaXMgYW1hemluZyBhcnRpY2xlIGluIHRoZSBQeXRob24gZG9jcyBpbnRyb2R1Y2VzIGhvdyB0aGUgYWxnb3JpdGhtIHdvcmtzIGFmdGVyIHZlcnNpb24gMi4zLiBcIn08X2NvbXBvbmVudHMuYSBocmVmPVwiaHR0cHM6Ly93d3cucHl0aG9uLm9yZy9kb3dubG9hZC9yZWxlYXNlcy8yLjMvbXJvL1wiPntcIkNoZWNrIGl0IG91dFwifTwvX2NvbXBvbmVudHMuYT57XCIhXCJ9PC9fY29tcG9uZW50cy5wPjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwiZHluYW1pYy1uYXR1cmUtcHl0aG9uLm1kXCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibWV0YVwiOiB7XG4gICAgXCJ0aXRsZVwiOiBcIlZpc3VhbGl6aW5nIFJlYWN0IGhvb2tzJyBsYXp5IGluaXRpYWwgc3RhdGVcIixcbiAgICBcImRhdGVcIjogXCIyMDIwLTExLTEzXCIsXG4gICAgXCJjYXRlZ29yaWVzXCI6IFtcInJlYWN0XCIsIFwiamF2YXNjcmlwdFwiXSxcbiAgICBcImNyZWRpdHNcIjogXCI8c3Bhbj5QaG90byBieSA8YSBocmVmPVxcXCJodHRwczovL3Vuc3BsYXNoLmNvbS9AcHJvb3plbmJ1cmdcXFwiPlByZXNsZXkgUm9vemVuYnVyZzwvYT4gb24gPGEgaHJlZj1cXFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL2drbGZ2NWF2cjRjXFxcIj5VbnNwbGFzaDwvYT48L3NwYW4+XCIsXG4gICAgXCJjb3ZlckltYWdlXCI6IFwidmlzdWFsaXppbmctbGF6eS1pbml0aWFsLXN0YXRlLmpwZ1wiXG4gIH1cbn07XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBoMTogXCJoMVwiLFxuICAgIGE6IFwiYVwiLFxuICAgIHNwYW46IFwic3BhblwiLFxuICAgIHA6IFwicFwiLFxuICAgIHByZTogXCJwcmVcIixcbiAgICBjb2RlOiBcImNvZGVcIixcbiAgICBlbTogXCJlbVwiLFxuICAgIHN0cm9uZzogXCJzdHJvbmdcIlxuICB9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjxfY29tcG9uZW50cy5oMSBpZD1cInZpc3VhbGl6aW5nLXJlYWN0LWhvb2tzLWxhenktaW5pdGlhbC1zdGF0ZVwiPjxfY29tcG9uZW50cy5hIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRhYkluZGV4PVwiLTFcIiBocmVmPVwiI3Zpc3VhbGl6aW5nLXJlYWN0LWhvb2tzLWxhenktaW5pdGlhbC1zdGF0ZVwiPjxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1saW5rXCIgLz48L19jb21wb25lbnRzLmE+e1wiVmlzdWFsaXppbmcgUmVhY3QgaG9va3MnIGxhenkgaW5pdGlhbCBzdGF0ZVwifTwvX2NvbXBvbmVudHMuaDE+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiTW9zdCBleGFtcGxlcyBvZiBSZWFjdCBob29rJ3MgXCJ9PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9ob29rcy1yZWZlcmVuY2UuaHRtbCNsYXp5LWluaXRpYWwtc3RhdGVcIj57XCJsYXp5IGluaXRpYWwgc3RhdGVcIn08L19jb21wb25lbnRzLmE+e1wiIHVzZXMgaW5saW5lIGFycm93IGZ1bmN0aW9ucyB0byBzaG93Y2FzZSB0aGUgdXNhZ2U6XCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wcmU+PF9jb21wb25lbnRzLmNvZGUgY2xhc3NOYW1lPVwiaGxqcyBsYW5ndWFnZS1qc1wiPjxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImZ1bmN0aW9uXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXRpdGxlIGhsanMtZnVuY3Rpb25cIj57XCJBcHBcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtcGFyYW1zXCIgLz57XCIpIHtcXG4gIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImNvbnN0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBbc3RhdGUsIHNldFN0YXRlXSA9IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtdGl0bGUgaGxqcy1jbGFzc1wiPntcIlJlYWN0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIi5cIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXRpdGxlIGhsanMtZnVuY3Rpb25cIj57XCJ1c2VTdGF0ZVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1mdW5jdGlvblwiPntcIigpID0+XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXRpdGxlIGhsanMtZnVuY3Rpb25cIj57XCJleHBlbnNpdmVDb21wdXRhdGlvblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoKSk7XFxuICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWNvbW1lbnRcIj57XCIvLyAuLi5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxufVxcblwifTwvX2NvbXBvbmVudHMuY29kZT48L19jb21wb25lbnRzLnByZT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJQYWlyZWQgd2l0aCB0aGUgaWRlYSB0aGF0IHdoYXRldmVyIHlvdSBwYXNzIHRvIFwifTxfY29tcG9uZW50cy5jb2RlPntcIlJlYWN0LnVzZVN0YXRlXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBpcyB0aGUgaW5pdGlhbCB2YWx1ZSBvZiB0aGUgc3RhdGUsIGl0IGNhbiBiZSBoYXJkIHRvIGdyYXNwIHRoZSBkaWZmZXJlbmNlIGZyb20gdGhlIGV4YW1wbGUgYmVsb3c6XCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wcmU+PF9jb21wb25lbnRzLmNvZGUgY2xhc3NOYW1lPVwiaGxqcyBsYW5ndWFnZS1qc1wiPjxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImZ1bmN0aW9uXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXRpdGxlIGhsanMtZnVuY3Rpb25cIj57XCJBcHBcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtcGFyYW1zXCIgLz57XCIpIHtcXG4gIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImNvbnN0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBbc3RhdGUsIHNldFN0YXRlXSA9IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtdGl0bGUgaGxqcy1jbGFzc1wiPntcIlJlYWN0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIi5cIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXRpdGxlIGhsanMtZnVuY3Rpb25cIj57XCJ1c2VTdGF0ZVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy10aXRsZSBobGpzLWZ1bmN0aW9uXCI+e1wiZXhwZW5zaXZlQ29tcHV0YXRpb25cIn08L19jb21wb25lbnRzLnNwYW4+e1wiKCkpO1xcbiAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1jb21tZW50XCI+e1wiLy8gLi4uXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbn1cXG5cIn08L19jb21wb25lbnRzLmNvZGU+PC9fY29tcG9uZW50cy5wcmU+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiRm9yIG1lLCBpdCBoZWxwcyB0byB2aXN1YWxpemUgdGhlIGRpZmZlcmVuY2UgaWYgeW91IGFzc2lnbiB3aGF0XHUyMDE5cyBpbnNpZGUgdGhlIHBhcmVudGhlc2VzIHRvIGEgY29uc3RhbnQuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wcmU+PF9jb21wb25lbnRzLmNvZGUgY2xhc3NOYW1lPVwiaGxqcyBsYW5ndWFnZS1qc1wiPjxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImZ1bmN0aW9uXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXRpdGxlIGhsanMtZnVuY3Rpb25cIj57XCJBcHBcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtcGFyYW1zXCIgLz57XCIpIHtcXG4gIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImNvbnN0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBpbml0aWFsU3RhdGUgPSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjBcIn08L19jb21wb25lbnRzLnNwYW4+e1wiO1xcbiAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiY29uc3RcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFtzdGF0ZSwgc2V0U3RhdGVdID0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy10aXRsZSBobGpzLWNsYXNzXCI+e1wiUmVhY3RcIn08L19jb21wb25lbnRzLnNwYW4+e1wiLlwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtdGl0bGUgaGxqcy1mdW5jdGlvblwiPntcInVzZVN0YXRlXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihpbml0aWFsU3RhdGUpO1xcbiAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1jb21tZW50XCI+e1wiLy8gLi4uXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbn1cXG5cIn08L19jb21wb25lbnRzLmNvZGU+PC9fY29tcG9uZW50cy5wcmU+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiRXZlcnl0aW1lIFwifTxfY29tcG9uZW50cy5jb2RlPntcIkFwcFwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgcmUtcmVuZGVycywgdGhlIGZ1bmN0aW9uIFwifTxfY29tcG9uZW50cy5jb2RlPntcIkFwcFwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgd2lsbCByZS1ydW4gY29tcGxldGVseS4gVGhpcyBtZWFucyBcIn08X2NvbXBvbmVudHMuY29kZT57XCIwXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBpcyBzZXQgdG8gXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiaW5pdGlhbFN0YXRlXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBpbiBldmVyeSByZW5kZXIuIE5vdyBsZXQncyBkbyB0aGUgc2FtZSB3aXRoIHRoZSBleHBlbnNpdmUgY29tcHV0YXRpb24gZXhhbXBsZTpcIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnByZT48X2NvbXBvbmVudHMuY29kZSBjbGFzc05hbWU9XCJobGpzIGxhbmd1YWdlLWpzXCI+PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZnVuY3Rpb25cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtdGl0bGUgaGxqcy1mdW5jdGlvblwiPntcIkFwcFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1wYXJhbXNcIiAvPntcIikge1xcbiAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiY29uc3RcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIGluaXRpYWxTdGF0ZSA9IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtdGl0bGUgaGxqcy1mdW5jdGlvblwiPntcImV4cGVuc2l2ZUNvbXB1dGF0aW9uXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIigpO1xcbiAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiY29uc3RcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFtzdGF0ZSwgc2V0U3RhdGVdID0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy10aXRsZSBobGpzLWNsYXNzXCI+e1wiUmVhY3RcIn08L19jb21wb25lbnRzLnNwYW4+e1wiLlwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtdGl0bGUgaGxqcy1mdW5jdGlvblwiPntcInVzZVN0YXRlXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihpbml0aWFsU3RhdGUpO1xcbiAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1jb21tZW50XCI+e1wiLy8gLi4uXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbn1cXG5cIn08L19jb21wb25lbnRzLmNvZGU+PC9fY29tcG9uZW50cy5wcmU+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiSXQncyBwcmV0dHkgY2xlYXIgbm93IHRoYXQgdGhlIGV4cGVuc2l2ZSBmdW5jdGlvbiBcIn08X2NvbXBvbmVudHMuZW0+e1wiaXMgY2FsbGVkIGV2ZXJ5IHRpbWUgdGhlIGNvbXBvbmVudCByZW5kZXJzXCJ9PC9fY29tcG9uZW50cy5lbT57XCIuIFwifTxfY29tcG9uZW50cy5jb2RlPntcIlJlYWN0LnVzZVN0YXRlXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBpcyBqdXN0IFwifTxfY29tcG9uZW50cy5zdHJvbmc+e1wiaWdub3JpbmdcIn08L19jb21wb25lbnRzLnN0cm9uZz57XCIgaXRzIHJlc3VsdCBpbiBzdWJzZXF1ZW50IHJlbmRlcnMuIEFuZCB0aGF0J3Mgd2hhdCB5b3Ugd2FudCB0byBhdm9pZCB3aGVuIHBhc3NpbmcgYSBmdW5jdGlvbiB0byB0aGUgaG9vay5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+PF9jb21wb25lbnRzLmNvZGU+e1wiUmVhY3QudXNlU3RhdGVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGltcGxlbWVudGF0aW9uIGRldGVjdHMgaWYgeW91J3JlIHBhc3NpbmcgYSBmdW5jdGlvbiBhbmQgbWFrZXMgc3VyZSB0byBjYWxsIGl0IG9uY2UgZm9yIHRoZSBjb21wb25lbnQncyBsaWZldGltZS5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhlIHRyYWRlb2ZmIG5vdyBpcyB0aGF0IHlvdSdyZSBjcmVhdGluZyBhIG5ldyBmdW5jdGlvbiBmb3IgZXZlcnkgcmVuZGVyLiBUaGF0J3MgYWNjZXB0YWJsZSBpZiB0aGUgY29tcHV0YXRpb24gdGFrZXMgbG9uZ2VyIG9yIGlzIG1vcmUgY29tcGxleCB0aGFuIGluc3RhbnRpYXRpbmcgYW4gaW5saW5lIGZ1bmN0aW9uLiBJZiB0aGF0J3Mgbm90IHRoZSBjYXNlIChmb3IgZXhhbXBsZSwgd2hlbiBzZXR0aW5nIGEgY29uc3RhbnQgbGlrZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCIwXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBpbiB0aGUgZmlyc3QgZXhhbXBsZSksIGdvIHdpdGggcGFzc2luZyB0aGUgdmFsdWUgZGlyZWN0bHkgdG8gXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiUmVhY3QudXNlU3RhdGVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLlwifTwvX2NvbXBvbmVudHMucD48Lz47XG4gIHJldHVybiBNRFhMYXlvdXQgPyA8TURYTGF5b3V0IHsuLi5wcm9wc30+e19jb250ZW50fTwvTURYTGF5b3V0PiA6IF9jb250ZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcblxuXG5leHBvcnQgY29uc3QgZmlsZW5hbWUgPSBcInZpc3VhbGl6aW5nLXVzZS1zdGF0ZS5tZFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm1ldGFcIjoge1xuICAgIFwidGl0bGVcIjogXCJBZHZlbnQgb2YgQ29kZSAyMDIxXCIsXG4gICAgXCJkYXRlXCI6IFwiMjAyMS0xMi0wMVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJTb2x1dGlvbnMgKyBnZW5lcmFsIGNvbW1lbnRzIGZvciBBZHZlbnQgb2YgQ29kZSAyMDIxXCJcbiAgfVxufTtcbmZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCBfY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGgxOiBcImgxXCIsXG4gICAgYTogXCJhXCIsXG4gICAgc3BhbjogXCJzcGFuXCIsXG4gICAgcHJlOiBcInByZVwiLFxuICAgIGNvZGU6IFwiY29kZVwiLFxuICAgIHA6IFwicFwiLFxuICAgIGgzOiBcImgzXCIsXG4gICAgdWw6IFwidWxcIixcbiAgICBsaTogXCJsaVwiLFxuICAgIGgyOiBcImgyXCIsXG4gICAgc3Ryb25nOiBcInN0cm9uZ1wiXG4gIH0sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PF9jb21wb25lbnRzLmgxIGlkPVwiYWR2ZW50LW9mLWNvZGUtMjAyMVwiPjxfY29tcG9uZW50cy5hIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRhYkluZGV4PVwiLTFcIiBocmVmPVwiI2FkdmVudC1vZi1jb2RlLTIwMjFcIj48X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tbGlua1wiIC8+PC9fY29tcG9uZW50cy5hPntcIkFkdmVudCBvZiBDb2RlIDIwMjFcIn08L19jb21wb25lbnRzLmgxPntcIlxcblwifTxfY29tcG9uZW50cy5wcmU+PF9jb21wb25lbnRzLmNvZGUgY2xhc3NOYW1lPVwiaGxqcyBsYW5ndWFnZS1iYXNoXCI+e1wiICAgICAgICAgICAgICAgICAgICAgIH4gICB+ICB+IH5+IH5+fn5+fn5+fn5+fn5+flxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLlwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtc3RyaW5nXCI+e1wiJydcIn08L19jb21wb25lbnRzLnNwYW4+PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCInJ1wifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLiAgIC4gICA6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAuICAgLiAuXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCInICAgIC4uLi4nXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcblwifTwvX2NvbXBvbmVudHMuY29kZT48L19jb21wb25lbnRzLnByZT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJJJ2xsIGJlIHBvc3RpbmcgaGVyZSBteSBzb2x1dGlvbnMgZm9yIFwifTxfY29tcG9uZW50cy5hIGhyZWY9XCJodHRwczovL2FkdmVudG9mY29kZVwiPntcIkFvQyAyMDIxXCJ9PC9fY29tcG9uZW50cy5hPntcIi4gRm9sbG93IGFsb25nIVwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDMgaWQ9XCJ0YWJsZS1vZi1jb250ZW50c1wiPjxfY29tcG9uZW50cy5hIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRhYkluZGV4PVwiLTFcIiBocmVmPVwiI3RhYmxlLW9mLWNvbnRlbnRzXCI+PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLWxpbmtcIiAvPjwvX2NvbXBvbmVudHMuYT57XCJUYWJsZSBvZiBjb250ZW50c1wifTwvX2NvbXBvbmVudHMuaDM+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT48X2NvbXBvbmVudHMuYSBocmVmPVwiI2RheS0xLXNvbmFyLXN3ZWVwXCI+e1wiRGF5IDE6IFNvbmFyIFN3ZWVwXCJ9PC9fY29tcG9uZW50cy5hPjwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPjxfY29tcG9uZW50cy5hIGhyZWY9XCIjZGF5LTItZGl2ZVwiPntcIkRheSAyOiBEaXZlIVwifTwvX2NvbXBvbmVudHMuYT48L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT48X2NvbXBvbmVudHMuYSBocmVmPVwiI2RheS0zLWJpbmFyeS1kaWFnbm9zdGljXCI+e1wiRGF5IDM6IEJpbmFyeSBEaWFnbm9zdGljXCJ9PC9fY29tcG9uZW50cy5hPjwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPjxfY29tcG9uZW50cy5hIGhyZWY9XCIjZGF5LTQtZ2lhbnQtc3F1aWRcIj57XCJEYXkgNDogR2lhbnQgU3F1aWRcIn08L19jb21wb25lbnRzLmE+PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5oMiBpZD1cImRheS0xLXNvbmFyLXN3ZWVwXCI+PF9jb21wb25lbnRzLmEgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdGFiSW5kZXg9XCItMVwiIGhyZWY9XCIjZGF5LTEtc29uYXItc3dlZXBcIj48X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tbGlua1wiIC8+PC9fY29tcG9uZW50cy5hPntcIkRheSAxOiBTb25hciBTd2VlcFwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vYWR2ZW50b2Zjb2RlLmNvbS8yMDIxL2RheS8xXCI+e1wiaHR0cHM6Ly9hZHZlbnRvZmNvZGUuY29tLzIwMjEvZGF5LzFcIn08L19jb21wb25lbnRzLmE+PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkZvciBwYXJ0IDEsIHdlJ3JlIGdpdmVuIGEgbGlzdCBvZiBudW1iZXJzIGFuZCBhcmUgYXNrZWQgaG93IG1hbnkgdGltZXMgdGhlIG51bWJlcnMgaW5jcmVhc2UgcmVsYXRpdmVseSB0byB0aGUgcHJldmlvdXMgbnVtYmVyLiBUaGUgc29sdXRpb24gaXMgcHJldHR5IHN0cmFpZ2h0Zm9yd2FyZDogbG9vcCBvdmVyIHRoZSBsaXN0LCBjb21wYXJlIGVhY2ggaXRlbSB3aXRoIHRoZSBwcmV2aW91cywgY291bnQgdGhlIG9jY3VycmVuY2Ugd2hlcmUgaXQncyBncmVhdGVyIHRoYW4gdGhlIHByZXZpb3VzOlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucHJlPjxfY29tcG9uZW50cy5jb2RlIGNsYXNzTmFtZT1cImhsanMgbGFuZ3VhZ2UtcHl0aG9uXCI+PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZnJvbVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgcGF0aGxpYiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJpbXBvcnRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFBhdGhcXG5cIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJkZWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtdGl0bGUgaGxqcy1mdW5jdGlvblwiPntcInBhcnRfMVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoKTpcXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wid2l0aFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcIm9wZW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiKFBhdGgoX19maWxlX18pLnBhcmVudCAvIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtc3RyaW5nXCI+e1wiXFxcImlucHV0LnR4dFxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJhc1wifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgZmlsZTpcXG4gICAgICAgIHByZXZpb3VzID0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcImludFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoZmlsZS5yZWFkbGluZSgpKVxcbiAgICBcXG4gICAgICAgIGluY3JlYXNlcyA9IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImZvclwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgdmFsdWUgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJtYXBcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJpbnRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiLCBmaWxlKTpcXG4gICAgICAgICAgICBpbmNyZWFzZXMgKz0gdmFsdWUgPiBwcmV2aW91c1xcbiAgICAgICAgICAgIHByZXZpb3VzID0gdmFsdWVcXG4gICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcInJldHVyblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgaW5jcmVhc2VzXFxuXCJ9PC9fY29tcG9uZW50cy5jb2RlPjwvX2NvbXBvbmVudHMucHJlPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkZvciBwYXJ0IDIsIHdlJ3JlIGFza2VkIHRvIGNvbnNpZGVyIHRoZSBzdW0gb2YgYSBcIn08X2NvbXBvbmVudHMuc3Ryb25nPntcInRocmVlLW1lYXN1cmVtZW50IHNsaWRpbmcgd2luZG93XCJ9PC9fY29tcG9uZW50cy5zdHJvbmc+e1wiLiBJIHRob3VnaHQgSSB3b3VsZCBuZWVkIGEgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiZGVxdWVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHRvIGtlZXAgYSBsaXN0IG9mIDMgdmFsdWVzLCBvciB1c2UgbGlzdCBjb21wcmVoZW5zaW9uICsgc2xpY2VzLCB3aGVuIEkgcmVtZW1iZXJlZCBhYm91dCBcIn08X2NvbXBvbmVudHMuYSBocmVmPVwiaHR0cHM6Ly9kb2NzLnB5dGhvbi5vcmcvMy9saWJyYXJ5L2l0ZXJ0b29scy5odG1sI2l0ZXJ0b29scy1yZWNpcGVzXCI+e1widGhlc2UgcmVjaXBlc1wifTwvX2NvbXBvbmVudHMuYT57XCIgaW4gdGhlIHB5dGhvbiBkb2NzLiBJIGNvcGllZCBvdmVyIGFuIGltcGxlbWVudGF0aW9uIGZvciBhIGdlbmVyYXRvciBvZiB0aGVzZSB3aW5kb3dzIGFuZCB1c2VkIGZvciBteSBzb2x1dGlvbjpcIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnByZT48X2NvbXBvbmVudHMuY29kZSBjbGFzc05hbWU9XCJobGpzIGxhbmd1YWdlLXB5dGhvblwiPjxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImltcG9ydFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgY29sbGVjdGlvbnNcXG5cIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJmcm9tXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBpdGVydG9vbHMgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW1wb3J0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBpc2xpY2VcXG5cIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJmcm9tXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBwYXRobGliIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImltcG9ydFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgUGF0aFxcblxcblwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImRlZlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy10aXRsZSBobGpzLWZ1bmN0aW9uXCI+e1wic2xpZGluZ193aW5kb3dcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtcGFyYW1zXCI+e1wiaXRlcmFibGUsIG5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiKTpcXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1jb21tZW50XCI+e1wiIyBzbGlkaW5nX3dpbmRvdygnQUJDREVGRycsIDQpIC0+IEFCQ0QgQkNERSBDREVGIERFRkdcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgIGl0ID0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcIml0ZXJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKGl0ZXJhYmxlKVxcbiAgICB3aW5kb3cgPSBjb2xsZWN0aW9ucy5kZXF1ZShpc2xpY2UoaXQsIG4pLCBtYXhsZW49bilcXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJsZW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiKHdpbmRvdykgPT0gbjpcXG4gICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcInlpZWxkXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1widHVwbGVcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKHdpbmRvdylcXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZm9yXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiB4IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBpdDpcXG4gICAgICAgIHdpbmRvdy5hcHBlbmQoeClcXG4gICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcInlpZWxkXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1widHVwbGVcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKHdpbmRvdylcXG5cXG5cIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJkZWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtdGl0bGUgaGxqcy1mdW5jdGlvblwiPntcInBhcnRfMlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoKTpcXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wid2l0aFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcIm9wZW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiKFBhdGgoX19maWxlX18pLnBhcmVudCAvIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtc3RyaW5nXCI+e1wiXFxcImlucHV0LnR4dFxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJhc1wifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgZmlsZTpcXG4gICAgICAgIGl0ID0gc2xpZGluZ193aW5kb3coXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcIm1hcFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcImludFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIsIGZpbGUpLCBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjNcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKVxcbiAgICAgICAgcHJldmlvdXMgPSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wibmV4dFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoaXQpXFxuICAgIFxcbiAgICAgICAgaW5jcmVhc2VzID0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIwXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZm9yXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiB3aW5kb3cgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIGl0OlxcbiAgICAgICAgICAgIGluY3JlYXNlcyArPSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wic3VtXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIih3aW5kb3cpID4gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcInN1bVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIocHJldmlvdXMpXFxuICAgICAgICAgICAgcHJldmlvdXMgPSB3aW5kb3dcXG4gICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcInJldHVyblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgaW5jcmVhc2VzXFxuXCJ9PC9fY29tcG9uZW50cy5jb2RlPjwvX2NvbXBvbmVudHMucHJlPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkZvciB0aGUgbmV4dCBkYXlzLCBJJ20gYWRkaW5nIFwifTxfY29tcG9uZW50cy5hIGhyZWY9XCJodHRwczovL3B5cGkub3JnL3Byb2plY3QvbW9yZS1pdGVydG9vbHMvXCI+PF9jb21wb25lbnRzLmNvZGU+e1wibW9yZS1pdGVydG9vbHNcIn08L19jb21wb25lbnRzLmNvZGU+PC9fY29tcG9uZW50cy5hPntcIiB0byBoYXZlIHRoZXNlIHJlY2lwZXMgcmVhZGlseSBhdmFpbGFibGUhXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkNoZWNrIG15IHJlcG9zaXRvcnkgZm9yIHRoZSBcIn08X2NvbXBvbmVudHMuYSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3JidXNxdWV0L2FkdmVudC1vZi1jb2RlL2Jsb2IvbWFpbi8yMDIxLzAxL2RheTEucHlcIj57XCJmaW5hbCBjb2RlIGZvciBkYXkgMVwifTwvX2NvbXBvbmVudHMuYT57XCIuIFNlZSB5J2FsbCB0b21vcnJvdyFcIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyIGlkPVwiZGF5LTItZGl2ZVwiPjxfY29tcG9uZW50cy5hIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRhYkluZGV4PVwiLTFcIiBocmVmPVwiI2RheS0yLWRpdmVcIj48X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tbGlua1wiIC8+PC9fY29tcG9uZW50cy5hPntcIkRheSAyOiBEaXZlIVwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vYWR2ZW50b2Zjb2RlLmNvbS8yMDIxL2RheS8yXCI+e1wiaHR0cHM6Ly9hZHZlbnRvZmNvZGUuY29tLzIwMjEvZGF5LzJcIn08L19jb21wb25lbnRzLmE+PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlRvZGF5LCB3ZSdyZSBwaWxvdGluZyBhIHN1Ym1hcmluZSwgd2hpY2ggaGFzIGEgcGxhbm5lZCBjb3Vyc2UgZGVmaW5lZCBieSBhIHNlcmllcyBvZiBpbnN0cnVjdGlvbnMgKG91ciBpbnB1dCk6XCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+PF9jb21wb25lbnRzLmNvZGU+e1wiZm9yd2FyZCBYXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBcIn08X2NvbXBvbmVudHMuc3Ryb25nPntcImluY3JlYXNlc1wifTwvX2NvbXBvbmVudHMuc3Ryb25nPntcIiB0aGUgaG9yaXpvbnRhbCBwb3NpdGlvbiBieSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJYXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiB1bml0cy5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT48X2NvbXBvbmVudHMuY29kZT57XCJkb3duIFhcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIFwifTxfY29tcG9uZW50cy5zdHJvbmc+e1wiaW5jcmVhc2VzXCJ9PC9fY29tcG9uZW50cy5zdHJvbmc+e1wiIHRoZSBkZXB0aCBieSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJYXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiB1bml0cy5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT48X2NvbXBvbmVudHMuY29kZT57XCJ1cCBYXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBcIn08X2NvbXBvbmVudHMuc3Ryb25nPntcImRlY3JlYXNlc1wifTwvX2NvbXBvbmVudHMuc3Ryb25nPntcIiB0aGUgZGVwdGggYnkgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiWFwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgdW5pdHMuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkkgdGhpbmsgdGhpcyBsb29rcyBuZWF0IHdpdGggUHl0aG9uIDMuMTAncyBzdHJ1Y3R1cmFsIHBhdHRlcm4gbWF0Y2hpbmc6XCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wcmU+PF9jb21wb25lbnRzLmNvZGUgY2xhc3NOYW1lPVwiaGxqcyBsYW5ndWFnZS1weXRob25cIj57XCJob3Jpem9udGFsID0gZGVwdGggPSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjBcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZm9yXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBjb21tYW5kIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBmaWxlOlxcbiAgICBtYXRjaCBjb21tYW5kLnNwbGl0KFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtc3RyaW5nXCI+e1wiXFxcIiBcXFwiXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIik6XFxuICAgICAgICBjYXNlIFtcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIlxcXCJmb3J3YXJkXFxcIlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIsIGRpc3RhbmNlXTpcXG4gICAgICAgICAgICBob3Jpem9udGFsICs9IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJpbnRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKGRpc3RhbmNlKVxcbiAgICAgICAgY2FzZSBbXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwidXBcXFwiXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiwgZGlzdGFuY2VdOlxcbiAgICAgICAgICAgIGRlcHRoIC09IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJpbnRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKGRpc3RhbmNlKVxcbiAgICAgICAgY2FzZSBbXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwiZG93blxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiLCBkaXN0YW5jZV06XFxuICAgICAgICAgICAgZGVwdGggKz0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcImludFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoZGlzdGFuY2UpXFxuXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wicmV0dXJuXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBob3Jpem9udGFsICogZGVwdGhcXG5cIn08L19jb21wb25lbnRzLmNvZGU+PC9fY29tcG9uZW50cy5wcmU+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhlIHB1enpsZSBjbGFpbSB0aGF0IHRoZSByZXN1bHQgZG9lc24ndCBtYWtlIHNlbnNlLCBhbmQgd2hlbiBjaGVja2luZyB0aGUgc3VibWFyaW5lIG1hbnVhbCB3ZSBub3RpY2UgdGhlIGludHJ1Y3Rpb25zIHRyYWNrIG5vdCBvbmx5IGhvcml6b250YWwgcG9zaXRpb24gYW5kIGRlcHRoLCBidXQgYWxzbyBcIn08X2NvbXBvbmVudHMuc3Ryb25nPntcImFpbVwifTwvX2NvbXBvbmVudHMuc3Ryb25nPntcIiwgYW5kIHRoZSBjb21tYW5kcyBhcmUgYWxzbyBlbnRpcmVseSBkaWZmZXJlbnQ6XCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+PF9jb21wb25lbnRzLmNvZGU+e1wiZG93biBYXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBcIn08X2NvbXBvbmVudHMuc3Ryb25nPntcImluY3JlYXNlc1wifTwvX2NvbXBvbmVudHMuc3Ryb25nPntcIiB5b3VyIGFpbSBieSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJYXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiB1bml0cy5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJ1cCBYIFwifTxfY29tcG9uZW50cy5zdHJvbmc+e1wiZGVjcmVhc2VzXCJ9PC9fY29tcG9uZW50cy5zdHJvbmc+e1wiIHlvdXIgYWltIGJ5IFwifTxfY29tcG9uZW50cy5jb2RlPntcIlhcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHVuaXRzLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcImZvcndhcmQgWCBkb2VzIHR3byB0aGluZ3M6XCJ9e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJJdCBcIn08X2NvbXBvbmVudHMuc3Ryb25nPntcImluY3JlYXNlc1wifTwvX2NvbXBvbmVudHMuc3Ryb25nPntcIiB5b3VyIGhvcml6b250YWwgcG9zaXRpb24gYnkgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiWFwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgdW5pdHMuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiSXQgXCJ9PF9jb21wb25lbnRzLnN0cm9uZz57XCJpbmNyZWFzZXNcIn08L19jb21wb25lbnRzLnN0cm9uZz57XCIgeW91ciBkZXB0aCBieSB5b3VyIGFpbSBtdWx0aXBsaWVkIGJ5IFwifTxfY29tcG9uZW50cy5jb2RlPntcIlhcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhlIHNvbHV0aW9uIGxvb2tzIGEgbG90IGxpa2UgcGFydCAxLCBidXQgdHJhY2tpbmcgdGhlIG5ldyBcIn08X2NvbXBvbmVudHMuY29kZT57XCJhaW1cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHZhcmlhYmxlOlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucHJlPjxfY29tcG9uZW50cy5jb2RlIGNsYXNzTmFtZT1cImhsanMgbGFuZ3VhZ2UtcHl0aG9uXCI+e1wiaG9yaXpvbnRhbCA9IGRlcHRoID0gYWltID0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIwXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcblwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImZvclwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgY29tbWFuZCBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJpblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgZmlsZTpcXG4gICAgbWF0Y2ggY29tbWFuZC5zcGxpdChcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIlxcXCIgXFxcIlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIpOlxcbiAgICAgICAgY2FzZSBbXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwiZm9yd2FyZFxcXCJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiLCBkaXN0YW5jZV06XFxuICAgICAgICAgICAgaG9yaXpvbnRhbCArPSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wiaW50XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihkaXN0YW5jZSlcXG4gICAgICAgICAgICBkZXB0aCArPSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wiaW50XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihkaXN0YW5jZSkgKiBhaW1cXG4gICAgICAgIGNhc2UgW1wifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtc3RyaW5nXCI+e1wiXFxcInVwXFxcIlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIsIGRpc3RhbmNlXTpcXG4gICAgICAgICAgICBhaW0gLT0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcImludFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoZGlzdGFuY2UpXFxuICAgICAgICBjYXNlIFtcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIlxcXCJkb3duXFxcIlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIsIGRpc3RhbmNlXTpcXG4gICAgICAgICAgICBhaW0gKz0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcImludFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoZGlzdGFuY2UpXFxuXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wicmV0dXJuXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBob3Jpem9udGFsICogZGVwdGhcXG5cIn08L19jb21wb25lbnRzLmNvZGU+PC9fY29tcG9uZW50cy5wcmU+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhlIGZpbmFsIHNvbHV0aW9uIGZvciBkYXkgMiBpcyBpbiBteSBcIn08X2NvbXBvbmVudHMuYSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3JidXNxdWV0L2FkdmVudC1vZi1jb2RlL2Jsb2IvbWFpbi8yMDIxLzAyL2RheTIucHlcIj57XCJhb2MgcmVwb3NpdG9yeVwifTwvX2NvbXBvbmVudHMuYT57XCIhXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5oMiBpZD1cImRheS0zLWJpbmFyeS1kaWFnbm9zdGljXCI+PF9jb21wb25lbnRzLmEgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdGFiSW5kZXg9XCItMVwiIGhyZWY9XCIjZGF5LTMtYmluYXJ5LWRpYWdub3N0aWNcIj48X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tbGlua1wiIC8+PC9fY29tcG9uZW50cy5hPntcIkRheSAzOiBCaW5hcnkgRGlhZ25vc3RpY1wifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vYWR2ZW50b2Zjb2RlLmNvbS8yMDIxL2RheS8yXCI+e1wiaHR0cHM6Ly9hZHZlbnRvZmNvZGUuY29tLzIwMjEvZGF5LzJcIn08L19jb21wb25lbnRzLmE+PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIk9uIGRheSAzLCB3ZSdyZSBydW5uaW5nIGRpYWdub3N0aWNzIG9uIHRoZSBzdWJtYXJpbmUuIE91ciBwdXp6bGUgaW5wdXQgaXMgYSBsaXN0IG9mIGJpbmFyeSBudW1iZXIgdGhhdCBjYW4gYmUgZGVjb2RlZCBpbnRvIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzdWJtYXJpbmUuXFxuRm9yIHBhcnQgMSwgd2UncmUgY2hlY2tpbmcgXCJ9PF9jb21wb25lbnRzLnN0cm9uZz57XCJwb3dlciBjb25zdW1wdGlvblwifTwvX2NvbXBvbmVudHMuc3Ryb25nPntcIiBieSBjYWxjdWxhdGluZyB0d28gdmFsdWVzOiB0aGUgXCJ9PF9jb21wb25lbnRzLnN0cm9uZz57XCJnYW1lIHJhdGVcIn08L19jb21wb25lbnRzLnN0cm9uZz57XCIsIGRldGVybWluZWQgYnkgZmluZGluZyB0aGUgXCJ9PF9jb21wb25lbnRzLnN0cm9uZz57XCJtb3N0IGNvbW1vbiBiaXQgaW4gdGhlIGNvcnJlc3BvbmRpbmcgcG9zaXRpb25cIn08L19jb21wb25lbnRzLnN0cm9uZz57XCIgb2YgYWxsIG51bWJlcnMgaW4gb3VyIGlucHV0OyBhbmQgdGhlIFwifTxfY29tcG9uZW50cy5zdHJvbmc+e1wiZXBzaWxvbiByYXRlXCJ9PC9fY29tcG9uZW50cy5zdHJvbmc+e1wiLCBjYWxjdWxhdGVkIHNpbWlsYXJseSwgYnV0IGJ5IGZpbmRpbmcgdGhlIFwifTxfY29tcG9uZW50cy5zdHJvbmc+e1wibGVzcyBjb21tb24gYml0XCJ9PC9fY29tcG9uZW50cy5zdHJvbmc+e1wiLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJNeSBzb2x1dGlvbiB3YXMgYSBzdHJhaWdoZm9yd2FyZCB0cmFuc2xhdGlvbiBvZiB0aGUgcmVxdWlyZW1lbnRzIGludG8gcHl0aG9uIGNvZGUuIEkgdXNlZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJjb2xsZWN0aW9uLkNvdW50ZXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wicyB0byBjb3VudCB0aGUgYml0cyBmb3IgZWFjaCBwb3NpdGlvbiwgcmV0cmlldmluZyB0aGUgdmFsdWUgdXNpbmcgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiQ291bnRlci5tb3N0X2NvbW1vblwifTwvX2NvbXBvbmVudHMuY29kZT57XCIuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wcmU+PF9jb21wb25lbnRzLmNvZGUgY2xhc3NOYW1lPVwiaGxqcyBsYW5ndWFnZS1weXRob25cIj57XCJMRU5HVEggPSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjEyXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1jb21tZW50XCI+e1wiIyBzaXplIG9mIG51bWJlcnMgaW4gdGhlIHJlcG9ydFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG5yZXBvcnQgPSBbbGluZS5zdHJpcCgpIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImZvclwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgbGluZSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJpblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgZmlsZV1cXG5cXG5cIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJkZWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtdGl0bGUgaGxqcy1mdW5jdGlvblwiPntcImNvdW50XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXBhcmFtc1wiPntcInJlcG9ydDogSXRlcmFibGVbXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcInN0clwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJdLCBwb3NpdGlvbjogXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcImludFwifTwvX2NvbXBvbmVudHMuc3Bhbj48L19jb21wb25lbnRzLnNwYW4+e1wiKSAtPiBDb3VudGVyW1wifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJzdHJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXTpcXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wicmV0dXJuXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBDb3VudGVyKFt2YWx1ZVtwb3NpdGlvbl0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZm9yXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiB2YWx1ZSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJpblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgcmVwb3J0XSlcXG5cXG5jb3VudGVyczogXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcImxpc3RcIn08L19jb21wb25lbnRzLnNwYW4+e1wiW0NvdW50ZXJbXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcInN0clwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJdXSA9IFtdXFxuXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZm9yXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBwb3NpdGlvbiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJpblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcInJhbmdlXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihMRU5HVEgpOiAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1jb21tZW50XCI+e1wiIyBPKExFTkdUSClcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgIGNvdW50ZXJzLmFwcGVuZChjb3VudChyZXBvcnQsIHBvc2l0aW9uKSkgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtY29tbWVudFwiPntcIiMgTyhuKVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG5cXG5nYW1tYSA9IFtjb3VudGVyLm1vc3RfY29tbW9uKClbXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIwXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIl1bXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIwXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIl0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZm9yXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBjb3VudGVyIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBjb3VudGVyc11cXG5lcHNpbG9uID0gW2NvdW50ZXIubW9zdF9jb21tb24oXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIyXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIilbXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIxXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIl1bXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIwXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIl0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZm9yXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBjb3VudGVyIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBjb3VudGVyc11cXG5cIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJyZXR1cm5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIGxpc3Rfb2ZfYml0c190b19pbnQoZ2FtbWEpICogbGlzdF9vZl9iaXRzX3RvX2ludChlcHNpbG9uKVxcblwifTwvX2NvbXBvbmVudHMuY29kZT48L19jb21wb25lbnRzLnByZT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJOZXh0LCB3ZSdyZSBjaGVja2luZyB0aGUgXCJ9PF9jb21wb25lbnRzLnN0cm9uZz57XCJsaWZlIHN1cHBvcnQgcmF0aW5nXCJ9PC9fY29tcG9uZW50cy5zdHJvbmc+e1wiLCBhZ2FpbiBieSBjYWxjdWxhdGluZyB0d28gbnVtYmVycywgdGhlIFwifTxfY29tcG9uZW50cy5zdHJvbmc+e1wib3h5Z2VuIGdlbmVyYXRvciByYXRpbmdcIn08L19jb21wb25lbnRzLnN0cm9uZz57XCIgYW5kIHRoZSBcIn08X2NvbXBvbmVudHMuc3Ryb25nPntcIkNPMiBzY3J1YmJlciByYXRpbmdcIn08L19jb21wb25lbnRzLnN0cm9uZz57XCIuIFRvIGJlIGhvbmVzdCwgdGhlIGRlc2NyaXB0aW9uIG9mIGhvdyB0byBsb2NhdGUgdGhlc2UgdmFsdWVzIHdpbGwgYmUgbXVjaCBtb3JlIGNsZWFyIFwifTxfY29tcG9uZW50cy5hIGhyZWY9XCJodHRwczovL2FkdmVudG9mY29kZS5jb20vMjAyMS9kYXkvMlwiPntcImluIHRoZSBhY3R1YWwgcHV6emxlXCJ9PC9fY29tcG9uZW50cy5hPntcIiB0aGFuIEknZCBiZSBhYmxlIHRvIHN1bW1hcml6ZS4gTGV0IG1lIGp1c3Qgc2hvdyB5b3UgdGhlIGNvZGU6XCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wcmU+PF9jb21wb25lbnRzLmNvZGUgY2xhc3NOYW1lPVwiaGxqcyBsYW5ndWFnZS1weXRob25cIj57XCJyZXBvcnQgPSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wibGlzdFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIocGFyc2UoZmlsZSkpXFxuXFxub3h5Z2VuX3JlcG9ydCA9IGNvMl9yZXBvcnQgPSByZXBvcnQgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtY29tbWVudFwiPntcIiMga2VlcCBhIHJlZmVyZW5jZSBvZiB0aGUgb3JpZ2luYWwgcmVwb3J0c1wifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG5cIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJmb3JcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIHBvc2l0aW9uIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wicmFuZ2VcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKExFTkdUSCk6XFxuICAgIGNvdW50ZXIgPSBjb3VudChveHlnZW5fcmVwb3J0LCBwb3NpdGlvbikgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtY29tbWVudFwiPntcIiMgY291bnQgdGhlIGJpdHMgYXQgdGhlIHBvc3N0aW9uXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICBtb3N0X2NvbW1vbiwgdG90YWwgPSBjb3VudGVyLm1vc3RfY29tbW9uKClbXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIwXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIl1cXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJsZW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiKG94eWdlbl9yZXBvcnQpICUgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIyXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiA9PSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjBcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImFuZFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgdG90YWwgPT0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcImxlblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIob3h5Z2VuX3JlcG9ydCkgLyBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiOlxcbiAgICAgICAgbW9zdF9jb21tb24gPSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIlxcXCIxXFxcIlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtY29tbWVudFwiPntcIiMgdGllIGJyZWFrZXJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuXFxuICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImlmXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wibGVuXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihveHlnZW5fcmVwb3J0KSAhPSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjFcIn08L19jb21wb25lbnRzLnNwYW4+e1wiOiAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1jb21tZW50XCI+e1wiIyBmaWx0ZXIgb3V0IHRoZSBudW1iZXJzIGluIHRoZSByZXBvcnQgdGhhdCBtYXRjaGVzIHRoZSBtb3N0IGNvbW1vblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgICAgIG94eWdlbl9yZXBvcnQgPSBbXFxuICAgICAgICAgICAgdmFsdWUgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZm9yXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiB2YWx1ZSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJpblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgb3h5Z2VuX3JlcG9ydCBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJpZlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgdmFsdWVbcG9zaXRpb25dID09IG1vc3RfY29tbW9uXFxuICAgICAgICBdXFxuXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZm9yXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBwb3NpdGlvbiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJpblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcInJhbmdlXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihMRU5HVEgpOlxcbiAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWNvbW1lbnRcIj57XCIjIHNhbWUgZGVhbCBhcyB0aGUgYWJvdmUtLWJ1dCB3ZSdyZSBmaWx0ZXJpbmcgb3V0IHRoZSBudW1iZXJzIHRoYXQgbWF0Y2ggdGhlIGxlc3MgY29tbW9uIGJpdFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgY291bnRlciA9IGNvdW50KGNvMl9yZXBvcnQsIHBvc2l0aW9uKVxcbiAgICBtb3N0X2NvbW1vbiwgdG90YWwgPSBjb3VudGVyLm1vc3RfY29tbW9uKClbXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIwXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIl1cXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJsZW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiKGNvMl9yZXBvcnQpICUgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1udW1iZXJcIj57XCIyXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiA9PSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjBcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImFuZFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgdG90YWwgPT0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcImxlblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoY28yX3JlcG9ydCkgLyBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjJcIn08L19jb21wb25lbnRzLnNwYW4+e1wiOlxcbiAgICAgICAgbW9zdF9jb21tb24gPSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXN0cmluZ1wiPntcIlxcXCIxXFxcIlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG5cXG4gICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJsZW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiKGNvMl9yZXBvcnQpICE9IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCI6XFxuICAgICAgICBjbzJfcmVwb3J0ID0gW1xcbiAgICAgICAgICAgIHZhbHVlIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImZvclwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgdmFsdWUgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIGNvMl9yZXBvcnQgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIHZhbHVlW3Bvc2l0aW9uXSAhPSBtb3N0X2NvbW1vblxcbiAgICAgICAgXVxcblxcblwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcInJldHVyblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgbGlzdF9vZl9iaXRzX3RvX2ludChveHlnZW5fcmVwb3J0W1wifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbnVtYmVyXCI+e1wiMFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJdKSAqIGxpc3Rfb2ZfYml0c190b19pbnQoY28yX3JlcG9ydFtcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW51bWJlclwiPntcIjBcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXSlcXG5cIn08L19jb21wb25lbnRzLmNvZGU+PC9fY29tcG9uZW50cy5wcmU+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiT24gZGF5IDMgSSBiYXNpY2FsbHkgdHJhbnNsYXRlZCB0aGUgcmVxdWlyZW1lbnRzIHRvIHB5dGhvbi0tSSB3YXMgc3VycHJpc2VkIHRoZXJlIHdlcmVuJ3QgYSBsb3Qgb2YgYml0d2lzZSB0cmlja2VyeSB0byBnZXQgdG8gdGhlIHNvbHV0aW9uLiBOb3cgd2Ugd2FpdCBmb3IgZGF5IDQuIFwifTxfY29tcG9uZW50cy5hIGhyZWY9XCJodHRwOi8vd2FzLnRsL1wiPntcIkVyaWNcIn08L19jb21wb25lbnRzLmE+e1wiIGxpa2VzIHRvIG1ha2UgdXMgd29yayBvbiB0aGUgd2Vla2VuZHMgd2l0aCB0aGVzZSBwdXp6bGVzIChTZWUgXCJ9PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vYWR2ZW50b2Zjb2RlLmNvbS8yMDIwL2RheS81XCI+e1wiaHR0cHM6Ly9hZHZlbnRvZmNvZGUuY29tLzIwMjAvZGF5LzVcIn08L19jb21wb25lbnRzLmE+e1wiLCBcIn08X2NvbXBvbmVudHMuYSBocmVmPVwiaHR0cHM6Ly9hZHZlbnRvZmNvZGUuY29tLzIwMjAvZGF5LzEyXCI+e1wiaHR0cHM6Ly9hZHZlbnRvZmNvZGUuY29tLzIwMjAvZGF5LzEyXCJ9PC9fY29tcG9uZW50cy5hPntcIi4uLiksIHNvIEknbGwgYmUgd2FpdGluZyBmb3Igc29tZSBmdW4gd29yayB0b21vcnJvdy5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiQ2hlY2sgdGhlIGZ1bGwgc29sdXRpb24gXCJ9PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yYnVzcXVldC9hZHZlbnQtb2YtY29kZS9ibG9iL21haW4vMjAyMS8wMy9kYXkzLnB5XCI+e1wiaGVyZVwifTwvX2NvbXBvbmVudHMuYT57XCIhXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5oMiBpZD1cImRheS00LWdpYW50LXNxdWlkXCI+PF9jb21wb25lbnRzLmEgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdGFiSW5kZXg9XCItMVwiIGhyZWY9XCIjZGF5LTQtZ2lhbnQtc3F1aWRcIj48X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tbGlua1wiIC8+PC9fY29tcG9uZW50cy5hPntcIkRheSA0OiBHaWFudCBTcXVpZFwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vYWR2ZW50b2Zjb2RlLmNvbS8yMDIxL2RheS80XCI+e1wiaHR0cHM6Ly9hZHZlbnRvZmNvZGUuY29tLzIwMjEvZGF5LzRcIn08L19jb21wb25lbnRzLmE+PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkFzIGV4cGVjdGVkLCBhIGxvdCBvZiB3b3JrIGZvciBtZSB0b2RheSwgaGF2aW5nIHRvIGZpZ3VyZSBvdXQgYSBkYXRhIG1vZGVsIGZvciBzdG9yaW5nIGEgYm9hcmQgb2YgXCJ9PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0JpbmdvXyhBbWVyaWNhbl92ZXJzaW9uKVwiPntcImJpbmdvXCJ9PC9fY29tcG9uZW50cy5hPntcIi4gSSB3b24ndCBnbyBvdmVyIHRoZSBwcm9jZXNzIHRvIGdldCB0byB0aGlzIGNsYXNzIGEgbG90LCB0aGVyZSBhcmUgc29tZSBkdXBsaWNhdGVkIGRhdGEgYW5kIGZvci1sb29wcyB0aGF0IGNhbiBiZSBvcHRpbWl6ZWQsIGJ1dCBJIGdvdCB0byBhIHNvbHV0aW9uIGFuZCBJIHRoaW5rIHRoZSBjbGFzcyBpcyBwcmV0dHkgY2xlYXIgdG8gdW5kZXJzdGFuZC4gRm9sbG93IGFsb25nIGluIGNvbW1lbnRzIHRvIHVuZGVyc3RhbmQgZWFjaCBwYXJ0LS1oZXJlIGl0IGdvZXM6XCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wcmU+PF9jb21wb25lbnRzLmNvZGUgY2xhc3NOYW1lPVwiaGxqcyBsYW5ndWFnZS1weXRob25cIj48X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJmcm9tXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBkYXRhY2xhc3NlcyBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJpbXBvcnRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIGZpZWxkLCBkYXRhY2xhc3NcXG5cXG5cIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLW1ldGFcIj57XCJAZGF0YWNsYXNzXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcblwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImNsYXNzXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXRpdGxlIGhsanMtY2xhc3NcIj57XCJCb2FyZFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCI6XFxuICAgIG51bWJlcnM6IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJkaWN0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIltcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1widHVwbGVcIn08L19jb21wb25lbnRzLnNwYW4+e1wiW1wifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJpbnRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiLCBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wiaW50XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIl0sIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJpbnRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXSA9IGZpZWxkKGRlZmF1bHRfZmFjdG9yeT1cIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wiZGljdFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIpXFxuICAgIGNoZWNrZWQ6IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJkaWN0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIltcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1widHVwbGVcIn08L19jb21wb25lbnRzLnNwYW4+e1wiW1wifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJpbnRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiLCBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wiaW50XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIl0sIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJib29sXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIl0gPSBmaWVsZChpbml0PVwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbGl0ZXJhbFwiPntcIkZhbHNlXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiwgZGVmYXVsdF9mYWN0b3J5PVwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJkaWN0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIilcXG4gICAgYWxsX251bWJlcnM6IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJkaWN0XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIltcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wiaW50XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiwgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcInR1cGxlXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIltcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wiaW50XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiwgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcImludFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJdXSA9IGZpZWxkKGRlZmF1bHRfZmFjdG9yeT1cIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wiZGljdFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIsIGluaXQ9XCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1saXRlcmFsXCI+e1wiRmFsc2VcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKVxcbiAgICBfd2lubmVyOiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wiYm9vbFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgPSBmaWVsZChkZWZhdWx0PVwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbGl0ZXJhbFwiPntcIkZhbHNlXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiwgaW5pdD1cIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWxpdGVyYWxcIj57XCJGYWxzZVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIpXFxuXFxuICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImRlZlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy10aXRsZSBobGpzLWZ1bmN0aW9uXCI+e1wiYWRkX3NxdWFyZVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1wYXJhbXNcIj57XCJzZWxmLCBpOiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wiaW50XCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiwgajogXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcImludFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIsIG51bWJlcjogXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcImludFwifTwvX2NvbXBvbmVudHMuc3Bhbj48L19jb21wb25lbnRzLnNwYW4+e1wiKSAtPiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWxpdGVyYWxcIj57XCJOb25lXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIjpcXG4gICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtc3RyaW5nXCI+e1wiXFxcIlxcXCJcXFwiXFxuICAgICAgICBVc2VkIHRvIGJ1aWxkIHRoZSBib2FyZCwgZnJvbSBudW1iZXJzIGluIHRoZSBwdXp6bGUgaW5wdXQuXFxuICAgICAgICBJJ20gc3RvcmluZyB0aGUgY2hlY2tlZCBzdGF0ZSBhcyBhIHNlcGFyYXRlIGRpY3Rpb25hcnkuIEEgY29sbGVhZ3VlIHNvbHV0aW9uXFxuICAgICAgICBjb252ZXJ0ZWQgcm93cyBhbmQgY29sdW1ucyBpbnRvIHNldHMgYW5kIGNvbXBhcmVkIHRvIGEgc2V0IG9mIHRoZSBkcmF3biBudW1iZXJzLFxcbiAgICAgICAgd2hpY2ggaXMgcHJldHR5IGNsZXZlclxcbiAgICAgICAgXFxcIlxcXCJcXFwiXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICAgICAgc2VsZi5udW1iZXJzW2ksIGpdID0gbnVtYmVyXFxuICAgICAgICBzZWxmLmNoZWNrZWRbaSwgal0gPSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWxpdGVyYWxcIj57XCJGYWxzZVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgICAgIHNlbGYuYWxsX251bWJlcnNbbnVtYmVyXSA9IChpLCBqKVxcblxcbiAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJkZWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtdGl0bGUgaGxqcy1mdW5jdGlvblwiPntcInVuY2hlY2tlZFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1wYXJhbXNcIj57XCJzZWxmXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIikgLT4gSXRlcmF0b3JbXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcImludFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJdOlxcbiAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwiXFxcIlxcXCJZaWVsZHMgdGhlIHVuY2hlY2tlZCBudW1iZXJzIG9uIHRoZSBib2FyZCBmb3Igc2NvcmUgY2FsY3VsYXRpb24uXFxcIlxcXCJcXFwiXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZm9yXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBpIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wicmFuZ2VcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKEJPQVJEX1NJWkUpOlxcbiAgICAgICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImZvclwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgaiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJpblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcInJhbmdlXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihCT0FSRF9TSVpFKTpcXG4gICAgICAgICAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcIm5vdFwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgc2VsZi5jaGVja2VkW2ksIGpdOlxcbiAgICAgICAgICAgICAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wieWllbGRcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIHNlbGYubnVtYmVyc1tpLCBqXVxcblxcbiAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJkZWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtdGl0bGUgaGxqcy1mdW5jdGlvblwiPntcIndpbm5lclwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1wYXJhbXNcIj57XCJzZWxmXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIikgLT4gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcImJvb2xcIn08L19jb21wb25lbnRzLnNwYW4+e1wiOlxcbiAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwiXFxcIlxcXCJDaGVja3MgaWYgYSBib2FyZCBpcyB0aGUgd2lubmVyIGlmIGFsbCBwb3NpdGlvbnMgaW4gYSByb3cgb3IgY29sdW1uIGFyZSBjaGVja2VkLlxcXCJcXFwiXFxcIlwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImlmXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBzZWxmLl93aW5uZXI6XFxuICAgICAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wicmV0dXJuXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBzZWxmLl93aW5uZXJcXG4gICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImZvclwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgaSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJpblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1idWlsdF9pblwiPntcInJhbmdlXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihCT0FSRF9TSVpFKTpcXG4gICAgICAgICAgICByb3dfY2hlY2tlZCA9IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJhbGxcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKHNlbGYuY2hlY2tlZFtpLCBqXSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJmb3JcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIGogXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaW5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtYnVpbHRfaW5cIj57XCJyYW5nZVwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIoQk9BUkRfU0laRSkpXFxuICAgICAgICAgICAgY29sdW1uX2NoZWNrZWQgPSBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wiYWxsXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihzZWxmLmNoZWNrZWRbaiwgaV0gXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiZm9yXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBqIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWJ1aWx0X2luXCI+e1wicmFuZ2VcIn08L19jb21wb25lbnRzLnNwYW4+e1wiKEJPQVJEX1NJWkUpKVxcbiAgICAgICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImlmXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiByb3dfY2hlY2tlZCBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJvclwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgY29sdW1uX2NoZWNrZWQ6XFxuICAgICAgICAgICAgICAgIHNlbGYuX3dpbm5lciA9IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbGl0ZXJhbFwiPntcIlRydWVcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuICAgICAgICAgICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcInJldHVyblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIgc2VsZi5fd2lubmVyXFxuICAgICAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJyZXR1cm5cIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbGl0ZXJhbFwiPntcIkZhbHNlXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcblxcbiAgICBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJkZWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtdGl0bGUgaGxqcy1mdW5jdGlvblwiPntcImNoZWNrXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIihcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLXBhcmFtc1wiPntcInNlbGYsIG51bWJlclwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCIpIC0+IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbGl0ZXJhbFwiPntcIk5vbmVcIn08L19jb21wb25lbnRzLnNwYW4+e1wiOlxcbiAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1zdHJpbmdcIj57XCJcXFwiXFxcIlxcXCInY2hlY2tzJyBhICBkcmF3biBudW1iZXIgYWdhaW5zdCB0aGUgYm9hcmQsIG1hcmtpbmcgaXQuXFxcIlxcXCJcXFwiXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIHNlbGYud2lubmVyKCk6XFxuICAgICAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wicmV0dXJuXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIlxcbiAgICAgICAgXCJ9PF9jb21wb25lbnRzLnNwYW4gY2xhc3NOYW1lPVwiaGxqcy1rZXl3b3JkXCI+e1wiaWZcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIG51bWJlciBcIn08X2NvbXBvbmVudHMuc3BhbiBjbGFzc05hbWU9XCJobGpzLWtleXdvcmRcIj57XCJub3RcIn08L19jb21wb25lbnRzLnNwYW4+e1wiIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcImluXCJ9PC9fY29tcG9uZW50cy5zcGFuPntcIiBzZWxmLmFsbF9udW1iZXJzOlxcbiAgICAgICAgICAgIFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMta2V5d29yZFwiPntcInJldHVyblwifTwvX2NvbXBvbmVudHMuc3Bhbj57XCJcXG4gICAgICAgIGksIGogPSBzZWxmLmFsbF9udW1iZXJzW251bWJlcl1cXG4gICAgICAgIHNlbGYuY2hlY2tlZFtpLCBqXSA9IFwifTxfY29tcG9uZW50cy5zcGFuIGNsYXNzTmFtZT1cImhsanMtbGl0ZXJhbFwiPntcIlRydWVcIn08L19jb21wb25lbnRzLnNwYW4+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5jb2RlPjwvX2NvbXBvbmVudHMucHJlPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkNoZWNrIHRoZSByZXN0IG9mIHRoZSBnYW1lIGluIFwifTxfY29tcG9uZW50cy5hIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmJ1c3F1ZXQvYWR2ZW50LW9mLWNvZGUvYmxvYi9tYWluLzIwMjEvMDQvZGF5NC5weVwiPntcInRoZSByZXBvXCJ9PC9fY29tcG9uZW50cy5hPntcIiwgYnV0IGl0J3MgYmFzaWNhbGx5IGEgbG9vcCBvdmVyIHRoZSBkcmF3biBudW1iZXJzIGFuZCBhbGwgc3RvcmVkIGJvYXJkcywgY2FsbGluZyBcIn08X2NvbXBvbmVudHMuY29kZT57XCJib2FyZC5jaGVjaygpXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBhbmQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiYm9hcmQud2lubmVyKClcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHRvIHZlcmlmeSB0aGUgc3RhdGVzLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJMZXQncyB3YWl0IGZvciBTdW5kYXkncyBwdXp6bGUhXCJ9PC9fY29tcG9uZW50cy5wPjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwiYW9jLTIwMjEubWRcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgImltcG9ydCB7IExpbmtzRnVuY3Rpb24sIE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGNsZWFuIGZyb20gXCJ+L3N0eWxlcy9jbGVhbi1jc3MuY3NzXCI7XG5cbmV4cG9ydCBsZXQgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBjbGVhbiB9LFxuICAgIHtcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICBocmVmOiBcImh0dHBzOi8vdW5wa2cuY29tL0BoaWdobGlnaHRqcy9jZG4tYXNzZXRzQDExLjMuMS9zdHlsZXMvYmFzZTE2L2RlZmF1bHQtbGlnaHQubWluLmNzc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly91bnBrZy5jb20vQGhpZ2hsaWdodGpzL2Nkbi1hc3NldHNAMTEuMy4xL3N0eWxlcy9iYXNlMTYvZGVmYXVsdC1kYXJrLm1pbi5jc3NcIixcbiAgICAgIG1lZGlhOiBcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIixcbiAgICB9LFxuICBdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiA8T3V0bGV0IC8+O1xufVxuIiwgImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBsZXQgbG9hZGVyID0gKCkgPT4ge1xuICByZXR1cm4gcmVkaXJlY3QoXCIvXCIpO1xufTtcbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOidhYjA0Y2M4ZScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtV0JQQlVOV0EuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVROV0JDWUlDLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWVpWTFI2RVIuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LUZRNkRTQ0RILmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVNISTdWT1dWLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1HNURUTlFFWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhQWjRYTDRRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstT0s2VEJRMlcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1HMk1CMlRaNC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wb3N0cyc6eydpZCc6J3JvdXRlcy9wb3N0cycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwb3N0cycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb3N0cy1EUzNGU0Q0Vi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Bvc3RzL2FkdmVudC1vZi1jb2RlJzp7J2lkJzoncm91dGVzL3Bvc3RzL2FkdmVudC1vZi1jb2RlJywncGFyZW50SWQnOidyb3V0ZXMvcG9zdHMnLCdwYXRoJzonYWR2ZW50LW9mLWNvZGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcG9zdHMvYWR2ZW50LW9mLWNvZGUtRktLUlhQQ1kuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU9LNlRCUTJXLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wb3N0cy9hb2MtMjAyMSc6eydpZCc6J3JvdXRlcy9wb3N0cy9hb2MtMjAyMScsJ3BhcmVudElkJzoncm91dGVzL3Bvc3RzJywncGF0aCc6J2FvYy0yMDIxJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Bvc3RzL2FvYy0yMDIxLUg0MzJBQVdYLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1HMk1CMlRaNC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcG9zdHMvZHluYW1pYy1uYXR1cmUtcHl0aG9uJzp7J2lkJzoncm91dGVzL3Bvc3RzL2R5bmFtaWMtbmF0dXJlLXB5dGhvbicsJ3BhcmVudElkJzoncm91dGVzL3Bvc3RzJywncGF0aCc6J2R5bmFtaWMtbmF0dXJlLXB5dGhvbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb3N0cy9keW5hbWljLW5hdHVyZS1weXRob24tM0lWRTJVNU8uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUc1RFROUUVYLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wb3N0cy9pbmRleCc6eydpZCc6J3JvdXRlcy9wb3N0cy9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL3Bvc3RzJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Bvc3RzL2luZGV4LVc3WElQWlcyLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wb3N0cy92aXN1YWxpemluZy11c2Utc3RhdGUnOnsnaWQnOidyb3V0ZXMvcG9zdHMvdmlzdWFsaXppbmctdXNlLXN0YXRlJywncGFyZW50SWQnOidyb3V0ZXMvcG9zdHMnLCdwYXRoJzondmlzdWFsaXppbmctdXNlLXN0YXRlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Bvc3RzL3Zpc3VhbGl6aW5nLXVzZS1zdGF0ZS1aUUhOQ0FSMy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSFBaNFhMNFEuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1BQjA0Q0M4RS5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUdqQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FB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
