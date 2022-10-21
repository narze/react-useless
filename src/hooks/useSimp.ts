import { useEffect, useState } from "react"

export function useSimp() {
  const [quote, setQuote] = useState<string>("")
  const [list, setList] = useState<string[]>([])
  const [index, setIndex] = useState<number>(0)

  const rand = () => {
    return Math.floor(Math.random() * list.length)
  }

  const refetch = async () => {
    const res = await fetch(
      `https://raw.githubusercontent.com/santhitak/simp.js/main/README.md`
    )
    const data_text = await res.text()
    setList(
      data_text
        .split("\n")
        .filter((line) => line.startsWith("- "))
        .map((line) => line.split("- ")[1])
    )
    setIndex(rand)
    setQuote(list[index])
    console.log(list[index])
  }

  useEffect(() => {
    refetch()
  }, [])

  return {
    quote,
    refetch,
  }
}
