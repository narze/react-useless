import { useState } from "react"
import Card from "../components/Card"
import { useLessFact } from "../hooks/useLessFact"

const UseLessFact = () => {
  const [isToday, setIsToday] = useState(false)
  const { fact, getFact } = useLessFact(isToday)

  return (
    <>
      <code>const {"{ fact, setFact }"} = useLessFact()</code>
      <div className="hr-2"></div>
      <label className="label">
        <span className="label-text">Random or Today's fact</span>
      </label>
      <select
        className="select select-bordered w-full mb-2  "
        onChange={(sel) => {
          if (sel.target.value === "today") {
            setIsToday(true)
          } else {
            setIsToday(false)
          }
        }}
      >
        <option selected value="random">
          Random Fact
        </option>
        <option value="today">Today's Fact</option>
      </select>
      <button onClick={() => getFact()}>
        Click to get {isToday ? "today's" : "a completely random"} fact
      </button>
      <div className="my-2">
        Your {fact?.type} fact: {fact?.text}
      </div>
      {fact?.type === "today" ? (
        <div className="my-2">Today: {fact?.day?.toDateString()}</div>
      ) : (
        <></>
      )}
      <div>
        Permalink: <a href={fact?.permalink}>{fact?.permalink}</a>
      </div>
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useLessFact- returns useless fact from uselessfacts.jsph.pl (https://uselessfacts.jsph.pl/)",
    examples: [UseLessFact()],
    githubUsername: "gxjakkap",
  }

  return <Card {...cardProps} />
}
