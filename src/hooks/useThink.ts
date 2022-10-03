import { useMemo } from "react"
import { DefinitelyNotAny } from "./types"

export function useThink(...args: DefinitelyNotAny[]) {
  const result = useMemo(() => "🤔", [])

  return result
}
