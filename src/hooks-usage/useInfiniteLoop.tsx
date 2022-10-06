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
    desc: "useInfiniteLoop - Flood your console with error caused by infinite loop and heat your laptop a bit (sad that it does not crash your app)",
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
