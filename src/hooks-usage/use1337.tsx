import { useState } from "react"
import Card from "../components/Card"
import { use1337 } from "../hooks/use1337"

const Make1337 = () => {
  const [text, setText] = useState("Leet")

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
        <br />
        value is {use1337(text)}
      </div>
    </>
  )
}
export default function () {
  const cardProps = {
    desc: "use1337 - make word 1337",
    examples: [
      { code: 'const value = use1337("Leet")', value: use1337("Leet") },
      <Make1337 />,
    ],
    githubUsername: "palmcm",
  }

  return <Card {...cardProps} />
}
