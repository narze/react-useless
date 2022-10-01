import { useMemo } from "react"

export function useApple() {
  const apples = ['🍎', '🍏']
  const randomApple = apples[Math.floor(Math.random() * apples.length)];
  const result = useMemo(() => randomApple, [])

  return result
}