import { useLayoutEffect } from "react";

export function useVoid(...args: DefinitelyNotAny[]) {
  useLayoutEffect(() => {
    // do a little bit of trolling
  }, [])
}