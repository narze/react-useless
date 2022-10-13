import { useState } from "react"
import useUse from "../hooks/useUse"

import Card from "../components/Card"

export const UseUse = () => {
  let [counter, setCounter] = useUse(useState, 0) as [
    number,
    (v: number) => void
  ]

  const increase = () => setCounter(++counter)
  const decrease = () => setCounter(--counter)

  return (
    <>
      <h1>Counter {counter}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useUse - add extra nested function when using hook",
    examples: [
      {
        code: `const [counter, setCounter] = useUse(useState, 0)`,
        value: <UseUse />,
      },
    ],
    githubUsername: "saltyAom",
  }

  return <Card {...cardProps} />
}
