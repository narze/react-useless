import { NavLink } from "react-router-dom"

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
    {/* {Object.keys(hookRoutes).map((hookName) => (
      <li key={hookName}>
        <NavLink
          to={hookName}
          className={({ isActive }) =>
            `hover:text-white ${isActive && "active"}`
          }
        >
          {hookName}
        </NavLink>
      </li>
    ))} */}
  </>
)
