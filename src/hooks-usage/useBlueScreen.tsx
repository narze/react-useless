import Card from "../components/Card"
import { useBlueScreen } from "../hooks/useBlueScreen"

export const UseBlueScreen = () => {
  const onClick = useBlueScreen()
  return (
    <>
      <button
        id="bluescreen"
        className="animate-bounce"
        onClick={onClick}
        style={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)" }}
      >
        {"Just Click Me 😎"}
      </button>
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useBlueScreen - wanna try Windows user experience? just use this hook!",
    examples: [
      {
        code: "const onClick = useBlueScreen()",
        value: <UseBlueScreen />,
      },
    ],
    githubUsername: "Planxnx",
  }

  return <Card {...cardProps} />
}
