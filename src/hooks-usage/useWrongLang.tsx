import Card from "../components/Card"
import { useWrongLang } from "../hooks/useWrongLang"
import { useState } from "react"

// Default export a functional component which includes hook's usage
// You can use our Card component or roll your own container component
const UseWrongLangExample = () => {
  const [text, setText] = useState<string>("")
  const [primary, setPrimary] = useState<
    "Kedmanee" | "Pattachote" | "Manoonchai"
  >("Kedmanee")
  const [secondary, setSecondary] = useState<"Qwerty" | "Dvorak" | "Colemak">(
    "Qwerty"
  )
  const value = useWrongLang(primary, secondary, text)

  return (
    <>
      <code>
        const value = useWrongLang("Kedmanee", "Qwerty", "vtwi;t")
        console.log(value) // อะไรวะ
      </code>
      <div className="flex flex-col w-full gap-4 justify-center items-center max-w-2xl mt-6">
        <input
          type="text"
          className="w-full rounded-lg dark:text-black border-2 border-blue-400 focus:ring focus:ring-blue-500 ring-offset-2 outline-none p-3 duration-200 shadow-lg; "
          placeholder={"ใส่ข้อความที่ต้องการที่นี่..."}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          readOnly={true}
          type="text"
          className="w-full rounded-lg dark:text-black border-2 border-blue-400 focus:ring focus:ring-blue-500 ring-offset-2 outline-none p-3 duration-200 shadow-lg; "
          placeholder={"ข้อความที่แปลงแล้วจะปรากฎ..."}
          value={value}
        />
      </div>
      <div className="flex flex-row w-full gap-4 justify-center items-center max-w-2xl mt-2">
        <div className="flex flex-col gap-0 w-full">
          <p className="text-sm">Primary Layout</p>
          <select
            className="w-full rounded-lg dark:text-black border-2 outline-none p-3 duration-200 shadow-lg; "
            onChange={(e) => setPrimary(e.target.value)}
          >
            <option value="Kedmanee">Kedmanee</option>
            <option value="Manoonchai">Manoonchai</option>
            <option value="Pattachote">Pattachote</option>
            <option value="Qwerty">Qwerty</option>
            <option value="Dvorak">Dvorak</option>
            <option value="Colemak">Colemak</option>
          </select>
        </div>
        <div className="flex flex-col gap-0 w-full">
          <p className="text-sm">Secondary Layout</p>
          <select
            className="w-full rounded-lg dark:text-black border-2 outline-none p-3 duration-200 shadow-lg; "
            onChange={(e) => setSecondary(e.target.value)}
          >
            <option value="Qwerty">Qwerty</option>
            <option value="Dvorak">Dvorak</option>
            <option value="Colemak">Colemak</option>
            <option value="Kedmanee">Kedmanee</option>
            <option value="Manoonchai">Manoonchai</option>
            <option value="Pattachote">Pattachote</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default function () {
  const cardProps = {
    desc: "useWrongLang - useWrongLayout but using wl.js instead",
    examples: [UseWrongLangExample()],
    githubUsername: "tinarskii",
  }

  return <Card {...cardProps} />
}
