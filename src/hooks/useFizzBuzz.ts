import { useMemo } from "react"
import { DefinitelyNotAny } from "./types"

export function useFizzBuzz(inputValue: DefinitelyNotAny) {
  const fizzbuzz = useMemo(
    () =>
      inputValue % 15 === 0
        ? "FizzBuzz"
        : inputValue % 3 === 0
        ? "Fizz"
        : inputValue % 5 === 0
        ? "Buzz"
        : "",
    []
  )

  return fizzbuzz
}
