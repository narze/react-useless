import Card from "../components/Card"

import { useJesus } from "../hooks/useJesus"

function JesusExample() {
  const { Component } = useJesus()

  return <Component />
}

export default function () {
  const cardProps = {
    desc: "useJesus - return video of jesus 😱",
    examples: [
      // For simple form, just pass the hook's return value
      {
        code: "const { link, id, Component } = useJesus()",
        value: useJesus().link,
      },

      // Or, use function component form for more complex example with buttons
      <JesusExample />,
    ],
    githubUsername: "Leomotors",
  }

  return <Card {...cardProps} />
}
