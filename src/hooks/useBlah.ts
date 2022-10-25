import { useMemo } from "react"
export const useBlah = () => {
  const blah = useMemo(() => "Blah blah blah", [])
  return blah
}
