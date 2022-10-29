import { useState } from "react"
import Card from "../components/Card"
import { useLove } from "../hooks/useLove"

const LoveEmoji = () => {
  const [emoji, setEmoji] = useState(useLove())

  return (
    <>
      <div>
        <button onClick={() => setEmoji(useLove())}>
          Give me love {emoji}
        </button>
      </div>
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useLove - give love emoji to confess your love",
    examples: [
      {
        code: "const emoji = useLove()",
        value: <LoveEmoji />,
      },
    ],
    githubUsername: "iamprompt",
  }

  return <Card {...cardProps} />
}
