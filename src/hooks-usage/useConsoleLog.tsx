import Card from "../components/Card"
import { useConsoleLog } from "../hooks/useConsoleLog"

export default function () {
  const cardProps = {
    desc: "useConsoleLog - Simply log the passed value, so you don't have to see ESLint complain about using console.log()",
    examples: [
      {
        code: `const value = useConsoleLog("debug")`,
        value: `${useConsoleLog("debug")}`,
      },
    ],
    githubUsername: "kratuwu",
  }

  return <Card {...cardProps} />
}
