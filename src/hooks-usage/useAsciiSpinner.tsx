import Card from "../components/Card"
import { useAsciiSpinner } from "../hooks/useAsciiSpinner"

// Default export a functional component which includes hook's usage
// You can use our Card component or roll your own container component
export default function () {
  const cardProps = {
    desc: "useAsciiSpinner - return animation ascii spinner",
    examples: [
      // 1.) For simple form, just pass the hook's return value
      {
        code: "const value = useAsciiSpinner(600)",
        value: useAsciiSpinner(600),
      },

      // Or 2.), use function component form for more complex example with buttons
      () => {
        const value = useAsciiSpinner(600)

        return (
          <>
            <div>value: {value}</div>
          </>
        )
      },
    ],
    githubUsername: "vavar",
  }

  return <Card {...cardProps} />
}
