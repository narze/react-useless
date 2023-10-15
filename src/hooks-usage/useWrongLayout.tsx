import { useState } from "react"
import { useWrongLayout } from "../hooks/useWrongLayout"

type ThaLayout = "Manoonchai" | "Kedmanee"
type EngLayout = "QWERTY" | "Dvorak"

export default function () {
  const [originalValue, setOriginalValue] = useState("")
  const [engLayout, setEngLayout] = useState<EngLayout>("QWERTY")
  const [thaLayout, setThaLayout] = useState<ThaLayout>("Kedmanee")
  const value = useWrongLayout(engLayout, thaLayout, originalValue)
  return (
    <div className="card w-full">
      <h2>
        useWrongLayout - returns string with switched keyboard layout. Work both
        ways!
      </h2>
      <div>
        <code>
          const value = useWrongLayout("QWERTY", "Kedmanee",
          "iyd,b.=jf;'fk;g,njvrik;cl'") //value is "รักมิใช่ดวงดาวเมื่อพราวแสง"
        </code>
        <div>
          <div className="form-control py-3">
            <label className="label">
              <span className="label-text">English Layout</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              onChange={(sel) => {
                setEngLayout(sel.target.value as EngLayout)
              }}
            >
              <option selected value="QWERTY">
                QWERTY
              </option>
              <option value="Dvorak">Dvorak</option>
            </select>
            <label className="label">
              <span className="label-text">Thai Layout</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              onChange={(sel) => {
                setThaLayout(sel.target.value as ThaLayout)
              }}
            >
              <option selected value="Kedmanee">
                Kedmanee
              </option>
              <option value="Manoonchai">Manoonchai</option>
            </select>
            <input
              type="text"
              placeholder="Try it out!"
              className="input input-bordered w-full max-w-xs mt-3"
              value={originalValue}
              onChange={(inp) => {
                setOriginalValue(inp.target.value)
              }}
            />
          </div>
          <span>
            {originalValue.length !== 0
              ? `Value is ${value}`
              : "Start typing to see the result."}
          </span>
        </div>
      </div>
      <div>
        Contributed by{" "}
        <a href={`https://github.com/gxjakkap`} target="_blank">
          @gxjakkap
        </a>
      </div>
    </div>
  )
}
