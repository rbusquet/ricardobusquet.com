import Highlight, { defaultProps, Language } from "prism-react-renderer"
import darkTheme from "prism-react-renderer/themes/duotoneDark"
import lightTheme from "prism-react-renderer/themes/duotoneLight"

import cx from "classnames"

import styles from "./code.module.css"

import { useColorScheme } from "./hooks"

function WithLineNumbers({
  codeString,
  language,
}: {
  codeString: string
  language: Language
}): JSX.Element {
  const color = useColorScheme()
  return (
    <Highlight
      {...defaultProps}
      theme={color === "dark" ? darkTheme : lightTheme}
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
