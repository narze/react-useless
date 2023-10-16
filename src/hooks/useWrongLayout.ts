import { convert, EngLayout, ThaLayout } from "gode.js"

export function useWrongLayout(
  engLayout: EngLayout,
  thaLayout: ThaLayout,
  message: string
) {
  return convert(engLayout, thaLayout, message)
}
