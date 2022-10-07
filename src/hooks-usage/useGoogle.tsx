import { useState } from "react"

import Card from "../components/Card"
import { useGoogle } from "../hooks/useGoogle"

const GoogleValue = () => {
  const googling = useGoogle()

  const [text, setText] = useState("Ricardo Milos")

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
            googling(text)
          }}
        >
          Googling
        </button>
      </div>
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useGoogle - use google before you ask someone a tech question",
    examples: [
      {
        code: `const googling = useGoogle();googling('some text')`,
        value: <GoogleValue />,
      },
    ],
    githubUsername: "ntsd",
  }

  return <Card {...cardProps} />
}
