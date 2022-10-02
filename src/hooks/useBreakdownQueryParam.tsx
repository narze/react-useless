import { useState } from "react"

export const useBreakdownQueryParam = (str: string) => {
  const [_str, _setStr] = useState(str)
  return _str.split("&").map((e) => {
    const [name, value] = e.split("=")
    return { name, value }
  })
}
