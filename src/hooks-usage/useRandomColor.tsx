import { useState } from "react"

import Card from "../components/Card"
import { useRandomColor } from "../hooks/useRandomColor"

const RandomColorCard = () => {
  const [color, setColor] = useState(useRandomColor())

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <button
          style={{
            borderColor: color,
            color: color,
            outline: "none",
          }}
          onClick={() => {
            setColor(useRandomColor())
          }}
        >
          click me
        </button>
      </div>
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useRandomColor - returns random color",
    examples: [
      { code: "const value = useRandomColor()", value: <RandomColorCard /> },
    ],
    githubUsername: "jirasin02",
  }

  return <Card {...cardProps} />
}
