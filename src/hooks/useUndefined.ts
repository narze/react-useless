import { useMemo } from "react"

export const useUndefined = () => {
  const value = useMemo(() => undefined, [])

  return value
}
