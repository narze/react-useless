import React, { useEffect, useState } from "react"

const useLoading = () => {
  const [loading, setLoading] = useState(1)

  useEffect(() => {
    const interval = setInterval(
      () => setLoading(loading >= 3 ? 1 : loading + 1),
      1000
    )

    return () => clearInterval(interval)
  }, [loading])

  return `loading${loading === 1 ? "." : loading === 2 ? ".." : "..."}`
}

export default useLoading
