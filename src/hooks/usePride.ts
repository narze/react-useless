import { useMemo } from "react"

export function usePride() {
  const prides = ["🏳️‍🌈", "👨‍❤️‍💋‍👨", "👩‍❤️‍💋‍👩"]
  const randomPride = prides[Math.floor(Math.random() * prides.length)]
  const emoji = useMemo(() => randomPride, [])
  return emoji
}
