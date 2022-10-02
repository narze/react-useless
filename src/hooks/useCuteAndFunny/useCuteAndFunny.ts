import { useMemo } from "react"
import { DefinitelyNotAny } from "../types"

export function useCuteAndFunny(...args: DefinitelyNotAny[]) {
  const result = useMemo(() => "😭", [])

  return result
}
