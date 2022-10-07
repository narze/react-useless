import { useEffect, useState } from "react"
import QueryString, { IQueryObject } from "../utils/queryString.util"

const RANDOM_BASE_URI = "https://www.random.org/integers/"

interface RandomOptions {
  min: number
  max: number
}

interface IRandomQuery extends RandomOptions {
  /**
   * Amount of number to be generated
   *
   * @note We will force this filed to 1
   *
   * @see https://www.random.org/clients/http/api/
   * @type {number}
   * @memberof IRandomQuery
   */
  num: number

  /**
   * base of number to be generate
   *
   * @note We will force this field to 10
   * @type {(2 | 8 | 10 | 16)}
   * @memberof IRandomQuery
   */
  base: 2 | 8 | 10 | 16

  /**
   * Amount of column to be generated
   *
   * @note We will force this field to 1
   * @type {number}
   * @memberof IRandomQuery
   */
  col: number

  /**
   * type of return form api
   *
   * @note We will force this field to "plain"
   * @type {("plain" | "html")}
   * @memberof IRandomQuery
   */
  format: "plain" | "html"

  /**
   * type of input to be generate
   *
   *
   * @type {("new" | "id.identifier" | "date.iso-date")}
   * @memberof IRandomQuery
   */
  rnd: "new" | "id.identifier" | "date.iso-date"
}

const MIN_NUMBER = 0
const MAX_NUMBER = 1000000000

export function useTrulyRandom({ min, max }: RandomOptions) {
  if (min < MIN_NUMBER)
    throw new Error(`minimum number should not lower than ${MIN_NUMBER}`)
  if (max > MAX_NUMBER)
    throw new Error(`maximum number should not above ${MAX_NUMBER}`)

  const setUpQuery: IRandomQuery = {
    min: min || -1e9,
    max: max || 1e9,
    num: 1,
    col: 1,
    base: 10,
    format: "plain",
    rnd: "new",
  }
  const queryString = new QueryString({
    ...setUpQuery,
  } as unknown as IQueryObject).toQueryString()
  const [randomNumber, setRandomNumber] = useState<number>(undefined!)

  const randomAgain = async () => {
    fetch(RANDOM_BASE_URI + queryString)
      .then((res) => res.text())
      .then((_randomNumber) => setRandomNumber(() => +_randomNumber))
  }

  useEffect(() => {
    randomAgain()
  }, [])

  return { randomNumber, randomAgain }
}
