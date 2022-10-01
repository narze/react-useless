import { useMemo } from 'react'

export function useFullStop(inputValue: string) {
  const result = useMemo(() => `${inputValue}.`, [])

  return result
}