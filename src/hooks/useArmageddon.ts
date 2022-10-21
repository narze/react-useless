import { useState } from "react"

/**
 * No more HTML
 */
function armageddon() {
  document.body.innerHTML = ""
  document.body.style.background = "#000"
  document.body.style.cursor = "none"
  // Note: This is not recommended. Why would you trigger this hook anyway?
  document.addEventListener("contextmenu", (event) => event.preventDefault())
}

export function useArmageddon() {
  return armageddon
}
