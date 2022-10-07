import Card from "../components/Card"
import { useRandomChaiTaeVocabulary } from "../hooks/useRandomChaiTaeVocabulary"

// Default export a functional component which includes hook's usage
// You can use our Card component or roll your own container component

const UseRandomChaiTaeVocabularyComponent = () => {
  const { randomWord, handleRandomChaiTaeVocabulary } =
    useRandomChaiTaeVocabulary()
  return (
    <>
      <button onClick={() => handleRandomChaiTaeVocabulary()}>
        Random ศัพท์ชายแท้
      </button>
      <div
        style={{
          background: "#FFA500",
          fontSize: "1.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
          color: "blueviolet",
          textAlign: "center",
        }}
      >
        {randomWord.type} | {randomWord.vocabulary}
      </div>
    </>
  )
}
export default function () {
  const cardProps = {
    desc: "useRandomChaiTaeVocabulary - returns คำศัพท์ชายแท้อ่ะน้อง!",
    examples: [UseRandomChaiTaeVocabularyComponent()],
    githubUsername: "topspinppy",
  }

  return <Card {...cardProps} />
}
