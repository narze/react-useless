import Card from "../components/Card"
import { useUpsideDown } from "../hooks/useUpsideDown"

const UseUpsideDown = () => {
  const [ref, trigger] = useUpsideDown()

  return (
    <button ref={ref} onClick={() => trigger()}>
      Rolling! 🔃
    </button>
  )
}

export default function () {
  const cardProps = {
    desc: "useUpsideDown - move it upside down",
    examples: [
      {
        code: `const [ref, trigger] = useUpsideDown()`,
        value: <UseUpsideDown />,
      },
    ],
    githubUsername: "heyfirst",
  }

  return <Card {...cardProps} />
}
