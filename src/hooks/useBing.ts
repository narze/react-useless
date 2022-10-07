export function useBing() {
  const bingUrl = "https://www.bing.com/search?q="

  return (text: string) => {
    if (window != undefined && window != null) {
      window.open(bingUrl + text, "_blank")
    }
  }
}