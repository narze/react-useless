import { NavLink, Route } from "react-router-dom"
import UseCuteAndFunnyDocs from "./hooks/useCuteAndFunny/useCuteAndFunny.docs"
import UseEvenDocs from "./hooks/useEven/useEven.docs"
import UseLessDocs from "./hooks/useLess/useLess.docs"

const hookRoutes: { [key: string]: JSX.Element } = {
  useCuteAndFunny: <UseCuteAndFunnyDocs />,
  useLess: <UseLessDocs />,
  useEven: <UseEvenDocs />,
}

export const renderHookRoutes = Object.keys(hookRoutes).map((hookName) => (
  <Route key={hookName} path={hookName} element={hookRoutes[hookName]}></Route>
))

export const renderRouteSidebarItems = Object.keys(hookRoutes).map(
  (hookName) => (
    <li>
      <NavLink
        key={hookName}
        to={hookName}
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        {hookName}
      </NavLink>
    </li>
  )
)

export const firstHookRoute = `/hooks/${Object.keys(hookRoutes)[0]}`
