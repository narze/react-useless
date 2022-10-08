import Card from "../components/Card"
import { paUse } from "../hooks/paUse"

export const PauseImage = () => {
  const pauseUrl = paUse()

  return (
    <>
      <code
        style={{
          overflowX: "hidden",
          textOverflow: "ellipsis",
          display: "block",
          whiteSpace: "nowrap",
        }}
      >
        {pauseUrl}
      </code>
      <img src={pauseUrl} alt="paUse" loading="lazy" decoding="async" />
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "paUse - get ... image",
    examples: [
      {
        code: "const pauseUrl = paUse()",
        value: <PauseImage />,
      },
    ],
    githubUsername: "rootEnginear",
  }

  return <Card {...cardProps} />
}
