import Card from "../components/Card"
import { useApple } from "../hooks/useApple"

export default function () {
  const cardProps = {
    desc: "useApple - Does nothing, and returns random apple.",
    examples: [
      {
        code: "const value = useApple()",
        value: `value is either 🍎 or 🍏 : ${useApple()}`,
      },
    ],
    githubUsername: "piromsurang",
  }
  return <Card {...cardProps} />
}
