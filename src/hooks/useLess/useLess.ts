import { useState } from "react"
import { DefinitelyNotAny } from "../types"

export function useLess(initialValue: DefinitelyNotAny) {
  const [value, _setValue] = useState(initialValue)

  return value
}
