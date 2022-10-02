import Card from "../components/Card"
import { useReverseString } from "../hooks/useReverseString"

export default function () {
  const cardProps = {
    desc: "useReverseString - a useReverseString hook that returns reverse value.",
    examples: [
      {
        code: 'const value = useReverseString("yellow")',
        value: useReverseString("yellow"),
      },
      {
        code: 'const anotherValue = useReverseString("yellow")',
        value: useReverseString("yellow"),
      },
    ],
    githubUsername: "k0nji",
  }

  return <Card {...cardProps} />
}
