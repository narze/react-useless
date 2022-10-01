import { useEffect } from 'react'

export function useLogException(s: string) {
    useEffect(() => {
        try {
            throw new Error(s)
        } catch (e) {
            console.error(e)
        }
    }, [])
}
