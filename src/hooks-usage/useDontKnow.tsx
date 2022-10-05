import Card from "../components/Card"
import { useDontKnow } from "../hooks/useDontKnow"

export default function () {
  const cardProps = {
    desc: "useDontKnow - We don't know anything in this universe !!",
    examples: [
      {
        code: `const message = useDontKnow()`,
        value: `Do you know about flooding situation ? ${useDontKnow()}`,
      },
    ],
    githubUsername: "sikkapat79",
  }

  return <Card {...cardProps} />
}
