import Card from "../components/Card"
import { useDoubleEffect } from "../hooks/useDoubleEffect"

export default function () {
  const cardProps = {
    desc: "useDoubleEffect - double your effect",
    examples: [
      {
        code: `useDoubleEffect(() => {
                console.log("Hi React");
              }, []);`,
        value: useDoubleEffect(() => {
          console.log("Hi react")
        }, []),
      },
    ],
    githubUsername: "minnyww",
  }

  return <Card {...cardProps} />
}
