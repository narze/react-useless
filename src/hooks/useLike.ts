export function useLike() {
  const likes = ["👍", "👎", "🖕"]
  const emoji = likes[Math.floor(Math.random() * likes.length)]

  return emoji
}
