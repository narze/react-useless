import Card from "../components/Card"
import { useRandomCodingStamina } from "../hooks/useRandomCodingStamina"

export default function () {
  const cardProps = {
    desc: "useRandomCodingStamina - This hook will return beverage to add more stamina while coding.",
    examples: [
      {
        code: "const beverage = useRandomCodingStamina()",
        value: `Your stamina's add up is ${useRandomCodingStamina()}`,
      },
    ],
    githubUsername: "sikkapat79",
  }

  return <Card {...cardProps} />
}
