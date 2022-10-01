import { NavLink, Route } from "react-router-dom"
import UseCuteAndFunnyDocs from "./hooks/useCuteAndFunny/useCuteAndFunny.docs"
import UseEvenDocs from "./hooks/useEven/useEven.docs"
import UseLessDocs from "./hooks/useLess/useLess.docs"
import UseVoidDocs from "./hooks/useVoid/useVoid.docs"

const hookRoutes: { [key: string]: JSX.Element } = {
  useCuteAndFunny: <UseCuteAndFunnyDocs />,
  useLess: <UseLessDocs />,
  useEven: <UseEvenDocs />,
  useVoid: <UseVoidDocs />,
}

export const renderHookRoutes = Object.keys(hookRoutes).map((hookName) => (
  <Route key={hookName} path={hookName} element={hookRoutes[hookName]}></Route>
))

export const renderRouteSidebarItems = Object.keys(hookRoutes).map(
  (hookName) => (
    <li key={hookName}>
      <NavLink
        to={hookName}
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        {hookName}
      </NavLink>
    </li>
  )
)

export const firstHookRoute = `/hooks/${Object.keys(hookRoutes)[0]}`
