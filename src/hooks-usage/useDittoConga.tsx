import Card from "../components/Card"
import { useDittoConga } from "../hooks/useDittoConga"

export default function () {
  const cardProps = {
    desc: "useYoutube - listen your favorite song on youtube",
    examples: [
      {
        code: `const ditto = useDittoConga();`,
        value: (
          <button
            onClick={() => {
              useDittoConga()
            }}
          >
            Shake your body baby
          </button>
        ),
      },
    ],
    githubUsername: "PathonScript",
  }

  return <Card {...cardProps} />
}
