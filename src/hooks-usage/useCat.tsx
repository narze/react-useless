import Card from "../components/Card"
import { useCat } from "../hooks/useCat"

const CatCard = () => {
  const cat = useCat()

  return (
    <>
      <div>
        <button
          onClick={() => {
            cat("just a cat")
          }}
        >
          🐈 Say Meow
        </button>
      </div>
    </>
  )
}
export default function () {
  const cardProps = {
    desc: "useCat - just random cat image",
    examples: [
      {
        code: `const cat = useCat();cat('some text')`,
        value: <CatCard />,
      },
    ],
    githubUsername: "pattanunNP",
  }

  return <Card {...cardProps} />
}
