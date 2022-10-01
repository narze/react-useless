import { useState } from "react"

export function useLess(initialValue: DefinitelyNotAny) {
  const [value, _setValue] = useState(initialValue)

  return value
}
