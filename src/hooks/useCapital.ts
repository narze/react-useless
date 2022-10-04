export function useCapital(s: string) {
  if (s == undefined) {
    document.querySelector("body").style.textTransform = "uppercase"
  } else {
    return s.toUpperCase()
  }
}
