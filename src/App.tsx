import { Routes, Route, Link } from "react-router-dom"
import HooksLayout from "./HooksLayout"
import { renderHookRoutes } from "./routes"

import reactLogo from "./assets/react.svg"
import "./App.css"

function HomePage() {
  return (
    <div className="App app-container">
      <div className="flex justify-center gap-8">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="flex flex-col">
        <div className="app-title">React Useless Hooks</div>
        <div className="text-2xl lg:text-4xl font-bold text-center">
          Monorepo for react hooks,
        </div>
        <div className="text-2xl font-bold text-center opacity-60">
          mostly useless btw 😂
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <Link to="/hooks" className="btn btn-primary w-40">
          Get Started
        </Link>
        <a
          href="https://github.com/narze/react-useless"
          target="_blank"
          className="btn w-40"
        >
          View on Github
        </a>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path="hooks" element={<HooksLayout />}>
        {renderHookRoutes}
      </Route>
    </Routes>
  )
}

export default App
