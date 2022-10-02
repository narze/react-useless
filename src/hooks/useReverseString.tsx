import { useState } from "react"

export const useReverseString = (initialValue: string) => {
  const [value, _setValue] = useState(initialValue)
  return value.split("").reverse().join("")
}
