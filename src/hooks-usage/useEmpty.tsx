import Card from "../components/Card"
import { useEmpty } from "../hooks/useEmpty"

export default function () {
  const cardProps = {
    desc: "useEmpty - a useless hook that returns empty string.",
    examples: [
      {
        code: `const value = useEmpty()`,
        value: useEmpty(),
      },
    ],
    githubUsername: "armsasmart",
  }
  return <Card {...cardProps} />
}
