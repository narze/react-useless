import Card from "../components/Card"
import { useBreakdownQueryParam } from "../hooks/useBreakdownQueryParam"

export default function () {
  const cardProps = {
    desc: "useBreakdownQueryParam - a useBreakdownQueryParam hook that returns breakdown of query param.",
    examples: [
      {
        code: 'const value = useBreakdownQueryParam("q=scope&sxsrf=A")',
        value: useBreakdownQueryParam("q=scope&sxsrf=A"),
      },
      {
        code: 'const anotherValue = useBreakdownQueryParam("q=scope&sxsrf=A")',
        value: useBreakdownQueryParam("q=scope&sxsrf=A"),
      },
    ],
    githubUsername: "k0nji",
  }

  return <Card {...cardProps} />
}
