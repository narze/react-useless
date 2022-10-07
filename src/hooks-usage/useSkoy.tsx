import Card from "../components/Card"
import { useSkoy } from "../hooks/useSkoy"

export default function () {
  const cardProps = {
    desc: "useSkoy - returns SkoyLang for us SkoyPeople",
    examples: [
      {
        code: `const value = useSkoy("รักมิใช่ดวงดาวเมื่อพราวแสง")`,
        value: `${useSkoy("รักมิใช่ดวงดาวเมื่อพราวแสง")}`,
      },
    ],
    githubUsername: "santhitak",
  }

  return <Card {...cardProps} />
}
