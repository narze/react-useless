import { createElement, useEffect, useState } from "react"

export function useInfiniteLoop() {
  const [state, setState] = useState(0)

  useEffect(() => {
    setState(state + 1)
    console.error(`
Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.
`)
  }, [state])

  return createElement("img", {
    src: "https://media.tenor.com/ZUzs4bi7T0YAAAAC/mutsuki.gif",
  })
}
