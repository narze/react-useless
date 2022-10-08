// This file is a template, save this file as <yourHookName>.tsx and remove this comment

import Card from "../components/Card"

import { useLess } from "../hooks/useLess"
import { useLottery } from "../hooks/useLottery"

// Default export a functional component which includes hook's usage
// You can use our Card component or roll your own container component
export default function () {
  const cardProps = {
    desc: "useLottery - want to rich? just use it.",
    examples: [
      // For simple form, just pass the hook's return value
      {
        code: `const Lottery = useLottery({yourName: "Boat",
				yourLastName: "Noodle",
				yourAge: 12,
				yourDadName: "Tell me",
				yourMomName: "Please tell me",
				yourDogName: "You",
				yourGirlFriendName: "Share with you",
				yourLastMeal: "noodle",
				yourFavoriteNumber1: 12,
				yourFavoriteNumber2: 1,})`,

        value: useLottery({
          yourName: "Boat",
          yourLastName: "Noodle",
          yourAge: 12,
          yourDadName: "Tell me",
          yourMomName: "Please tell me",
          yourDogName: "You",
          yourGirlFriendName: "Share with you",
          yourLastMeal: "noodle",
          yourFavoriteNumber1: 12,
          yourFavoriteNumber2: 1,
        }),
      },
    ],
    githubUsername: "boatnoodle",
  }

  return <Card {...cardProps} />
}
