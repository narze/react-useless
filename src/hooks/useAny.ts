import { useMemo } from "react"

export function useAny(value: DefinitelyNotAny): DefinitelyNotAny {
  const result = useMemo(() => value as DefinitelyNotAny, [])

  return result
}
