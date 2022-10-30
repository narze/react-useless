import { useState } from "react"
import Card from "../components/Card"
import { useForeignerTTS } from "../hooks/useForeignerTTS"

const ForignerTTSValue = () => {
  const forignerTTSing = useForeignerTTS()

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
        <br />
        <button
          onClick={() => {
            forignerTTSing(text)
          }}
        >
          Get TTS
        </button>
      </div>
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useForeignerTTS - get a TTS from a random language",
    examples: [
      {
        code: "const forignerTTSing = useForeignerTTS();forignerTTSing('some text')",
        value: <ForignerTTSValue />,
      },
    ],
    githubUsername: "myrfion",
  }

  return <Card {...cardProps} />
}
