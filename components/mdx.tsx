import { HTMLAttributes } from "react"
import Code from "./code"

export default {
  pre: (preProps: HTMLAttributes<HTMLPreElement>): JSX.Element => {
    const props = preToCodeBlock(preProps)

    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />
    }
  },
}

function preToCodeBlock(preProps: HTMLAttributes<HTMLPreElement>) {
  const children = preProps.children as JSX.Element

  if (
    // children is code element
    children &&
    // code props
    children.props &&
    // if children is actually a <code>
    children.type === "code"
  ) {
    // we have a <pre><code> situation
    const { children: codeString, className = "", ...props } = children.props

    const matches = className.match(/language-(?<lang>.*)/)

    return {
      codeString: codeString.trim(),
      className,
      language:
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : "",
      ...props,
    }
  }
}
