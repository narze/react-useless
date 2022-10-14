import Card from "../components/Card"
import { useCountdown } from "../hooks/useCountdown"

export const UseCountdown = () => {
  const max_range = 5
  const [value, subtrahend, handleClick] = useCountdown(max_range)
  return (
    <>
      {value} - {subtrahend}
      <div>
        <button className="hover:ring-1" onClick={handleClick}>
          Click Me 😏
        </button>
      </div>
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useCountdown - a hook that returns a current number counting down to 0 but it won't reach zero",
    examples: [
      {
        code: "const [value, hanldeClick] = useCountdown(5)",
        value: <UseCountdown />,
      },
    ],
    githubUsername: "kaiwanyawit-chawankul",
  }

  return <Card {...cardProps} />
}
