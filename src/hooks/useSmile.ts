import { useMemo } from "react"
import { DefinitelyNotAny } from "./types"

export function useSmile(...args: DefinitelyNotAny[]) {
  const result = useMemo(() => "😊", [])

  return result
}
