import { useEven } from "./useEven"

function useEvenDocs() {
  const useEvenValue = useEven(2)
  const useEvenAnotherValue = useEven(1)

  return (
    <div className="docs-wrapper">
      <h1>useEven</h1>
      <div>a useful hook to check number is even or not.</div>
      <div className="code-block">
        <pre>
          <code>const value = useEven(2)</code>
        </pre>
      </div>
      <div>value is {useEvenValue.toString()}</div>
      <div className="code-block">
        <pre>
          <code>const anotherValue = useEven(1)</code>
        </pre>
      </div>
      <div>anotherValue is {useEvenAnotherValue.toString()}</div>
    </div>
  )
}

export default useEvenDocs
