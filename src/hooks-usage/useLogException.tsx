import Card from "../components/Card"
import { useLogException } from "../hooks/useLogException"

export default function () {
  const cardProps = {
    desc: "useLogException - a useless hook to log message as error.",
    examples: [
      {
        code: `useLogException("An error is occured")`,
        value: useLogException("An error is occured"),
      },
    ],
    githubUsername: "GGolfz",
  }

  return <Card {...cardProps} />
}
