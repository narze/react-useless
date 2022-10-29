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
        <div style={{ textAlign: "center", margin: "20px" }}>
          <a href={animal.url} target="_blank" rel="noopener noreferrer">
            Click to listen {animal.name}'s sound
          </a>
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
