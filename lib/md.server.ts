import markdown from "markdown-it"
import emoji from "markdown-it-emoji"
import anchor from "markdown-it-anchor"

export async function compileMarkdown(contents: string): Promise<string> {
  const md = markdown({
    html: true,
    // highlight: (code, lang) => {
    //   return highlighter.codeToHtml(code, lang)
    // },
  })
    .use(emoji)
    .use(anchor, {
      slugify(s) {
        return s
          .toLowerCase()
          .replace(/[^a-z0-9-\s]/gm, "")
          .replace(/\s+/gm, "-")
      },
    })

  return md.render(contents)
}
