import type React from "react"

const modules = import.meta.glob(
  ["./*.tsx", "!./_TEMPLATE.tsx", "!./index.tsx"],
  { eager: true }
)

export const allHooksUsage: Record<string, React.ComponentType> = {}

Object.entries(modules).forEach(([path, module]) => {
  const name = path.match(/^.\/(.+).tsx$/)![1]
  const component = (module as any).default as React.ComponentType
  allHooksUsage[name] = component
})
