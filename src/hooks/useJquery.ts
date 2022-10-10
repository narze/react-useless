import { useEffect, useState } from "react"

export function useJquery(selector: string, deps: any = []) {
  const [value, setValue] = useState<Array<Element>>([])
  useEffect(() => {
    setValue(() => [...document.querySelectorAll(selector)])
  }, deps)
  return value
}
