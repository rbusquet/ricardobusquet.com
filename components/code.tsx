import * as React from "react"
import styled from "styled-components"
import theme from "prism-react-renderer/themes/duotoneLight"

import Highlight, { defaultProps, Language } from "prism-react-renderer"

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
`

const Line = styled.div`
  display: table-row;
`

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`

const LineContent = styled.span`
  display: table-cell;
`

interface Props {
  codeString: string
  language: Language
  metastring: string
}

const Code: React.FunctionComponent<Props> = ({
  codeString,
  language,
}: Props) => {
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line
              key={i}
              {...getLineProps({
                line,
                key: i,
              })}
            >
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  )
}

export default Code
