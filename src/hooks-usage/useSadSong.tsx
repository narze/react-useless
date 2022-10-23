import Card from "../components/Card"
import { useSadSong } from "../hooks/useSadSong"

// Default export a functional component which includes hook's usage
// You can use our Card component or roll your own container component
export default function () {
  const cardProps = {
    desc: "useSadSong - Play your favorite sad song",
    examples: [
      () => {
        const sadSong = useSadSong()

        return (
          <>
            <button onClick={sadSong}>Play Sad Song</button>
          </>
        )
      },
    ],
    githubUsername: "phatsanphonna",
  }

  return <Card {...cardProps} />
}
