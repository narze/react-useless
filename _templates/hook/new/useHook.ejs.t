---
to: src/hooks/<%=name%>.ts
---
import { useState } from "react"
import { DefinitelyNotAny } from "./types"

export function <%=name%>(initialValue: DefinitelyNotAny) {
  const [value, _setValue] = useState(initialValue)

  return value
}
