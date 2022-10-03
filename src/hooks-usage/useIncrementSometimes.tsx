import { useState } from "react"
import Card from "../components/Card"
import { useIncrementSometimes } from "../hooks/useIncrementSometimes"

export const UseIncrementSometimes = () => {
  const CHANCE = 1000
  const [value, handleClick] = useIncrementSometimes(CHANCE)
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

// Default export a functional component which includes hook's usage
// You can use our Card component or roll your own container component
export default function () {
  const cardProps = {
    desc: "useIncrementSometimes - a hook that increment sometimes but sometimes it just doesn't :tf:",
    examples: [
      // 1.) For simple form, just pass the hook's return value
      {
        code: "const [value, hanldeClick] = useIncrementSometimes(1000)",
        value: <UseIncrementSometimes />,
      },
    ],
    githubUsername: "gandastik",
  }

  return <Card {...cardProps} />
}
