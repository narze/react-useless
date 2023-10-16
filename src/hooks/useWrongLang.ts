import { WrongLang } from "wl.js"
const wl = new WrongLang()

export function useWrongLang(
  primaryLayout: keyof typeof wl.layout,
  secondaryLayout: keyof typeof wl.layout,
  text: string
) {
  return wl.languageSwap({
    layout: {
      primary: primaryLayout,
      secondary: secondaryLayout,
    },
    text,
  })
}
