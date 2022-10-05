import Card from "../components/Card"
import { useFreeze } from "../hooks/useFreeze"

export default function () {
  const cardProps = {
    desc: "useFreeze - just in case you need your react app to freeze",
    examples: [
      {
        code: `useFreeze(() => console.log('Hello Antarctica'))`,
        value: (
          <button
            onClick={() => {
              useFreeze(() => "Sike")
            }}
          >
            I kid you not
          </button>
        ),
      },
    ],
    githubUsername: "pknn",
  }

  return <Card {...cardProps} />
}
