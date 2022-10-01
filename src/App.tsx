import reactLogo from "./assets/react.svg"
import "./App.css"

import Card, { ExampleProp } from "./components/Card"
import { useLess } from "./hooks/useLess"
import { useVoid } from "./hooks/useVoid"
import { useEven } from "./hooks/useEven"
import { useCuteAndFunny } from "./hooks/useCuteAndFunny"
import { useSus } from "./hooks/useSus"

type HookProp = {
  desc: string
  examples: ExampleProp[]
}

function App() {
  const useSusValue = useSus("createSus")

  const hooks: HookProp[] = [
    {
      desc: "useLess - a useless hook that returns initial value.",
      examples: [{ code: 'const value = useLess(0)', value: useLess(0) },
      { code: 'const anotherValue = useLess("ඞ")', value: useLess("ඞ") }]
    },
    {
      desc: "useEven - a useful hook to check number is even or not.",
      examples: [{ code: 'const value = useEven(2)', value: useEven(2).toString() },
      { code: 'const anotherValue = useEven(1)', value: useEven(1).toString() }]
    },
    {
      desc: "useVoid - Does nothing, and returns nothing.",
      examples: [{ code: 'const value = useVoid()', value: "value is nothing" },
      ]
    },
    {
      desc: "useCuteAndFunny - 😭",
      examples: [{
        code: `const value = useCuteAndFunny('https://www.pixiv.net/en/artworks/101491852')`,
        value: useCuteAndFunny('https://www.pixiv.net/en/artworks/101491852')
      },
      ]
    },
  ]

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


      {hooks.map((hook: HookProp) => {
        return <Card
        desc={hook.desc}
          examples={hook.examples} />
      })}

      <div className="card">
        <h2>useSus - ඞ</h2>

        <code style={{ backgroundColor: "black" }}>
          const value = useSus("createSus")
        </code>
        <div>value is {useSusValue}</div>
      </div>      

      {/* ⬆️ UP HERE!! */}
      {/* <!-- Add your own useless hook example above this comment! --> */}

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
