import Card from "../components/Card"
import { usePKazuya } from "../hooks/usePKazuya"

export default function () {
  const cardProps = {
    desc: "usePKazuya - เ ก ลี ย ด ค ว า ม ห วั่ น ไ ห ว",
    examples: [
      {
        code: `const value = usePKazuya("เกลียดความหวั่นไหวที่ก่อตัวในใจฉัน ให้ห้ามเท่าไหร่ใจยิ่งดึงดันให้คิดถึงเธอ")`,
        value: usePKazuya(
          "เกลียดความหวั่นไหวที่ก่อตัวในใจฉัน ให้ห้ามเท่าไหร่ใจยิ่งดึงดันให้คิดถึงเธอ"
        ),
      },
    ],
    githubUsername: "Leomotors",
  }

  return <Card {...cardProps} />
}
