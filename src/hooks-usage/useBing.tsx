import { useState } from "react"

import Card from "../components/Card"
import { useBing } from "../hooks/useBing"

const BingValue = () => {
  const binging = useBing()

  const [text, setText] = useState("steve ballmer going crazy on stage")

  return (
    <>
      <div>
        <input
          value={text}
          type="text"
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
        <button
          onClick={() => {
            binging(text)
          }}
        >
          Bing me!
        </button>
      </div>
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useBing - use bing for some reason",
    examples: [
      {
        code: `const binging = useBing();binging('some text')`,
        value: <BingValue />,
      },
    ],
    githubUsername: "igoro00",
  }

  return <Card {...cardProps} />
}
