import Card from "../components/Card"
import { useDate } from "../hooks/useDate"

export default function () {
  const cardProps = {
    desc: "useTime - Returns the current Date",
    examples: [
      {
        code: `const value = useTime()`,
        value: `${useDate()}`,
      },
    ],
    githubUsername: "PathonScript",
  }

  return <Card {...cardProps} />
}
