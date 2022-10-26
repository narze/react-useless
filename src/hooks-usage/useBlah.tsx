import Card from "../components/Card"
import { useBlah } from "../hooks/useBlah"

export default function () {
  const cardProps = {
    desc: "useBlah - Very useful when you don't know what to say",
    examples: [
      {
        code: `const saySomething = useBlah()`,
        value: `${useBlah()}`,
      },
    ],
    githubUsername: "Xlaperr",
  }

  return <Card {...cardProps} />
}
