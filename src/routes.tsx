import { NavLink } from "react-router-dom"
import { allHooksUsage } from "./hooks-usage"

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
    {Object.entries(allHooksUsage).map(([name, Component]) => (
      <li key={name}>
        <NavLink
          to={`/hooks/${name}`}
          className={({ isActive }) =>
            `hover:text-white ${isActive && "active"}`
          }
        >
          {name}
        </NavLink>
      </li>
    ))}
  </>
)
