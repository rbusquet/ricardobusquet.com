import { HTMLAttributes } from "react"
import styled from "styled-components"
import Code from "./code"

const Paragraph = styled.p`
  margin: 1em 0;
`

export default {
  p: Paragraph,
  pre: (preProps: HTMLAttributes<HTMLPreElement>): React.ReactElement => {
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
  if (
    // children is code element
    preProps.children &&
    // @ts-expect-error code props
    preProps.children.props &&
    // @ts-expect-error if children is actually a <code>
    preProps.children.type === "code"
  ) {
    // we have a <pre><code> situation
    const {
      children: codeString,
      className = "",
      ...props
      // @ts-expect-error code props
    } = preProps.children.props

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
