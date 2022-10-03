import { useEffect, useRef, useState } from "react"

const SpinKeyframe: Keyframe[] = [
  {
    transform: "rotate(0deg)",
  },
  {
    transform: "rotate(360deg)",
  },
]

type Result = [(element: HTMLElement | null) => void, () => void]

export const useYouSpinMyXRightRound = (rounds?: number): Result => {
  const state = useRef<HTMLElement | undefined>()
  const [spin, setSpin] = useState<boolean>(false)

  const ref = (node: HTMLElement | null) => {
    if (!node || node === state.current) return
    state.current = node
  }

  useEffect(() => {
    if (!state.current) return

    if (spin) {
      state.current.style.animationTimingFunction = "linear"
      state.current.animate(SpinKeyframe, {
        iterations: rounds ? rounds : Number.MAX_SAFE_INTEGER,
        duration: 500,
      })
    } else {
      state.current.animate([], 0)
    }
  }, [spin, rounds])

  return [ref, () => setSpin(!spin)]
}
