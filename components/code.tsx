import Highlight, { defaultProps, Language } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/okaidia"

import cx from "classnames"

import styles from "./code.module.css"

function WithLineNumbers({
  codeString,
  language,
}: {
  codeString: string
  language: Language
}): JSX.Element {
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={codeString}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={cx(styles.wrapper, className)} style={style}>
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({ line, key: i, className: styles.line })}
            >
              <span className={styles.lineno}>{i + 1}</span>
              <span className={styles.linecontent}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default WithLineNumbers
