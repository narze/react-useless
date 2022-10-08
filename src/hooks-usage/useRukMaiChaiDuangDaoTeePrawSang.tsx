import Card from "../components/Card"
import { useRukMaiChaiDuangDaoTeePrawSang } from "../hooks/useRukMaiChaiDuangDaoTeePrawSang"

// Default export a functional component which includes hook's usage
// You can use our Card component or roll your own container component
export default function () {
  const cardProps = {
    desc: "useRukMaiChaiDuangDaoTeePrawSang - returns something yada yada yada",
    examples: [
      // 1.) For simple form, just pass the hook's return value
      {
        code: 'const value = useRukMaiChaiDuangDaoTeePrawSang("จาวา ไม่ใช่ จาวาสคริปต์")',
        value: useRukMaiChaiDuangDaoTeePrawSang("จาวา ไม่ใช่ จาวาสคริปต์"),
      },

      // Or 2.), use function component form for more complex example with buttons
      () => {
        const value = useRukMaiChaiDuangDaoTeePrawSang(
          "จาวา ไม่ใช่ จาวาสคริปต์"
        )

        return (
          <>
            <div>value: {value}</div>
          </>
        )
      },
    ],
    githubUsername: "nonkung51",
  }

  return <Card {...cardProps} />
}
