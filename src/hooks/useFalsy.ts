import { useMemo } from "react"
export const useFalsy = () => {
    const falsy = useMemo(() => false, [])

    return falsy
}