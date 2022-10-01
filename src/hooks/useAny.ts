import { useMemo } from "react"

export function useAny(value: any): any {
  const result = useMemo(() => value as any, [])

  return result
}
