import { useMemo } from "react"

/**
 * @description 50/50 chance of returning Never gonna give you up url or funni cat video url
 * @returns {String} url
 */
export const useCoinTossRickRoll = () => {
  const url = useMemo(() => {
    if (Math.random() > 0.5) {
      return "https://www.youtube.com/watch?v=xvFZjo5PgG0"
    } else {
      return "https://www.youtube.com/watch?v=X8avbciUP3c"
    }
  }, [])

  return url
}
