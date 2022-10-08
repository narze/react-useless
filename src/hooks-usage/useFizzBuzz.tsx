import Card from "../components/Card"
import { useFizzBuzz } from "../hooks/useFizzBuzz"

// Default export a functional component which includes hook's usage
// You can use our Card component or roll your own container component
export default function () {
  const cardProps = {
    desc: "useFizzBuzz - returns FizzBuzz",
    examples: [
      // 1.) For simple form, just pass the hook's return value
      { code: "const value = useFizzBuzz(15)", value: useFizzBuzz(15) },

      // Or 2.), use function component form for more complex example with buttons
      () => {
        const value = useFizzBuzz(15)

        return (
          <>
            <div>value: {value}</div>
          </>
        )
      },
    ],
    githubUsername: "nonkung51",
  }

  return <Card {...cardProps} />
}
