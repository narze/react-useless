import Card from "../components/Card"
import { useArmageddon } from "../hooks/useArmageddon"

const ArmageddonCard = () => {
  const value = useArmageddon()

  return (
    <>
      <button title="DANGER" onClick={value}>
        &#160;&#160;&#160;&#160;&#160;
      </button>
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useArmageddon - ",
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
