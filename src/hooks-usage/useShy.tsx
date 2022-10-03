import Card from "../components/Card"
import { useShy } from "../hooks/useShy"

export const UseShy = () => {
  const [ref, onHover, onClick] = useShy()

  return (
    <button ref={ref} onMouseOver={() => onHover()} onClick={() => onClick()}>
      Don't click me ! 😖
    </button>
  )
}

export default function () {
  const cardProps = {
    desc: "useShy - a button that never let you click it",
    examples: [
      {
        code: `const [ref, onHover, onClick] = useShy()`,
        value: <UseShy />,
      },
    ],
    githubUsername: "keRLos",
  }

  return <Card {...cardProps} />
}
