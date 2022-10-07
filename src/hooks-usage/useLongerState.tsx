import Card from "../components/Card"
import { useLongerState } from "../hooks/useLongerState"

export default function () {
  const cardProps = {
    desc: "useLongerState - it will return such a longer hook than original useState. Hahaha",
    examples: [
      {
        code: "const [countLongerState , setCountLongerState] = useLongerState[0]",
        value: `Current count is ${useLongerState(0)[0]}`,
      },
    ],
    githubUsername: "sikkapat79",
  }

  return <Card {...cardProps} />
}
