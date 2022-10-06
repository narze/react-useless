import type React from "react"

const modules = import.meta.glob(
  ["./*.tsx", "!./_TEMPLATE.tsx", "!./index.tsx"],
  { eager: true }
)

export type Hook = {
  name: string
  Component: React.ComponentType
}

export const allHooksUsage: Hook[] = Object.entries(modules)
  .map(([path, module]) => {
    const name = path.match(/^.\/(.+).tsx$/)![1]
    const component = (module as any).default as React.ComponentType
    return { name, Component: component } as Hook
  })
  .sort((hook, anotherHook) => {
    if (hook.name === "useLess" || anotherHook.name === "paUse") {
      return -1
    }
    if (anotherHook.name === "useLess" || hook.name === "paUse") {
      return 1
    }
    if (hook.name > anotherHook.name) {
      return 1
    }
    if (hook.name < anotherHook.name) {
      return -1
    }
    return 0
  })
