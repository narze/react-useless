import { Fragment } from "react"
import { useParams } from "react-router-dom"
import { allHooksUsage } from "../hooks-usage"
import { useException } from "../hooks/useException"

function HookPage() {
  const { hookName } = useParams()
  const hookWithName = allHooksUsage.filter((hook) => hook.name === hookName)
  const throwException = useException()
  if (hookWithName.length === 0) {
    throwException(`Hook ${hookName} not found`)
  }
  const Component = hookWithName[0].Component

  return (
    <div className="App">
      <h1 className="text-center">{hookName}</h1>
      <Component />
    </div>
  )
}

export default HookPage
