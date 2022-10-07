import Card from "../components/Card"
import { useSus } from "../hooks/useSus"

export default function () {
  const cardProps = {
    desc: "useSus - ඞ",
    examples: [
      {
        code: `const value = useSus("createSus")`,
        value: useSus(),
      },
    ],
    githubUsername: "richeyphu",
  }

  return <Card {...cardProps} />
}
