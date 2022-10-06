import { useState } from "react"
import { DefinitelyNotAny } from "./types"

export function useRukMaiChaiDuangDaoTeePrawSang(
  initialValue: DefinitelyNotAny
) {
  const [value, _setValue] = useState(initialValue)

  return value + " รัก ไม่ใช่ ดวงดาวที่พราวแสง"
}
