import { useMemo } from "react"

export function useSmile(...args: DefinitelyNotAny[]) {
  const result = useMemo(() => '😊', [])

  return result
}