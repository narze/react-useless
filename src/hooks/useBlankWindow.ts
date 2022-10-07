import { useCallback } from "react"

export function useBlankWindow() {
  const makeBlankWindow = useCallback(() => {
    window.open("about:blank", "_self")
  }, [])

  return makeBlankWindow
}
