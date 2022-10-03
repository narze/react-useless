import Card from "../components/Card"
import { useDouble } from "../hooks/useDouble"

// Default export a functional component which includes hook's usage
// You can use our Card component or roll your own container component
export default function () {
  const cardProps = {
    desc: "useDouble - returns value in double!!",
    examples: [
      // 1.) For simple form, just pass the hook's return value
      { code: "const value = useDouble(5)", value: useDouble(5) },

      // Or 2.), use function component form for more complex example with buttons
      () => {
        const value = useDouble(5)

        return (
          <>
            <div>value: {value}</div>
          </>
        )
      },
    ],
    githubUsername: "VectorXz",
  }

  return <Card {...cardProps} />
}
