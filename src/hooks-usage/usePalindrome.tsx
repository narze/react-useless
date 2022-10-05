import Card from "../components/Card"
import { usePalindrome } from "../hooks/usePalindrome"

// Default export a functional component which includes hook's usage
// You can use our Card component or roll your own container component
export default function () {
  const cardProps = {
    desc: "usePalindrome - returns parlindrome of given string",
    examples: [
      // 1.) For simple form, just pass the hook's return value
      {
        code: 'const value = usePalindrome("ABC")',
        value: usePalindrome("ABC"),
      },

      // Or 2.), use function component form for more complex example with buttons
      () => {
        const value = usePalindrome("ABC")

        return (
          <>
            <div>value: {value}</div>
          </>
        )
      },
    ],
    githubUsername: "hspotlight",
  }

  return <Card {...cardProps} />
}
