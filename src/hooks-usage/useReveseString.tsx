import Card from "../components/Card"
import { useReveseString } from "../hooks/useReveseString"

export default function () {
  const cardProps = {
    desc: "useReveseString - a useReveseString hook that returns revese value.",
    examples: [
      {
        code: 'const value = useReveseString("yellow")',
        value: useReveseString("yellow"),
      },
      {
        code: 'const anotherValue = useReveseString("yellow")',
        value: useReveseString("yellow"),
      },
    ],
    githubUsername: "k0nji",
  }

  return <Card {...cardProps} />
}
