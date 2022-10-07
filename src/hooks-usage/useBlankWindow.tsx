import Card from "../components/Card"
import { useBlankWindow } from "../hooks/useBlankWindow"

const ButtonClose = () => {
  const makeBlank = useBlankWindow()

  return <button onClick={makeBlank}>Make this window blank</button>
}

export default function () {
  const cardProps = {
    desc: "useBlankWindow - returns functions to make current window blank.",
    examples: [
      { code: "const makeBlank = useBlankWindow()", value: <ButtonClose /> },
    ],
    githubUsername: "DodyDharma440",
  }

  return <Card {...cardProps} />
}
