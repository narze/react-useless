import reactLogo from "./assets/react.svg"
import "./App.css"

import { useLess } from "./hooks/useLess"
import { useVoid } from "./hooks/useVoid"

function App() {
  const useLessValue = useLess(0)
  const useLessAnotherValue = useLess("ඞ")

  const useVoidValue = useVoid()

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Useless Hooks</h1>

      <div className="card">
        <h2>useLess - a useless hook that returns initial value.</h2>

        <code style={{ backgroundColor: "black" }}>
          const value = useLess(0)
        </code>
        <div>value is {useLessValue}</div>
        <code style={{ backgroundColor: "black" }}>
          const anotherValue = useLess("ඞ")
        </code>
        <div>anotherValue is {useLessAnotherValue}</div>
      </div>

      {/* <!-- Add your own useless hook example above this comment! --> */}
      <div className="card">
        <h2>useVoid - Does nothing, and returns nothing.</h2>

        <code style={{ backgroundColor: "black" }}>
          const value = useVoid()
        </code>
        <div>value is nothing</div>
      </div>

      <div className="card">
        <h2>
          Add your own useless hooks and
          <a
            href="https://github.com/narze/react-useless"
            target="_blank"
            style={{ paddingLeft: "0.25em" }}
          >
            submit a Pull Request!
          </a>
        </h2>
        or
        <h2>
          Request or find an idea for useless hooks in
          <a
            href="https://github.com/narze/react-useless/issues"
            target="_blank"
            style={{ paddingLeft: "0.25em" }}
          >
            Github Issues
          </a>
        </h2>
      </div>
    </div>
  )
}

export default App
