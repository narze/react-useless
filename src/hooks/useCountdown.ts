import { useState } from "react"

type Result = [number, number, () => void]

export function useCountdown(max_range: number): Result {
  if (max_range <= 0) throw new Error("Only positive value is allowed")

  const [value, setValue] = useState(max_range)
  const [subtrahend, setSubtrahend] = useState(1)
  //const [fixedPoint, setFixedPoint] = useState(0)
  const handleClick = () => {
    let currentSubtrahend = subtrahend
    if (value - currentSubtrahend <= 0) {
      currentSubtrahend = currentSubtrahend * 0.1
      //setFixedPoint((prev) => prev+1)
    }

    setValue((prev) => value - currentSubtrahend)
    setSubtrahend((prev) => currentSubtrahend)
  }

  return [value, subtrahend, handleClick]
}
