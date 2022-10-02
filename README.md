# React Useless Hooks

A collection of [React Custom Hooks](https://reactjs.org/docs/hooks-custom.html) that should not belong anywhere.

## Hacktoberfest

- This repo is created specifically for Hacktoberfest (obviously). If you're interested or want to contribute to my other repos, [let's chat on Discord](https://discord.gg/BWAWegK2pS)! (Most will be in Thai)

## Contribution

- (Optional) ⭐️ This repository
- Create a new hook in `src/hooks` folder.
- ~~Show example usage in `src/App.tsx`.~~ Don't touch anything in `App.tsx`. Create a component that use the hook in `src/hooks-usage` folder, use [the component template](./src/hooks-usage/_TEMPLATE.tsx).
  - Alternatively 🎉, you can run `npm run create:hook <YOUR_HOOK_NAME>` to auto-generate your hook and hook-usage files! for example, `npm run create:hook useMore`
- If you don't know TypeScript, simply use `any` type or import `DefinitelyNotAny` from "./types"
- Try not to update other places or auto-format, it'll cause merge conflicts.

## TODOs

You can help us on these meta-tasks, too.

- [ ] Add more useless hooks
- [ ] Remove useful hooks
- [ ] Publish to NPM
- [ ] Write some less-useless HTML & CSS for the home page
- [ ] ~~Add Tests~~ Nah, that seems useful
