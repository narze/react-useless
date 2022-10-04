import { useEffect, useState } from "react"

export function useDonaldTrump() {
  const [quote, setQuote] = useState("")

  useEffect(() => {
    fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random")
      .then((response) => response.json())
      .then((data) => setQuote(data.message))
  }, [])

  return quote
}
