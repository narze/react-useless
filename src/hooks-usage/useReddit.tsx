import { useState } from "react"
import { useReddit } from "../hooks/useReddit"

export default function () {
  const [q, setQuery] = useState("")
  return (
    <div className="card w-full">
      <h2>useReddit - search something up in reddit.</h2>
      <div>
        <code>const value = useReddit("ProRevenge")</code>
        <div>
          <div className="form-control pb-3">
            <label className="label">
              <span className="label-text">Type here to search</span>
            </label>
            <input
              type="text"
              placeholder="Search query"
              className="input input-bordered w-full max-w-xs"
              value={q}
              onChange={(inp) => {
                setQuery(inp.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  useReddit(q)
                }
              }}
            />
          </div>
          {q.length !== 0 ? (
            <button
              className="btn"
              onClick={() => {
                useReddit(q)
              }}
            >
              Click here to search for "{q}" on reddit
            </button>
          ) : (
            <></>
          )}
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
