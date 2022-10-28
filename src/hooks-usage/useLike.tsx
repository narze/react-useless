import { useState } from "react"
import Card from "../components/Card"
import { useLike } from "../hooks/useLike"

const RandomLikeEmoji = () => {
  const [emoji, setEmoji] = useState(useLike())

  return (
    <>
      <div>
        <button onClick={() => setEmoji(useLike())}>click me {emoji}</button>
      </div>
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useLike - returns random like emoji 👍",
    examples: [
      {
        code: "const value = useLike()",
        value: <RandomLikeEmoji />,
      },
    ],
    githubUsername: "n-jaisabai",
  }

  return <Card {...cardProps} />
}
