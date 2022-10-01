import { useState } from "react"

export const useLongerState = <T = unknown>(yourInput: T) => {
  return useState(yourInput)
}
