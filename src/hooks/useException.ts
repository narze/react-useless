import { useCallback } from "react"

export function useException() {
  return useCallback((error: string, ...args: any[]) => {
    throw new Error([error, ...args].join(", "))
  }, [])
}
