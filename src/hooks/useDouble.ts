import { useMemo } from "react"
import { DefinitelyNotAny } from "./types"

export function useDouble(initialValue: DefinitelyNotAny) {
  const result = useMemo(() => initialValue * 2, [])

  return result
}
