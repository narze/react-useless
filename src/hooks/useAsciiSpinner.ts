import { useEffect, useMemo, useRef, useState } from "react"

const frames = `\\-/|`.split("")
// const frames = `▙▛▜▟`.split("")
// const frames = `▤▧▥▨`.split("")
// const frames = `◴◵◶◷`.split("")
// const frames = `◩◪`.split("")
// const frames = `◰◱◲◳`.split("")
// const frames = `◐◓◑◒`.split("")

export const useAsciiSpinner = (duration: number = 600) => {
  const [frame, setFrame] = useState<number>(0)
  const curRef = useRef<number>(0)

  const animate = (time: number) => {
    setFrame(Math.floor((time * frames.length) / duration) % frames.length)
    curRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    curRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(curRef.current)
  }, [])

  return `${frames[frame]}`
}
