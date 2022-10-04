export function useCapital(s: string | undefined = undefined) {
  if (s == undefined) {
    const body = document.querySelector("body")
    if (body != null) {
      body.style.textTransform = "uppercase"
    }
  } else {
    return s.toUpperCase()
  }
}
