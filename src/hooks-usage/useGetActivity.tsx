import Card from "../components/Card"
import { useGetAcitivty } from "../hooks/useGetActivity"

const UseGetAcitivty = () => {
  const { activity, getActivity } = useGetAcitivty()

  return (
    <>
      <code>const {"{ activiçty, getActivity }"} = useGetAcitivty()</code>
      <button onClick={() => getActivity()}>Click to get activity</button>
      <div>Recommend activity is {activity}</div>
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useGetActivity - returns activity from Boring API (https://www.boredapi.com/)",
    examples: [UseGetAcitivty()],
    githubUsername: "krirati",
  }

  return <Card {...cardProps} />
}
