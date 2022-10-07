import { FallbackProps, withErrorBoundary } from "react-error-boundary"
import Card from "../components/Card"
import { useError } from "../hooks/useError"

const UseErrorExampleComponent = withErrorBoundary(
  () => {
    useError()
    return <></>
  },
  {
    FallbackComponent: ({ error, resetErrorBoundary }: FallbackProps) => {
      return (
        <div>
          <p>{`thrown error: ${error.toString()}`} </p>
          <button onClick={resetErrorBoundary}>Try again</button>
        </div>
      )
    },
  }
)

export default function () {
  const cardProps = {
    desc: "useError - throw an error randomly.",
    examples: [{ code: "useError()", value: <UseErrorExampleComponent /> }],
    githubUsername: "knoxnoe",
  }

  return <Card {...cardProps} />
}
