import Card from "../components/Card"
import { useCoffinDance } from "../hooks/useCoffinDance"

const CoffinDanceController = () => {
  const [play, stop] = useCoffinDance()

  return (
    <div>
      <button onClick={play}>Play</button>
      <button onClick={stop}>Stop</button>
    </div>
  )
}

// Default export a functional component which includes hook's usage
// You can use our Card component or roll your own container component
export default function () {
  const cardProps = {
    desc: "useCoffinDanceNote - returns function that will play or stop coffin dance",
    examples: [
      // 1.) For simple form, just pass the hook's return value
      {
        code: "const value = useCoffinDance()",
        value: <CoffinDanceController />,
      },
    ],
    githubUsername: "miello",
  }

  return <Card {...cardProps} />
}
