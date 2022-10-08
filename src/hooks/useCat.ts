import { useState, useEffect } from "react"

export function useCat() {
  const catUrl = "https://api.thecatapi.com/v1/images/search?mime_types=gif"

  const [cat, setCat] = useState("")
  useEffect(() => {
    fetch(catUrl)
      .then((response) => response.json())
      .then((data) => setCat(data[0].url))
  }, [])
  return (text: string) => {
    if (window != undefined && window != null) {
      window.open(cat, "_blank")
    }
  }
}
