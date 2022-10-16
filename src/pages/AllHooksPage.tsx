import React, { Suspense } from "react"
import { useSpring, animated, easings } from "react-spring"
import reactLogo from "../assets/react.svg"
import { allHooksUsage, Hook } from "../hooks-usage"

function App() {
  const props = useSpring({
    val: allHooksUsage.length,
    from: { val: 1 },
    config: { duration: 2500, easing: easings.easeOutCubic },
  })

  const hookCounting = (
    <animated.span className="number">
      {props.val.to((val) => Math.floor(val))}
    </animated.span>
  )

  return (
    <div className="App">
      <div className="flex justify-center gap-4">
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="text-center app-title">React Useless Hooks</h1>
      <p className="text-center font-bold opacity-60">
        We have {hookCounting} useless hooks, and counting...
      </p>

      {/* New hooks usage components automatically loaded from src/hooks-usage */}
      {allHooksUsage.map((hook: Hook) => {
        const HookComponent = React.lazy(
          () => import(`../hooks-usage/${hook.name}.tsx`)
        )
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <HookComponent key={hook.name} />
          </Suspense>
        )
      })}

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
