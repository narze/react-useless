import Card from "../components/Card"
import { useThanos } from "../hooks/useThanos"

export default function () {
  const cardProps = {
    desc: `useThanos - remove half of elements from the query selector, "I Am Inevitable."`,
    examples: [
      {
        code: `const snap = useThanos();snap(".App > div > *")`,
        value: (
          <button
            onClick={() => {
              useThanos()(".App > div > *")
            }}
          >
            Snap
          </button>
        ),
      },
    ],
    githubUsername: "ntsd",
  }

  return <Card {...cardProps} />
}
