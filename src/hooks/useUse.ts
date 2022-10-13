/**
 * useUse - add extra nested function when using hook
 *
 * @example
 * ```typescript
 * const [counter, setCounter] = useUse(useState, 0)
 *
 * @ts-ignore is need according to the sauce: me, trust me, bro
 * ```
 */
export default function useUse<T extends Function = Function>(
  use: T,
  ...args: any[]
): ReturnType<// @ts-ignore
T> {
  return use(...args)
}
