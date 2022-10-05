import Card from "../components/Card"
import { useUndefined } from "../hooks/useUndefined"

export default function () {
  const cardProps = {
    desc: "useUndefined - a useless hook that returns undefined.",
    examples: [
      {
        code: `const value = useUndefined()`,
        value: `${useUndefined()}`,
      },
    ],
    githubUsername: "armsasmart",
  }

  return <Card {...cardProps} />
}
