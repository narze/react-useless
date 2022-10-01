import { Outlet } from "react-router-dom"
import AppNavLogo from "./components/AppNavLogo"
import { renderRouteSidebarItems } from "./routes"

function HooksLayout() {
  return (
    <div className="drawer drawer-mobile">
      <input id="app-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="lg:hidden navbar bg-base-100 lg:py-8">
          <div className="flex items-center">
            <label
              htmlFor="app-drawer"
              className="btn btn-square btn-ghost drawer-button lg:hidden"
            >
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        <div className="container mx-auto max-w-[45em] p-8">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="app-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 text-base-content bg-[#1a1a1a]">
          <AppNavLogo />
          {renderRouteSidebarItems}
        </ul>
      </div>
    </div>
  )
}

export default HooksLayout
