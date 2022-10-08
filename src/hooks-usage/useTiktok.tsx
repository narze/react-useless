import { useState } from "react"
import Card from "../components/Card"
import { useTiktok } from "../hooks/useTiktok"

const TiktokCard = () => {
  const tiktoking = useTiktok()

  const [text, setText] = useState("ใจเกเร")

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
            tiktoking(text)
          }}
        >
          Tiktoking
        </button>
      </div>
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useTiktok - search on Tiktok, because kids nowadays prefer to search content on Tiktok",
    examples: [
      {
        code: `const tiktoking = useTiktok();tiktoking('some text')`,
        value: <TiktokCard />,
      },
    ],
    githubUsername: "ntsd",
  }

  return <Card {...cardProps} />
}
