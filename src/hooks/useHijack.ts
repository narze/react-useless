export function useHijack(text: string) {
  const body = document.querySelector("body")
  if (body) {
    body.innerHTML = text
  }

  return ""
}
