import { useMemo } from "react"
export const useDontKnow = () => {
  const dontKnowMessage = useMemo(() => "ไม่รู้ ไม่รู้ ไม่รู้", [])

  return dontKnowMessage
}
