import { useState } from "react"
import Card from "../components/Card"
import { useRandomPassword } from "../hooks/useRandomPassword"

const RandomPasswordCard = () => {
  const [password, setPassword] = useState("")

  return (
    <>
      <div>
        <button onClick={() => setPassword(useRandomPassword(8))}>
          Random Password
        </button>
        {password && <div>Random Password is {password}</div>}
      </div>
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useRandomPassword - returns random password",
    examples: [
      {
        code: "const value = useRandomPassword(8)",
        value: <RandomPasswordCard />,
      },
    ],
    githubUsername: "Kittonn",
  }

  return <Card {...cardProps} />
}
