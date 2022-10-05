import Card from "../components/Card"
import { useRickRoll } from "../hooks/useRickRoll"

export default function () {
  const cardProps = {
    desc: "useRickRoll - returns Nerver Gonna Give You Up song url",
    examples: [
      {
        code: `const value = useRickRoll()`,
        value: `${useRickRoll()}`,
      },
    ],
    githubUsername: "MasterIceZ",
  }

  return <Card {...cardProps} />
}
