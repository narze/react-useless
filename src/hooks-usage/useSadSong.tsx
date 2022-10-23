import Card from "../components/Card"
import { useSadSong } from "../hooks/useSadSong"

const UseSadSong = () => {
  const sadSong = useSadSong()

  return (
    <>
      <button onClick={sadSong}>Click to play sad song</button>
    </>
  )
}

// Default export a functional component which includes hook's usage
// You can use our Card component or roll your own container component
export default function () {
  const cardProps = {
    desc: "useSadSong - Play your favorite sad song",
    examples: [
      {
        code: "const sadSong = useSadSong()",
        value: <UseSadSong />,
      },
    ],
    githubUsername: "phatsanphonna",
  }

  return <Card {...cardProps} />
}
