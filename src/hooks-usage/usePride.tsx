import Card from "../components/Card"
import { usePride } from "../hooks/usePride"

// Default export a functional component which includes hook's usage
// You can use our Card component or roll your own container component
export default function () {
  const cardProps = {
    desc: "usePride - returns random emoji from Prides",
    examples: [
      // 1.) For simple form, just pass the hook's return value
      { code: "const value = usePride()", value: usePride() },
      // Or 2.), use function component form for more complex example with buttons
      () => {
        const value = usePride()
        return (
          <>
            <div>value: {value}</div>
          </>
        )
      },
    ],
    githubUsername: "nuttikung",
  }
  return <Card {...cardProps} />
}
