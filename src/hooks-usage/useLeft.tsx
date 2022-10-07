import Card from "../components/Card"
import { useLeft } from "../hooks/useLeft"

export default function () {
  const cardProps = {
    desc: "useLeft - useLeft for your left",
    examples: [
      {
        code: `const value = useLeft()`,
        value: useLeft(),
      },
    ],
    githubUsername: "minnyww",
  }

  return <Card {...cardProps} />
}
