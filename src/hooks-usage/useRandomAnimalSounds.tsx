import Card from "../components/Card"
import { useRandomAnimalSounds } from "../hooks/useRandomAnimalSounds"
import { useState } from "react"

const UseRandomAnimalSounds = () => {
  var initAnimal = {
    name: "",
    url: "",
  }
  const [animal, setAnimal] = useState(initAnimal)
  return (
    <div>
      <button onClick={() => setAnimal(useRandomAnimalSounds)}>
        Random Animal Sound
      </button>
      {animal.name != "" && (
        <div style={{ textAlign: "center" }}>
          <h3>{animal.name}</h3>
          <audio
            src={animal.url}
            style={{ width: "100%", marginTop: "20px" }}
            controls
          ></audio>
        </div>
      )}
    </div>
  )
}

export default function () {
  const cardProps = {
    desc: "useAnimalSounds - returns audio with animal sound",
    examples: [
      {
        code: "const animalSound = useRandomAnimalSounds()",
        value: <UseRandomAnimalSounds />,
      },
    ],
    githubUsername: "T-Khanittha",
  }

  return <Card {...cardProps} />
}
