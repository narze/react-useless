import Card from "../components/Card"
import { useSimp } from "../hooks/useSimp"

const UseSimp = () => {
  const { quote, refetch: fetch } = useSimp()

  return (
    <>
      <code>const {"{ quote, fetch }"} = useSimp()</code>
      <div>quote is {quote}</div>
      <button onClick={() => fetch()}>Click to fetch</button>
      <p>
        repo:
        <a href="https://github.com/santhitak/simp.js"> simpers</a>
      </p>
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useSimp - A hook that fetch quote from simpers",
    examples: [UseSimp()],
    githubUsername: "santhitak",
  }

  return <Card {...cardProps} />
}
