import { useCuteAndFunny } from "./useCuteAndFunny"

function UseCuteAndFunnyDocs() {
  const useCuteAndFunnyValue = useCuteAndFunny(
    "https://www.pixiv.net/en/artworks/101491852"
  )

  return (
    <div className="docs-wrapper">
      <h1>useCuteAndFunny</h1>
      <div>😭</div>
      <div className="code-block">
        <pre>
          <code>
            const value =
            useCuteAndFunny('https://www.pixiv.net/en/artworks/101491852')
          </code>
        </pre>
      </div>
      <div>value is {useCuteAndFunnyValue}</div>
    </div>
  )
}

export default UseCuteAndFunnyDocs
