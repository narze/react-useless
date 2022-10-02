export function useThanos() {
  const randRange = (max: number) => {
    return Math.floor(Math.random() * max)
  }

  const snap = (query: string = "*") => {
    let elements = Array.from(document.body.querySelectorAll(query))
    const len = elements.length
    const half = Math.ceil(len / 2)

    let disappeared = 0
    while (disappeared < half) {
      const toRemove = randRange(len - disappeared)
      elements[toRemove].setAttribute(
        "style",
        `
                visibility: hidden;
                opacity: 0;
                filter: blur(0.05em) contrast(145%) brightness(650%);
                transition: filter 2s linear, visibility 0s 2s, opacity 2s linear;
            `
      )
      elements.splice(toRemove, 1)
      disappeared++
    }
  }

  return snap
}
