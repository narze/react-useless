import { FallbackProps, withErrorBoundary } from "react-error-boundary"
import Card from "../components/Card"
import { useException } from "../hooks/useException"

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div>
      <p>thrown error:</p>
      <pre>{error?.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

const UseExceptionExampleComponent = withErrorBoundary(
  () => {
    const throwException = useException()
    throwException("Bad Request", new Date().toString())
    return <></>
  },
  { FallbackComponent: ErrorFallback }
)

export default function () {
  const cardProps = {
    desc: "useException - throw an exception with arguments",
    examples: [
      {
        code: `const throwException = useException()`,
        value: <UseExceptionExampleComponent />,
      },
    ],
    githubUsername: "tomerk97",
  }

  return <Card {...cardProps} />
}
