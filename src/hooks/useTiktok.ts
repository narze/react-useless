export function useTiktok() {
  const tiktokUrl = "https://www.tiktok.com/search?q="
  
  return (text: string) => {
    if (window != undefined && window != null) {
      window.open(tiktokUrl + text, "_blank")
    }
  }
}
