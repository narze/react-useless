import reactLogo from "./assets/react.svg"
import "./App.css"

import { useLess } from "./hooks/useLess"
import { useVoid } from "./hooks/useVoid"
import { useEven } from "./hooks/useEven"
import { useCuteAndFunny } from "./hooks/useCuteAndFunny"
import { useRandomCodingStamina } from "./hooks/useRandomCodingStamina"
import { useTruthy } from "./hooks/useTruthy"
import { useApple } from "./hooks/useApple"

import { useLogException } from "./hooks/useLogException"

import Card, { ExampleProp } from "./components/Card"

import { useSus } from "./hooks/useSus"
import { useEmpty } from "./hooks/useEmpty"

import { useFullStop } from "./hooks/useFullStop"
import { useSmile } from "./hooks/useSmile"
import { useWeird } from "./hooks/useWeird"

type HookProp = {
  desc: string
  examples: ExampleProp[]
}

function App() {
  // TODO: move into hooks array if possible
  const useSusValue = useSus("createSus")
  const useFullStopValue = useFullStop("Hello World")
  const useWeirdValue = useWeird(12)
  const useSmileValue = useSmile("hello")

  const hooks: HookProp[] = [
    {
      desc: "useLess - a useless hook that returns initial value.",
      examples: [
        { code: "const value = useLess(0)", value: useLess(0) },
        { code: 'const anotherValue = useLess("ඞ")', value: useLess("ඞ") },
      ],
    },
    {
      desc: "useEven - a useful hook to check number is even or not.",
      examples: [
        { code: "const value = useEven(2)", value: useEven(2).toString() },
        {
          code: "const anotherValue = useEven(1)",
          value: useEven(1).toString(),
        },
      ],
    },
    {
      desc: "useVoid - Does nothing, and returns nothing.",
      examples: [
        { code: "const value = useVoid()", value: "value is nothing" },
      ],
    },
    {
      desc: "useCuteAndFunny - 😭",
      examples: [
        {
          code: `const value = useCuteAndFunny('https://www.pixiv.net/en/artworks/101491852')`,
          value: useCuteAndFunny("https://www.pixiv.net/en/artworks/101491852"),
        },
      ],
    },
  ]

  const useEmptyValue = useEmpty()

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
        return <Card desc={hook.desc} examples={hook.examples} />
      })}

      <div className="card">
        <h2>useWeird - Does something weird</h2>

        <code style={{ backgroundColor: "black" }}>
          const weird = useWeird() &lt;button style=&#123;weird&#125
          &gt;Haha&lt;/button&gt
        </code>
        <button style={useWeirdValue}>Hahaha</button>
      </div>

      <div className="card">
        <h2>useSmile - 😊</h2>

        <code style={{ backgroundColor: "black" }}>
          const value = useSmile('hello')
        </code>
        <div>value is {useSmileValue}</div>
      </div>

      {/* ⬆️ UP HERE!! */}
      {/* <!-- Add your own useless hook example above this comment! --> */}

      <div className="card">
        <h2>
          useRandomCodingStamina - This hook will return beverage to add more
          stamina while coding.
        </h2>

        <code style={{ backgroundColor: "black" }}>
          const beverage = useRandomCodingStamina();
        </code>
        <div>
          Your stamina's add up is{" "}
          <span style={{ color: "whitesmoke" }}>
            {useRandomCodingStamina()}
          </span>
        </div>
      </div>

      <div className="card">
        <h2>useTruthy - This hook will return true to eternity.</h2>

        <code style={{ backgroundColor: "black" }}>
          const isAccept = useTruthy();
        </code>
        <div>
          A: Should we hangout to night ?<br />
          B:&nbsp;
          <span style={{ color: "whitesmoke" }}>
            {useTruthy() ? "Yes" : "No"}
          </span>
        </div>
      </div>

      <div className="card">
        <h2>useApple - Does nothing, and returns random apple.</h2>

        <code style={{ backgroundColor: "black" }}>
          const value = useApple()
        </code>
        <div>value is either 🍎 or 🍏</div>
      </div>

      <div className="card">
        <h2>useSus - ඞ</h2>

        <code>const value = useSus("createSus")</code>
        <div>value is {useSusValue}</div>
      </div>

      <div className="card">
        <h2>
          useFullStop - a useless hook that return string value with (.) full
          stop.
        </h2>

        <code style={{ backgroundColor: "black" }}>
          const value = useFullStop("Hello World")
        </code>
        <div>value is {useFullStopValue}</div>
      </div>

      <div className="card">
        <h2>useEmpty - a useless hook that returns empty string.</h2>

        <code>const value = useEmpty()</code>
        <div>value is {useEmptyValue}</div>
      </div>

      {/* ⬆️ UP HERE!! */}
      {/* <!-- Add your own useless hook example above this comment! --> */}

      <div className="card">
        <h2>useException - a useless hook to log message as error.</h2>

        <code style={{ backgroundColor: "black" }}>
          useLogException("An error is occured")
        </code>
        <div>The error "An error is occured" will be logged in console.</div>
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
