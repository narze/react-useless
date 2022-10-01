export function useMap<
    ReturnT extends any,
    ParamT extends any
>(hook: (param: ParamT) => ReturnT, ...args: ParamT[]): ReturnT[] {
    return args.map(hook)
}
