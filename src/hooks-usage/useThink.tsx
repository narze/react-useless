import Card from "../components/Card"
import { useThink } from "../hooks/useThink"

export default function () {
  const cardProps = {
    desc: "useThink - a useThink hook that returns think emoji.",
    examples: [
      { code: "const value = useThink()", value: useThink() },
      {
        code: "const anotherValue = useThink()",
        value: useThink(),
      },
    ],
    githubUsername: "narze",
  }

  return <Card {...cardProps} />
}
