import { useMemo } from "react"
import { DefinitelyNotAny } from "./types"

export function useOKHand(...args: DefinitelyNotAny[]) {
  const result = useMemo(() => "👌", [])

  return result
}
