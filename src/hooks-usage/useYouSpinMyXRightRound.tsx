import Card from "../components/Card"
import { useYouSpinMyXRightRound } from "../hooks/useYouSpinMyXRightRound"

export const UseYouSpinMyXRightRound = () => {
  const [ref, spinMyXRightRound] = useYouSpinMyXRightRound(10)

  return (
    <button ref={ref} onClick={() => spinMyXRightRound()}>
      Spin 🥩🌀
    </button>
  )
}

export default function () {
  const cardProps = {
    desc: "useYouSpinMyXRightRound - spin your element round 'n round",
    examples: [
      {
        code: `const [ref, spinMyXRightRound] = useYouSpinMyXRightRound(10)`,
        value: <UseYouSpinMyXRightRound />,
      },
    ],
    githubUsername: "badgooooor",
  }

  return <Card {...cardProps} />
}
