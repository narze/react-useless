import Card from "../components/Card"
import { useEscapeButton } from "../hooks/useEscapeButton"

const UseEscapeButton = () => {
  const [ref, pos] = useEscapeButton()
  const posStr = pos ? `x = ${pos.x} y = ${pos.y}` : "(none)"
  return (
    <>
      {ref}
      <div>position: {posStr}</div>
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useButton - returns ordinary button",
    examples: [
      {
        code: `const [ref, handle] = useEscapeButton()`,
        value: <UseEscapeButton />,
      },
    ],
    githubUsername: "casperx",
  }

  return <Card {...cardProps} />
}
