import { useState } from "react"
import Card from "../components/Card"
import { useSrisuwan } from "../hooks/useSrisuwan"

export const Image = () => {
  const refetch = useSrisuwan()
  const [imgUrl, setImgUrl] = useState<string>("")

  return (
    <>
      <button
        onClick={() => {
          const url = refetch()
          setImgUrl(url)
        }}
      >
        refetch
      </button>
      {imgUrl && (
        <>
          <code
            style={{
              overflowX: "hidden",
              textOverflow: "ellipsis",
              display: "block",
              whiteSpace: "nowrap",
            }}
          >
            {imgUrl}
          </code>
          <img src={imgUrl} alt="useSrisuwan" loading="lazy" decoding="async" />
        </>
      )}
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useSrisuwan - get ... image",
    examples: [
      {
        code: "const srisuwan = useSrisuwan()",
        value: <Image />,
      },
    ],
    githubUsername: "poraree",
  }

  return <Card {...cardProps} />
}
