import Card from "../components/Card"
import { useMore } from "../hooks/useMore"

// Default export a functional component which includes hook's usage
// You can use our Card component or roll your own container component
export default function () {
  const cardProps = {
    desc: "useMore - returns something yada yada yada",
    examples: [
      // 1.) For simple form, just pass the hook's return value
      { code: "const value = useMore(0)", value: useMore(0) },

      // Or 2.), use function component form for more complex example with buttons
      () => {
        const value = useMore(0)

        return (
          <>
            <div>value: {value}</div>
          </>
        )
      },
    ],
    githubUsername: "YOUR_GITHUB_USERNAME",
  }

  return <Card {...cardProps} />
}
