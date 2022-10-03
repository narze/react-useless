import Card from "../components/Card"
import { useError } from "../hooks/useError"

export default function () {
  const cardProps = {
    desc: "useError - throw an error randomly.",
    examples: [{ code: "useError()", value: "throw Error" }],
    githubUsername: "knoxnoe",
  }

  return <Card {...cardProps} />
}
