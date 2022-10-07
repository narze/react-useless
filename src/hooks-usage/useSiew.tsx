import Card from "../components/Card"
import { useSiew } from "../hooks/useSiew"

const UseSiew = () => {
  const { siew, refetch } = useSiew()

  return (
    <>
      <code>const {"{ siew, refetch }"} = useSiew()</code>
      <div>quote is {siew}</div>
      <button onClick={() => refetch()}>Click to refetch</button>
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useSiew - returns some siew quote from API",
    examples: [UseSiew()],
    githubUsername: "bossoq",
  }

  return <Card {...cardProps} />
}
