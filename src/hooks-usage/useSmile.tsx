import Card from "../components/Card"
import { useSmile } from "../hooks/useSmile"

export default function () {
  const cardProps = {
    desc: "useSmile - 😊",
    examples: [
      {
        code: "const value = useSmile('hello')",
        value: useSmile("hello"),
      },
    ],
    githubUsername: "b5710546232",
  }

  return <Card {...cardProps} />
}
