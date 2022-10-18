import { DefinitelyNotAny } from "./types"

export function useChanOCha(initialValue: DefinitelyNotAny) {
  const cfLetter = (str: string | undefined) => {
    if (!str) return ""
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  const lName = "Chan-o-cha"
  return `${cfLetter(initialValue)} ${lName}`
}
