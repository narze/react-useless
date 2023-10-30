import Card from "../components/Card"
import { useMotivation } from "../hooks/useMotivation"

export const UseMotivation = () => {
  const onClick = useMotivation()
  return (
    <>
      <button className="animate-bounce" onClick={onClick}>
        {"don't click 😭"}
      </button>
    </>
  )
}

// Default export a functional component which includes hook's usage
// You can use our Card component or roll your own container component
export default function () {
  const cardProps = {
    desc: "useMotivation - get motivated by Vergil",
    examples: [
      // 1.) For simple form, just pass the hook's return value
      {
        code: "const onClick = useMotivation()",
        value: (
          <>
            <UseMotivation />
            <p>
              💢need more MOTIVATION!? Get this as an extension on your browser{" "}
              <a
                href="https://richeyphu.github.io/GetMotivated/"
                target="_blank"
              >
                NOW
              </a>
              !
            </p>
          </>
        ),
      },
    ],
    githubUsername: "richeyphu",
  }

  return <Card {...cardProps} />
}
