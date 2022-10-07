import Card from "../components/Card"
import { useEven } from "../hooks/useEven"

export default function () {
  const cardProps = {
    desc: "useEven - a useful hook to check number is even or not.",
    examples: [
      { code: "const value = useEven(2)", value: useEven(2) },
      {
        code: "const anotherValue = useEven(1)",
        value: useEven(1),
      },
    ],
    githubUsername: "rayriffy",
  }

  return <Card {...cardProps} />
}
