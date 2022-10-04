import { useEffect, useState } from "react"

export function useSiew() {
  const [siew, setSiew] = useState<string | undefined>()

  const refetch = async () => {
    const response = await fetch(
      "https://siewword.bossoq.live/api/random"
    ).then((r) => r.json())

    const newSiew = response?.respText

    if (typeof newSiew !== "string") {
      throw new Error("อย่าเสี่ยวเกินไปสิ คิดคำคมให้ไม่ทัน")
    }

    setSiew(newSiew)
  }

  useEffect(() => {
    refetch()
  }, [])

  return {
    siew,
    refetch,
  }
}
