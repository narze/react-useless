import { useEffect, useState } from "react"

export function useGetAcitivty() {
  const [activity, setActivity] = useState<string | undefined>("")
  const endpoint = `https://www.boredapi.com/api/activity`

  const getActivity = async () => {
    const response = await fetch(endpoint).then((r) => r.json())
    const newQuote = response?.activity
    if (typeof newQuote !== "string") {
      throw new Error("Oop!")
    }
    setActivity(response.activity)
  }

  useEffect(() => {
    getActivity()
  }, [])

  return { activity, getActivity }
}
