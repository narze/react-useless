import Card from "../components/Card"
import { useChanochaBigBrainCells } from "../hooks/useChanochaBigBrainCells"

// Default export a functional component which includes hook's usage
// You can use our Card component or roll your own container component
export default function () {
  const cardProps = {
    desc: "useChanochaBigBrainCells - returns number of Chanocha big brain cells",
    examples: [
      // 1.) For simple form, just pass the hook's return value
      {
        code: "const value = useChanochaBigBrainCells()",
        value: useChanochaBigBrainCells(),
      },
    ],
    githubUsername: "nonkung51",
  }

  return <Card {...cardProps} />
}
