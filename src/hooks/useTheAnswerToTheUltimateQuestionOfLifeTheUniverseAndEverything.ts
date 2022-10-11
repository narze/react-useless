import { useMemo, useState } from "react"
import { DefinitelyNotAny } from "./types"

type Answer = [number, () => void]

export function useTheAnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything(
  anything: DefinitelyNotAny
): Answer {
  const [value, setValue] = useState(anything)
  const handleClick = () => setValue(42)

  return [value, handleClick]
}
