import { useState } from "react"

const languages = ["uk", "ru", "ja", "es", "th"]

function buildTTSUrl(text: string, langCode: string) {
  return `https://tts-api.vercel.app/api/tts?text=${text}&lang=${langCode}`
}

export function useForeignerTTS() {
  return (text: string) => {
    if (window != undefined && window != null) {
      const randomLang = languages[Math.floor(Math.random() * languages.length)]

      return window.open(buildTTSUrl(text, randomLang))
    }
  }
}
