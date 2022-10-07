import Card from "../components/Card"
import { useFullStop } from "../hooks/useFullStop"

export default function () {
  const cardProps = {
    desc: "useFullStop - a useless hook that return string value with (.) full stop.",
    examples: [
      {
        code: `const value = useFullStop("Hello World")`,
        value: useFullStop("Hello World"),
      },
    ],
    githubUsername: "ercusz",
  }
  return <Card {...cardProps} />
}
