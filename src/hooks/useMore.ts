import { useState } from "react"
import { DefinitelyNotAny } from "./types"

export function useMore(initialValue: DefinitelyNotAny) {
  const [value, _setValue] = useState(initialValue)

  return value
}
