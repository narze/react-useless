import Card from "../components/Card"
import { useLesser } from "../hooks/useLesser"

export default function () {
  const cardProps = {
    desc: "useLesser - returns something lesser",
    examples: [
      { code: "const value = useLesser(0)", value: useLesser(0) },
      { code: "const value = useLesser(42)", value: useLesser(42) },
    ],
    githubUsername: "palmcm",
  }

  return <Card {...cardProps} />
}
