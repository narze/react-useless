import Card from "../components/Card"
import { useOKHand } from "../hooks/useOKHand"

// Default export a functional component which includes hook's usage
// You can use our Card component or roll your own container component
export default function () {
  const cardProps = {
    desc: "useOKHand - returns ok_hand emoji.",
    examples: [
      // 1.) For simple form, just pass the hook's return value
      { code: "const value = useOKHand()", value: useOKHand() },
    ],
    githubUsername: "supakornbabe",
  }

  return <Card {...cardProps} />
}
