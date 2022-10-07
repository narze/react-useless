import { useEffect, useRef, useState } from "react"

type Result = [(element: HTMLElement | null) => void, () => void, () => void]

export const useShy = (): Result => {
  const state = useRef<HTMLElement | undefined>()
  const [isLeft, setIsLeft] = useState<boolean>(true)
  const toggle = () => setIsLeft(!isLeft)
  const ref = (node: HTMLElement | null) => {
    if (!node || node === state.current) return
    state.current = node
  }
  const onClick = () => {
    if (!state.current) {
      return
    }
    state.current.innerText = "Kyaa! 😳"
  }

  useEffect(() => {
    if (!state.current) return

    if (!isLeft) {
      state.current.style.marginLeft = `${state.current.clientWidth + 4}px`
    } else {
      state.current.style.marginLeft = "0px"
    }
  }, [isLeft])

  return [ref, () => toggle(), () => onClick()]
}
