import Card from "../components/Card"
import { useALLCAPS } from "../hooks/useALLCAPS"

export const UseAllCaps = () => {
  const handleClick = useALLCAPS()

  return <button onClick={handleClick}>click me</button>
}

export default function () {
  const cardProps = {
    desc: "useALLCAPS - a hook that make you go ALL CAPS 😮",
    examples: [
      {
        code: "const value = useALLCAPS()",
        value: <UseAllCaps />,
      },
    ],
    githubUsername: "gandastik",
  }

  return <Card {...cardProps} />
}
