import Card from "../components/Card"
import { useArmageddon } from "../hooks/useArmageddon"

const ArmageddonCard = () => {
  const value = useArmageddon()

  return (
    <>
      <button title="DANGER" onClick={value}>
        Empty
      </button>
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useArmageddon - No more HTML",
    examples: [
      {
        code: "const value = useArmageddon()",
        value: <ArmageddonCard />,
      },
    ],
    githubUsername: "pontakornth",
  }

  return <Card {...cardProps} />
}
