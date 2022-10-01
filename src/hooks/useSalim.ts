import { useEffect, useState } from "react"

export function useSalim() {
  const [quote, setQuote] = useState<string | undefined>()

  const refetch = async () => {
    const response = await fetch(
      "https://watasalim.vercel.app/api/quotes/random"
    ).then((r) => r.json())

    const newQuote = response?.quote?.body

    if (typeof newQuote !== "string") {
      throw new Error("ความชังชาติมากเกินไป ทำให้การดึงคำคมสลิ่มผิดพลาด")
    }

    setQuote(newQuote)
  }

  useEffect(() => {
    refetch()
  }, [])

  return {
    quote,
    refetch,
  }
}
