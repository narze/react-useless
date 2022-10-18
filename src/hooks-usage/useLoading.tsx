import Card from "../components/Card"
import useLoading from "../hooks/useLoading"

export default function () {
  const cardProps = {
    desc: "useLoading -  a useless hook that fools you by keep loading text.",
    examples: [
      {
        code: `const loading = useLoading()`,
        value: useLoading(),
      },
    ],
    githubUsername: "PeterWorakarn",
  }

  return <Card {...cardProps} />
}
