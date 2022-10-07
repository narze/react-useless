import Card from "../components/Card"
import { useCuteAndFunny } from "../hooks/useCuteAndFunny"

export default function () {
  const cardProps = {
    desc: "useCuteAndFunny - 😭",
    examples: [
      {
        code: "const value = useCuteAndFunny('https://www.pixiv.net/en/artworks/101491852')",
        value: useCuteAndFunny("https://www.pixiv.net/en/artworks/101491852"),
      },
    ],
    githubUsername: "rayriffy",
  }

  return <Card {...cardProps} />
}
