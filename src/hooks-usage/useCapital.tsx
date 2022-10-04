import Card from "../components/Card"
import { useCapital } from "../hooks/useCapital"

// Default export a functional component which includes hook's usage
// You can use our Card component or roll your own container component
export default function () {
  const cardProps = {
    desc: "useCapital - returns capital text of given string, if not provide it will can whole page to capital",
    examples: [
      // 1.) For simple form, just pass the hook's return value
      {
        code: "const value = useCapital('thisissample')",
        value: useCapital("thisissample"),
      },

      // Or 2.), use function component form for more complex example with buttons
      () => {
        const value = useCapital("thisissample")

        return (
          <>
            <div>{value}</div>
          </>
        )
      },
    ],
    githubUsername: "iiippbhy",
  }

  return <Card {...cardProps} />
}
