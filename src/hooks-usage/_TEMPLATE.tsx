// This file is a template, save this file as <yourHookName>.tsx and remove this comment

import Card from "../components/Card"

import { useLess } from "../hooks/useLess/useLess"
import { useSalim } from "../hooks/useSalim"

// Default export a functional component which includes hook's usage
// You can use our Card component or roll your own container component
export default function () {
  const cardProps = {
    desc: "useYourHookName - returns something yada yada yada",
    examples: [
      // For simple form, just pass the hook's return value
      { code: "const value = useLess(0)", value: useLess(0) },

      // Or, use function component form for more complex example with buttons
      () => {
        const { quote: salimQuote, refetch: salimRefetch } = useSalim()

        return (
          <>
            <code>const {"{ quote, refetch }"} = useSalim()</code>
            <div>quote is {salimQuote}</div>
            <button onClick={() => salimRefetch()}>Click to refetch</button>
          </>
        )
      },
    ],
    githubUsername: "yourGithubUsername",
  }

  return <Card {...cardProps} />
}
