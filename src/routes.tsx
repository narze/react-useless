import { NavLink } from "react-router-dom"
import { allHooksUsage, Hook } from "./hooks-usage"

export const renderRouteSidebarItems = () => {
  const closeDrawer = () => document.getElementById("app-drawer")?.click()

  return (
    <>
      <li>
        <NavLink
          to="/hooks"
          end
          className={({ isActive }) =>
            `hover:text-white my-2 ${isActive && "active"}`
          }
          onClick={closeDrawer}
        >
          All hooks
        </NavLink>
      </li>
      {allHooksUsage.map((hook: Hook) => (
        <li key={hook.name}>
          <NavLink
            to={`/hooks/${hook.name}`}
            className={({ isActive }) =>
              `hover:text-white ${isActive && "active"}`
            }
            onClick={closeDrawer}
          >
            {hook.name}
          </NavLink>
        </li>
      ))}
    </>
  )
}
