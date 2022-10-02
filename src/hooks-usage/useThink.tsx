import Card from "../components/Card"
import { useThink } from "../hooks/useThink"

export default function () {
  const cardProps = {
    desc: "useThink - a useThink hook that returns think emoji.",
    examples: [
      { code: "const value = useThink()", value: useThink() },
      {
        code: "const value = useThink()",
        value: useThink(),
      },
    ],
    githubUsername: "k0nji",
  }

  return <Card {...cardProps} />
}
