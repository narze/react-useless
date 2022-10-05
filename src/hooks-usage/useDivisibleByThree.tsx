import Card from "../components/Card"
import { useDivisibleByThree } from "../hooks/useDivisibleByThree"

export default function () {
  const cardProps = {
    desc: "useDivisibleByThree - an overengineered hook to check if a number is Divisible by Three or not.",
    examples: [
      {
        code: "const value = useDivisibleByThree(200)",
        value: useDivisibleByThree(200).toString(),
      },
      {
        code: "const anotherValue = useDivisibleByThree(1233)",
        value: useDivisibleByThree(1233).toString(),
      },
    ],
    githubUsername: "Parajulibkrm",
  }

  return <Card {...cardProps} />
}
