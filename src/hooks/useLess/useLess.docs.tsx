import { useLess } from "./useLess"

function UseLessDocs() {
  const useLessValue = useLess(0)
  const useLessAnotherValue = useLess("ඞ")

  return (
    <div className="docs-wrapper">
      <h1>useLess</h1>
      <div>a useless hook that returns initial value.</div>
      <div className="code-block">
        <pre>
          <code>const value = useLess(0)</code>
        </pre>
      </div>
      <div>value is {useLessValue}</div>
      <div className="code-block">
        <pre>
          <code>const anotherValue = useLess("ඞ")</code>
        </pre>
      </div>
      <div>anotherValue is {useLessAnotherValue}</div>
    </div>
  )
}

export default UseLessDocs
