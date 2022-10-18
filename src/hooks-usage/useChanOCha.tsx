import { ChangeEvent, useState } from "react"
import Card from "../components/Card"

export default function () {
  const [lovedOne, setLovedOne] = useState<string>()
  const [submit, setSubmit] = useState<boolean>(false)
  const lName = "Chan-o-cha"

  const cfLetter = (str: string | undefined) => {
    if (!str) return ""
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const handleTyping = (e: ChangeEvent<HTMLInputElement>) => {
    setLovedOne(e.target.value)
    if (submit) setSubmit(false)
  }

  const handleSubmit = () => {
    if (!lovedOne) return
    setSubmit(true)
  }

  const val = () => (
    <>
      <input
        type="text"
        style={{ lineHeight: "2rem" }}
        onChange={handleTyping}
        placeholder={"Type your leaved one <3"}
      />
      <button
        onClick={() => {
          handleSubmit()
        }}
      >
        Submit
      </button>
      {submit && (
        <div
          style={{
            backgroundColor: "#aba8a8",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          Congrats's your loved are{" "}
          <span style={{ color: "#bc2bb7", fontWeight: "bold" }}>
            {" "}
            🎉🎉 {cfLetter(lovedOne)} {lName} 🥳🥳
          </span>
        </div>
      )}
    </>
  )

  const cardProps = {
    desc: "useChanOCha - returns The name of the someone you love",
    examples: [{ code: "const value = useChanOCha('<3')", value: val() }],
    githubUsername: "moomdate",
  }

  return <Card {...cardProps} />
}
