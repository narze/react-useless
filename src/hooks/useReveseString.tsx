import { useState } from "react"

export const useReveseString = (initialValue: string) => {
  const [value, _setValue] = useState(initialValue)
  return value.split("").reverse().join("")
}
