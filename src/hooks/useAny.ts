import { useMemo } from "react"
import { DefinitelyNotAny } from "./types"

export function useAny(value: DefinitelyNotAny): DefinitelyNotAny {
  const result = useMemo(() => value as DefinitelyNotAny, [])

  return result
}
