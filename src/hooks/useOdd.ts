import { useEven } from "./useEven"

export function useOdd(inputValue: number) {
  return !useEven(inputValue)
}
