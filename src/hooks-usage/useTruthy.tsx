import Card from "../components/Card"
import { useTruthy } from "../hooks/useTruthy"

export default function () {
  const cardProps = {
    desc: "useTruthy - This hook will return true to eternity.",
    examples: [
      {
        code: "const isAccept = useTruthy()",
        value: `A: Should we hangout to night ?\n
        B: \n ${useTruthy() ? "Yes" : "No"}`,
      },
    ],
    githubUsername: "sikkapat79",
  }

  return <Card {...cardProps} />
}
