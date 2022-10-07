import Card from "../components/Card"
import { useWeird } from "../hooks/useWeird"

const UseWeirdExampleComponent = () => {
  return (
    <>
      <code>
        const weird = useWeird() &lt;button style=&#123;weird&#125
        &gt;Haha&lt;/button&gt
      </code>
      <button style={useWeird(12)}>Hahaha</button>
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useWeird - Does something weird",
    examples: [UseWeirdExampleComponent()],
    githubUsername: "pontakornth",
  }

  return <Card {...cardProps} />
}
