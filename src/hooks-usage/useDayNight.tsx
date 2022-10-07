import Card from "../components/Card"
import { useDayNight } from "../hooks/useDayNight"

const UseDayNight = () => {
  const [ref, lightSwitch] = useDayNight()

  return (
    <button className="mt-5" ref={ref} onClick={() => lightSwitch()}>
      Switch it! 💡
    </button>
  )
}

export default function () {
  const cardProps = {
    desc: "useDayNight - dusk till dawn 🌙 ☀️",
    examples: [
      {
        code: `const [ref, lightSwitch] = useDayNight()`,
        value: <UseDayNight />,
      },
    ],
    githubUsername: "Thoritie",
  }

  return <Card {...cardProps} />
}
