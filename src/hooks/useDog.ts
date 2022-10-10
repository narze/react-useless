import { useState, useEffect } from "react"

export function useDog() {
  const dogUrl = "https://dog.ceo/api/breeds/image/random"

  const [dog, setDog] = useState("")
  useEffect(() => {
    fetch(dogUrl)
      .then((response) => response.json())
      .then((data) => setDog(data.message))
  }, [])
  return (text: string) => {
    if (window != undefined && window != null) {
      window.open(dog, "_blank")
    }
  }
}
