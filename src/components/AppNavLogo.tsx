import { Link } from "react-router-dom"
import reactLogo from "../assets/react.svg"

function AppNavLogo() {
  return (
    <div className="flex gap-4 items-center pb-4">
      <Link to="/" className="app-title text-lg">
        React Useless Hooks
      </Link>
      <a href="https://reactjs.org" target="_blank">
        <img
          src={reactLogo}
          className="logo logo--small react"
          alt="React logo"
        />
      </a>
    </div>
  )
}

export default AppNavLogo
