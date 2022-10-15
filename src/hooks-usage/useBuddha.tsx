import { useState } from "react"
import Card from "../components/Card"
import Dialog from "../components/Dialog"
import { useBuddha } from "../hooks/useBuddha"

const UseBuddhaCard = () => {
  const buddha = useBuddha()
  const [show, setShow] = useState(false)

  return (
    <>
      <div>
        <button onClick={() => setShow(true)}>Pray to Buddha 🙏</button>
      </div>
      <Dialog
        show={show}
        onClose={() => {
          setShow(false)
        }}
        body={buddha}
        bodyClassName="text-[8px] leading-none font-mono text-center"
      />
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useBuddha - return function that will show buddha ascii art if you pray",
    examples: [
      {
        code: `const buddha = useBuddha()`,
        value: <UseBuddhaCard />,
      },
    ],
    githubUsername: "saenyakorn",
  }

  return <Card {...cardProps} />
}
