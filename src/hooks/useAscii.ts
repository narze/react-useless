import { useMemo } from "react"
import { DefinitelyNotAny } from "./types"

export function useAscii(...args: DefinitelyNotAny[]) {
  const result = useMemo(() => `
  ┌∩┐(◣_◢)┌∩┐   ¯\_(ツ)_/¯   (-(-_(-_-)_-)-)
          `, [])

  return result
}
