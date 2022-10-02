import { DefinitelyNotAny } from "./types"

export function useFreeze(fn: () => void): DefinitelyNotAny {
  fn()
  return useFreeze(fn)
}
