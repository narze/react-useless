import Card from "../components/Card"
import { useChanochaBrainCells } from "../hooks/useChanochaBrainCells"

export default function () {
  const cardProps = {
    desc: "useChanochaBrainCells - Returns the number of his brain cells, 84000",
    examples: [
      {
        code: `const value = useChanochaBrainCells()`,
        value: `${useChanochaBrainCells()}`,
      },
    ],
    githubUsername: "kratuwu",
  }

  return <Card {...cardProps} />
}
