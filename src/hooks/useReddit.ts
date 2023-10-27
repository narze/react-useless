export function useReddit(query: string) {
  if (window != null && window != undefined) {
    window.open(`https://www.reddit.com/search/?q=${query}`)
  }
}
