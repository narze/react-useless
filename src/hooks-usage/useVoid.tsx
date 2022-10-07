import Card from "../components/Card"
import { useVoid } from "../hooks/useVoid"

export default function () {
  const cardProps = {
    desc: "useVoid - Does nothing, and returns nothing.",
    examples: [{ code: "const value = useVoid()", value: useVoid() }],
    githubUsername: "rayriffy",
  }

  return <Card {...cardProps} />
}
