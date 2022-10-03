import Card from "../components/Card"
import { useThisHook } from "../hooks/useThisHook"

export const UseThisHook = () => {
  const hook = useThisHook()
  const anotherHook = hook()
  return (
    <>
      <code>const anotherHook = hook()</code>
      <br />
      <code>const sevenfold = useThisHook()()()()()()()</code>
      <br />
      <div>hook's toString value is {hook.toString()}</div>
      <div>anotherHook's toString value is {anotherHook.toString()}</div>
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useThisHook - a hook which returns useThisHook itself, definitely useless 🤡",
    examples: [{ code: "const hook = useThisHook()", value: <UseThisHook /> }],
    githubUsername: "LXZE",
  }

  return <Card {...cardProps} />
}
