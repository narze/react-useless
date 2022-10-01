import { useMemo } from "react"

export function useCuteAndFunny(...args: DefinitelyNotAny[]) {
  const result = useMemo(() => "😭", [])

  return result
}
