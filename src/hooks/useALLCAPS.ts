export function useALLCAPS() {
  const el = document.getElementById("root")

  const handleClick = () => {
    if (el != null) {
      el.style.textTransform = "uppercase"
    }
  }

  return handleClick
}
