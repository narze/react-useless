import Card from "../components/Card"
import { useDonaldTrump } from "../hooks/useDonaldTrump"

// Default export a functional component which includes hook's usage
// You can use our Card component or roll your own container component
export default function () {
  const cardProps = {
    desc: "useDonaldTrump - returns random quote from Donald Trump",
    examples: [
      // 1.) For simple form, just pass the hook's return value
      { code: "const value = useDonaldTrump()", value: useDonaldTrump() },

      // Or 2.), use function component form for more complex example with buttons
      () => {
        const value = useDonaldTrump()

        return (
          <>
            <div>Donald Trump said: {value}</div>
          </>
        )
      },
    ],
    githubUsername: "Tantatorn-dev",
  }

  return <Card {...cardProps} />
}
