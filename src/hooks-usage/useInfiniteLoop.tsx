import { useState } from "react"
import Card from "../components/Card"
import { useInfiniteLoop } from "../hooks/useInfiniteLoop"

function CursedComponent() {
  const Value = useInfiniteLoop()

  return Value
}

function SafetyWrapper() {
  const [cursed, setCursed] = useState(false)

  if (cursed) {
    return <CursedComponent />
  } else {
    return <button onClick={() => setCursed(true)}>Click for disaster</button>
  }
}

export default function () {
  const cardProps = {
    desc: "useInfiniteLoop - Heat your laptop with infinite loop (sad that it does not crash your app or flood console on prod)",
    examples: [
      {
        code: "const Value = useInfiniteLoop()",
        value: <SafetyWrapper />,
      },
    ],
    githubUsername: "Leomotors",
  }

  return <Card {...cardProps} />
}
