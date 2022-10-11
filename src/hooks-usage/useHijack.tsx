import { useState } from "react"
import Card from "../components/Card"
import { useHijack } from "../hooks/useHijack"

const UseHijack: React.FC = () => {
  const [hijacked, setHijacked] = useState(false)

  if (hijacked) {
    useHijack("sorry, you are hijacked")
    return <div />
  } else {
    return <button onClick={() => setHijacked(true)}>Click to hijack</button>
  }
}

export default function () {
  const cardProps = {
    desc: "useHijack - returns everything to the given message. React will break. Back button does not work.",
    examples: [
      {
        code: 'useHijack("sorry, you are hijacked")',
        value: <UseHijack />,
      },
    ],
    githubUsername: "wiennat",
  }

  return <Card {...cardProps} />
}
