import Card from "../components/Card"
import { useJquery } from "../hooks/useJquery"

// Default export a functional component which includes hook's usage
// You can use our Card component or roll your own container component
export default function () {
  const cardProps = {
    desc: "useJquery - but returning jquery object is too useful. It returns element selected by selector",
    examples: [
      // 1.) For simple form, just pass the hook's return value
      {
        code: 'const value = useJquery(".logo").map((m, idx) => <div key={idx}>{m.outerHTML}</div>)}',
        value: useJquery(".logo").map((m, idx) => (
          <div key={idx}>{m.outerHTML}</div>
        )),
      },
    ],
    githubUsername: "wiennat",
  }

  return <Card {...cardProps} />
}
