import { useState, useEffect } from "react"

interface Fact {
  text: string
  type: "random" | "today"
  permalink: string
  day?: Date
}

export function useLessFact(isToday: boolean) {
  const [fact, setFact] = useState<Fact | undefined>(undefined)
  let endpoint = "https://uselessfacts.jsph.pl/api/v2/facts/random"

  if (isToday) {
    endpoint = "https://uselessfacts.jsph.pl/api/v2/facts/today"
  }

  const getFact = async () => {
    const response = await fetch(endpoint).then((r) => r.json())
    if (isToday) {
      setFact({
        text: response.text,
        type: "today",
        permalink: response.permalink,
        day: new Date(),
      })
    } else {
      setFact({
        text: response.text,
        type: "random",
        permalink: response.permalink,
      })
    }
  }

  useEffect(() => {
    getFact()
  }, [])

  return { fact, getFact }
}
