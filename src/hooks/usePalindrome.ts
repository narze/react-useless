import { useState } from "react"
import { DefinitelyNotAny } from "./types"

export function usePalindrome(initialValue: DefinitelyNotAny) {
  const [value, _setValue] = useState(initialValue)
  return value + value.split("").reverse().join("")
}
