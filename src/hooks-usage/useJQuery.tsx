import Card from "../components/Card"
import { useJQuery } from "../hooks/useJQuery"

export default function () {
  const cardProps = {
    desc: "useJQuery - but returning a jQuery object is too useful. It returns element selected by selector instead",
    examples: [
      // 1.) For simple form, just pass the hook's return value
      {
        code: 'const value = useJQuery(".logo").map((m, idx) => <div key={idx}>{m.outerHTML}</div>)}',
        value: useJQuery(".logo").map((m, idx) => (
          <div key={idx}>{m.outerHTML}</div>
        )),
      },
    ],
    githubUsername: "wiennat",
  }

  return <Card {...cardProps} />
}
