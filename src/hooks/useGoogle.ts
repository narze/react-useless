export function useGoogle() {
  const googleUrl = "https://www.google.com/search?q="

  return (text: string) => {
    if (window != undefined && window != null) {
      window.open(googleUrl + text, "_blank")
    }
  }
}
