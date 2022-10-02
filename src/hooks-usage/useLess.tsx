import Card from "../components/Card"
import { useLess } from "../hooks/useLess/useLess"

export default function () {
  const cardProps = {
    desc: "useLess - a useless hook that returns initial value.",
    examples: [
      { code: "const value = useLess(0)", value: useLess(0) },
      {
        code: 'const anotherValue = useLess("ඞ")',
        value: useLess("ඞ"),
      },
    ],
    githubUsername: "narze",
  }

  return <Card {...cardProps} />
}
