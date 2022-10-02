import { useEffect, useRef, useState } from "react"

type Result = [(element: HTMLElement | null) => void, () => void]

export const useUpsideDown = (): Result => {
  const state = useRef<HTMLElement | undefined>()
  const [rotated, setRotated] = useState<boolean>(false)

  const ref = (node: HTMLElement | null) => {
    if (!node || node === state.current) return
    state.current = node
  }

  useEffect(() => {
    if (!state.current) return

    state.current.style.transition = "transform 1s"
    state.current.style.transform = `rotate(${rotated ? 180 : 0}deg)`
  }, [rotated])

  return [ref, () => setRotated(!rotated)]
}
