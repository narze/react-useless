import { useMemo } from "react"

export function useSus(...args: DefinitelyNotAny[]) {
  const result = useMemo(() => "ඞ", [])

  return result
}
