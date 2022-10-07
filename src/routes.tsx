import { NavLink } from "react-router-dom"
import { allHooksUsage, Hook } from "./hooks-usage"

export const renderRouteSidebarItems = (
  <>
    <li>
      <NavLink
        to="/hooks"
        end
        className={({ isActive }) => `hover:text-white ${isActive && "active"}`}
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
        >
          {hook.name}
        </NavLink>
      </li>
    ))}
  </>
)
