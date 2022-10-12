import Card from "../components/Card"
import { useTheAnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything } from "../hooks/useTheAnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything"

export const UseTheAnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything =
  () => {
    const [value, handleClick] =
      useTheAnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything(
        "What's life"
      )
    return (
      <>
        {value}
        <div className="my-4">
          <button className="hover:ring-1" onClick={handleClick}>
            😌 Answer of life
          </button>
        </div>
      </>
    )
  }

export default function () {
  const cardProps = {
    desc: "useTheAnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything - return answer of life",
    examples: [
      {
        code: `const answer = useTheAnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything("What's life")`,
        value: (
          <UseTheAnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything />
        ),
      },
    ],
    githubUsername: "hgcassiopeia",
  }

  return <Card {...cardProps} />
}
