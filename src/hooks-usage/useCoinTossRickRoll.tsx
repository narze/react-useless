import Card from "../components/Card"
import { useCoinTossRickRoll } from "../hooks/useCointossRickRoll"

export default function () {
  const cardProps = {
    desc: "useCoinTossRickRoll - returns a string, 50/50 chance of returning Never gonna give you up youtube url",
    examples: [
      {
        value: <a href={useCoinTossRickRoll()}>Click me</a>,
        code: "const url = useCoinTossRickRoll()",
      },
    ],
    githubUsername: "DrowningToast",
  }

  return <Card {...cardProps} />
}
