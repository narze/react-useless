import { Routes, Route } from "react-router-dom"
import HooksLayout from "./HooksLayout"
import HomePage from "./pages/HomePage"
import AllHooksPage from "./pages/AllHooksPage"
import { renderHookRoutes } from "./routes"
import "./App.css"

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path="hooks" element={<HooksLayout />}>
        <Route index element={<AllHooksPage />}></Route>
        {renderHookRoutes}
      </Route>
    </Routes>
  )
}

export default App
