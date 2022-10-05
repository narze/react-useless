import Card from "../components/Card"
import { useAny } from "../hooks/useAny"

export default function () {
  const cardProps = {
    desc: "useAny - returns same value with DefinitelyNotAny type",
    examples: [
      {
        code: `const value = useAny(123)`,
        value: `${useAny(123)} (type will be "any")`,
      },
    ],
    githubUsername: "narze",
  }

  return <Card {...cardProps} />
}
