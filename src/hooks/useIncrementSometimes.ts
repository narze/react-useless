import { useState } from "react"
import { DefinitelyNotAny } from "./types"

type Result = [number, () => void]

export function useIncrementSometimes(max_range: number): Result {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    if (Math.floor(Math.random() * max_range) % 2 == 0) {
      setValue((prev) => prev + 1)
    }
  }

  return [value, handleClick]
}
