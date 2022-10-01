import { useMemo } from "react"
import { DefinitelyNotAny } from "./types"

export function useSus(...args: DefinitelyNotAny[]) {
  const result = useMemo(() => "ඞ", [])

  return result
}
