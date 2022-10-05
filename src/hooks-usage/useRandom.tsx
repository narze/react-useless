import Card from "../components/Card"
import { useRandom } from "../hooks/useRandom"

export default function () {
  const cardProps = {
    desc: "useRandom -  a useless hook that returns random number.",
    examples: [
      {
        code: `const value = useRandom()`,
        value: useRandom(),
      },
    ],
    githubUsername: "annibuliful",
  }

  return <Card {...cardProps} />
}
