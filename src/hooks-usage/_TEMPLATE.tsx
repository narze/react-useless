// This file is a template, save this file as <yourHookName>.tsx and remove this comment

import Card from "../components/Card"
import { useLess } from "../hooks/useLess"

// Default export a functional component which includes hook's usage
// You can use our Card component or roll your own container component
export default function () {
  const cardProps = {
    desc: "useLess - a useless hook that returns initial value.",
    examples: [
      { code: "const value = useLess(0)", value: useLess(0) },
      {
        code: 'const anotherValue = useLess("ඞ")',
        value: useLess("ඞ"),
      },
    ],
    githubUsername: "narze",
  }

  return <Card {...cardProps} />
}
