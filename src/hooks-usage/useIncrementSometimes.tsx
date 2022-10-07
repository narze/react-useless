import { useState } from "react"
import Card from "../components/Card"
import { useIncrementSometimes } from "../hooks/useIncrementSometimes"

export const UseIncrementSometimes = () => {
  const max_range = 1000
  const [value, handleClick] = useIncrementSometimes(max_range)
  return (
    <>
      {value}
      <div>
        <button className="hover:ring-1" onClick={handleClick}>
          Click Me 😏
        </button>
      </div>
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useIncrementSometimes - a hook that increment sometimes but sometimes it just doesn't :tf:",
    examples: [
      {
        code: "const [value, hanldeClick] = useIncrementSometimes(1000)",
        value: <UseIncrementSometimes />,
      },
    ],
    githubUsername: "gandastik",
  }

  return <Card {...cardProps} />
}
