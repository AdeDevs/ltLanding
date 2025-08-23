import { Route, Routes } from "react-router-dom"
import NavBar from "./components/Nav"
import HomePage from "./components/Home"
import SignUpPage, { LogInPage } from "./components/Verification"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>
    </div>
  )
}

export default App
