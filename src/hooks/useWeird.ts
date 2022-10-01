import React, { useEffect, useMemo, useState } from "react"

const colors = [
  "#fafafa",
  "#dadada",
  "#abcdef",
  "rgba(12,12,12,0.5)",
  "hsl(171, 100%, 50%)",
]

/**
 * A React hook that does something weird because it is so weird I don't even understand
 * why I should add this hook and even JSDoc.
 *
 * @param initialValue The initial value of color
 * @returns Style for weird CSS
 */
export function useWeird(initialValue: number): React.CSSProperties {
  // Haha
  const [num, setNum] = useState(initialValue)
  // Degree
  const [rotation, setRotation] = useState(0)

  // Actually, memo would be inefficient here.
  const color = useMemo(() => colors[num % colors.length], [num])

  // Hahahaha
  useEffect(() => {
    setInterval(() => {
      setRotation((x) => x + 10)
      setNum((x) => x + 1)
    }, 5000)
  }, [])

  return {
    background: color,
    transform: `rotateZ(${rotation}deg)`,
  }
}
