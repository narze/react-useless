import Card from "../components/Card"
import { useDog } from "../hooks/useDog"

const DogCard = () => {
  const dog = useDog()

  return (
    <>
      <div>
        <button
          onClick={() => {
            dog("just a dog")
          }}
        >
          🐈 Say woof
        </button>
      </div>
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useDog - just random dog image. similar to useCat but with dog",
    examples: [
      {
        code: `const dog = useDog();dog('some text')`,
        value: <DogCard />,
      },
    ],
    githubUsername: "wiennat",
  }

  return <Card {...cardProps} />
}
