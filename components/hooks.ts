import { useState, useEffect } from "react"

export function useColorScheme(): "dark" | "light" {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }
    const media = matchMedia("(prefers-color-scheme: dark)")
    const listener = (ev: MediaQueryListEvent) => {
      setDark(ev.matches)
    }

    if (media.matches) setDark(true)

    media.addEventListener("change", listener)

    return () => media.removeEventListener("change", listener)
  }, [])
  return dark ? "dark" : "light"
}
