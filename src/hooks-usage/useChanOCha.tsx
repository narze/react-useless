import { ChangeEvent, useState } from "react"
import Card from "../components/Card"
import { useChanOCha } from "../hooks/useChanOCha"

export default function () {
  const [lovedOne, setLovedOne] = useState<string>()
  const name = useChanOCha(lovedOne)
  const [submit, setSubmit] = useState<boolean>(false)

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
            🎉🎉 {name} 🥳🥳
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
