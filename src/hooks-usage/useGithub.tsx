import Card from "../components/Card"
import { useGithub } from "../hooks/useGithub"

export default function () {
  const cardProps = {
    desc: "useGithub - search your github profile",
    examples: [
      {
        code: `const value = useGithub("Kitton")`,
        value: (
          <button
            onClick={() => {
              useGithub("Kittonn")
            }}
          >
            Search github profile
          </button>
        ),
      },
    ],
    githubUsername: "Kittonn",
  }

  return <Card {...cardProps} />
}
