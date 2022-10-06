import { createElement, useEffect, useState } from "react"

export function useInfiniteLoop() {
  const [state, setState] = useState(0)

  useEffect(() => {
    setState(state + 1)
  }, [state])

  return createElement("img", {
    src: "https://media.tenor.com/ZUzs4bi7T0YAAAAC/mutsuki.gif",
  })
}
