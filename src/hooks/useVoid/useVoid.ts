import { useLayoutEffect } from "react"
import { DefinitelyNotAny } from "../types"

export function useVoid(...args: DefinitelyNotAny[]) {
  useLayoutEffect(() => {
    // do a little bit of trolling
  }, [])
}
