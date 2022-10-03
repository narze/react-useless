import { useMemo } from "react"

export function useError() {
  const ERRORS = useMemo(
    () => [ReferenceError(), TypeError(), RangeError(), SyntaxError()],
    []
  )

  throw ERRORS[Math.floor(Math.random() * 4)]
}
