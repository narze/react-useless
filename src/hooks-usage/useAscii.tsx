import Card from "../components/Card"
import { useAscii } from "../hooks/useAscii"

export default function () {
  const cardProps = {
    desc: "useAscii - useAscii(...)",
    examples: [
      {
        code: "const value = useAscii('hello')",
        value: useAscii("hello"),
      },
    ],
    githubUsername: "jonasvag",
  }

  return <Card {...cardProps} />
}
