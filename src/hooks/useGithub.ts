export function useGithub(username: string) {
  if (window != null && window != undefined) {
    window.open(`https://github.com/${username}`)
  }
}
