import { Component, FC, ReactElement } from "react"

type ExampleProp = {
  code: string
  value: any
}
export type CardProps = {
  desc: string
  examples: Array<ExampleProp | Component | FC | ReactElement>
  githubUsername?: string
}

const Card = ({ desc, examples, githubUsername }: CardProps) => {
  return (
    <div className="card">
      <h2>{desc}</h2>
      {examples.map((example, idx) => {
        if ("code" in example) {
          return (
            <div key={idx}>
              <code style={{ backgroundColor: "black" }}>{example.code}</code>
              <div>value is {example.value}</div>
            </div>
          )
        } else {
          return (
            <div key={idx}>
              <>{example}</>
            </div>
          )
        }
      })}
      {githubUsername ? (
        <div>
          Contributed by{" "}
          <a href={`https://github.com/${githubUsername}`} target="_blank">
            @{githubUsername}
          </a>
        </div>
      ) : null}
    </div>
  )
}

export default Card

export type { ExampleProp }
