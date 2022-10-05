import Card from "../components/Card"
import { useSalim } from "../hooks/useSalim"

const UseSalimExampleComponent = () => {
  const { quote: salimQuote, refetch: salimRefetch } = useSalim()

  return (
    <>
      <code>const {"{ quote, refetch }"} = useSalim()</code>
      <div>quote is {salimQuote}</div>
      <button onClick={() => salimRefetch()}>Click to refetch</button>
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useSalim - A hook that fetch quote from Salim API",
    examples: [UseSalimExampleComponent()],
    githubUsername: "Leomotors",
  }

  return <Card {...cardProps} />
}
