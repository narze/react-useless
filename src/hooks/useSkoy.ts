import Skoy from "skoy"
import { useMemo } from "react"

export function useSkoy(m: string) {
  const isSkoy = useMemo(() => Skoy.convert(m), [])
  return isSkoy
}
