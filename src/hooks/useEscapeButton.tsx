import { useEffect, useState } from "react"

type Position = {
  x: number
  y: number
}

const captions = [
  "Click me!",
  "Please Click me!",
  "Did you see me? Click me now!",
  "You are slowpoke. Aren't you?",
  "Notice me senpai 💓 Please click on me!",
  "Click me if you can",
]

const pick = <T,>(arr: Array<T>): T => {
  const i = Math.floor(Math.random() * arr.length)
  return arr[i]
}

export const useEscapeButton = () => {
  const [button, setButton] = useState<HTMLButtonElement | undefined>(undefined)
  const [visible, setVisible] = useState<boolean>(true)
  const [position, setPosition] = useState<Position>({
    x: 0,
    y: 0,
  })

  useEffect(
    () => () => {
      if (button) document.body.removeChild(button)
    },
    [button]
  )

  const onClick = () => {
    setVisible(false)

    const btn = document.createElement("button")
    const { style } = btn

    const handler = () => {
      btn.textContent = pick(captions)

      const { innerHeight, innerWidth } = window
      const { offsetWidth, offsetHeight } = btn

      const width = innerWidth - offsetWidth
      const height = innerHeight - offsetHeight

      const y = Math.floor(Math.random() * height)
      const x = Math.floor(Math.random() * width)

      setPosition({ x, y })

      style.top = y + "px"
      style.left = x + "px"
    }

    btn.textContent = pick(captions)

    style.display = "block"
    style.position = "fixed"
    style.zIndex = "999"
    style.backgroundColor = "#4a246e"

    style.top = "0"
    style.left = "0"

    btn.addEventListener("mousemove", handler)

    document.body.appendChild(btn)
    setButton(btn)
  }

  return [
    visible && <button onClick={onClick}>Click me!</button>,
    position,
  ] as const
}
