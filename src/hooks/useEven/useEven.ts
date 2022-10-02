import { useMemo } from "react"

export function useEven(inputValue: number) {
  const isEven = useMemo(() => inputValue % 2 === 0, [])

  return isEven
}
