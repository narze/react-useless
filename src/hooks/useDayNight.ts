import { useRef } from "react"

type Result = [(element: HTMLElement | null) => void, () => void]

export const useDayNight = (): Result => {
  const state = useRef<HTMLElement | undefined>()

  const ref = (node: HTMLElement | null) => {
    if (!node || node === state.current) return
    state.current = node
  }

  const lightSwitch = () => {
    const btnSwitch = document.querySelector(".btn-theme-switch") as HTMLElement
    btnSwitch?.click()

    const theme = document.querySelector(".App")?.getAttribute("data-theme")
    theme === "light" ? letItGlow("🌙") : letItGlow("☀️")
  }

  const letItGlow = (source: String) => {
    document.querySelector(".day-night")?.remove()
    const node = document.querySelector(".drawer-content")
    const moon = document.createElement("div")
    moon.className = "day-night"
    moon.innerHTML = `<div class="glow"> ${source} </div>`

    node?.setAttribute("style", "position: relative")
    moon.setAttribute(
      "style",
      `position: absolute;
             top: 12%;   
             left: 20%;
             font-size: 80px;
            `
    )
    node?.appendChild(moon)
  }

  return [ref, lightSwitch]
}
