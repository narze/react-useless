import { useEffect, useState } from "react"

export function useDate(): Date {
  const [current, setCurrent] = useState(new Date())

  useEffect(() => {
    setCurrent(new Date())
  })

  return current
}
