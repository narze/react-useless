import { Fragment } from "react"
import { useParams } from "react-router-dom"
import reactLogo from "../assets/react.svg"
import { allHooksUsage } from "../hooks-usage"
import { useException } from "../hooks/useException"

function HookPage() {
  const { hookName } = useParams()
  const Component = allHooksUsage[hookName ?? ""]
  const throwException = useException()
  if (!Component) {
    throwException(`Hook ${hookName} not found`)
  }

  return (
    <div className="App">
      <h1 className="text-center">{hookName}</h1>
      <Component />
    </div>
  )
}

export default HookPage
