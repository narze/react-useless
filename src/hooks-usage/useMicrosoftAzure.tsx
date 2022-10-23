import Card from "../components/Card"
import { useMicrosoftAzure } from "../hooks/useMicrosoftAzure"

export default function () {
  const cardProps = {
    desc: "useMicrosoftAzure - returns กระติกน้ำ Microsoft Azure!",
    examples: [
      { code: "const value = useMicrosoftAzure()", value: useMicrosoftAzure() },
    ],
    githubUsername: "Mixko50",
  }

  return <Card {...cardProps} />
}
