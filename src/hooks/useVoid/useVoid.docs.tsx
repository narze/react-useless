import { useVoid } from "./useVoid"

function UseVoidDocs() {
  const useVoidValue = useVoid()

  return (
    <div className="docs-wrapper">
      <h1>useVoid</h1>
      <div>Does nothing, and returns nothing.</div>
      <div className="code-block">
        <pre>
          <code>const value = useVoid()</code>
        </pre>
      </div>
      <div>value is nothing</div>
    </div>
  )
}

export default UseVoidDocs
