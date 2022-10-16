import { useState } from "react"
import Card from "../components/Card"
import { useRandomEmoji } from "../hooks/useRandomEmoji"

const RandomEmojiCard = () => {
  const [emoji, setEmoji] = useState(useRandomEmoji())

  return (
    <>
      <div>
        <button onClick={() => setEmoji(useRandomEmoji())}>
          click me {emoji}
        </button>
      </div>
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useRandomEmoji - returns random emoji 😂",
    examples: [
      {
        code: "const value = useRandomEmoji()",
        value: <RandomEmojiCard />,
      },
    ],
    githubUsername: "Mixko50",
  }

  return <Card {...cardProps} />
}
