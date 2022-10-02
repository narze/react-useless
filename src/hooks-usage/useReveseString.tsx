import Card from "../components/Card"
import { useReverseString } from "../hooks/useReverseString"

export default function () {
  const cardProps = {
    desc: "useReveseString - a useReveseString hook that returns reverse value.",
    examples: [
      {
        code: 'const value = useReveseString("yellow")',
        value: useReverseString("yellow"),
      },
      {
        code: 'const anotherValue = useReveseString("yellow")',
        value: useReverseString("yellow"),
      },
    ],
    githubUsername: "k0nji",
  }

  return <Card {...cardProps} />
}
