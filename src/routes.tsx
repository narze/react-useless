import { NavLink, Route } from "react-router-dom"
import UseCuteAndFunnyDocs from "./hooks/useCuteAndFunny/useCuteAndFunny.docs"
import UseLessDocs from "./hooks/useLess/useLess.docs"

const hookRoutes: { [key: string]: JSX.Element } = {
  useCuteAndFunny: <UseCuteAndFunnyDocs />,
  useLess: <UseLessDocs />,
}

export const renderHookRoutes = Object.keys(hookRoutes).map(
  (hookName, index) => (
    <Route
      key={hookName}
      index={index === 0}
      path={index > 0 ? hookName : undefined}
      element={hookRoutes[hookName]}
    ></Route>
  )
)

export const renderRouteSidebarItems = Object.keys(hookRoutes).map(
  (hookName, index) => (
    <li>
      <NavLink
        key={hookName}
        to={index === 0 ? "/" : hookName}
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        {hookName}
      </NavLink>
    </li>
  )
)
