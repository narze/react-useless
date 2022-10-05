import Card from "../components/Card"
import { useYoutube } from "../hooks/useYoutube"

export default function () {
  const cardProps = {
    desc: "useYoutube - listen your favorite song on youtube",
    examples: [
      {
        code: `const video = useYoutube("Never gonna give you up")`,
        value: (
          <button
            onClick={() => {
              useYoutube("Never gonna give you up")
            }}
          >
            Search on youtube
          </button>
        ),
      },
    ],
    githubUsername: "ronnapatp",
  }

  return <Card {...cardProps} />
}
