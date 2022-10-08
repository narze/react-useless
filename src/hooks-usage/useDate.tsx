import Card from "../components/Card"
import { useDate } from "../hooks/useDate"

export default function () {
  const cardProps = {
    desc: "useDate - Returns the current Date",
    examples: [
      {
        code: `const value = useDate()`,
        value: `${useDate()}`,
      },
    ],
    githubUsername: "PathonScript",
  }

  return <Card {...cardProps} />
}
