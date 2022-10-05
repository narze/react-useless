import Card from "../components/Card"
import { useOdd } from "../hooks/useOdd"

export default function () {
  const cardProps = {
    desc: "useOdd - a useful hook to check number is odd or not.",
    examples: [
      { code: "const value = useOdd(2)", value: `${useOdd(2)}` },
      {
        code: "const anotherValue = useOdd(1)",
        value: `${useOdd(1)}`,
      },
    ],
    githubUsername: "paphonb",
  }

  return <Card {...cardProps} />
}
