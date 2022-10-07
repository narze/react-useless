import { useCallback } from "react"

export const useLottery = (props: {
  yourName: string
  yourLastName: string
  yourAge: number
  yourDogName: string
  yourDadName: string
  yourMomName: string
  yourGirlFriendName: string
  yourLastMeal: string
  yourFavoriteNumber1: number
  yourFavoriteNumber2: number
}) => {
  const { yourFavoriteNumber1, yourFavoriteNumber2, ...rest } = props

  const renderProfile = useCallback(
    () =>
      Object.entries(rest)?.map(([key, value]) => (
        <p>{`${key.toLocaleUpperCase()} is ${value}`}</p>
      )),
    []
  )

  return (
    <>
      <h4>{`Information`}</h4>
      {renderProfile()}
      <hr />
      <h4>{`We will predict the two digits prize with your information please wait.`}</h4>
      <h6>{`Wait a minute we are processing your lucky number with Artificial Intelligence and Big data...`}</h6>
      <div>{`The last two digits prize is ${String(yourFavoriteNumber1)[0]}${
        String(yourFavoriteNumber2)[0]
      }.`}</div>
      <div>{`Give me 10% if you won.`}</div>
    </>
  )
}
