import Card from "../components/Card"
import { useTrulyRandom } from "../hooks/useTrulyRandom"

export default function () {
  const cardProps = {
    desc: "useTrulyRandom - returns unpredictable randomization integer",
    examples: [
      {
        code: "const { randomNumber } = useTrulyRandom({ min: 1, max: 10000000 })",
        value: useTrulyRandom({ min: 1, max: 10000000 }).randomNumber,
      },
    ],
    githubUsername: "sikkapat79",
  }

  return <Card {...cardProps} />
}
