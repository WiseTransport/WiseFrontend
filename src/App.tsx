import { Route, Routes } from "react-router-dom"
import { SignUp, WiseMap, Login } from "@/pages"

function App() {
  return (
    <Routes>
      <Route element={<WiseMap />} path="/" />
      <Route element={<SignUp />} path="/sign-up" />
      <Route element={<Login />} path="/login" />
    </Routes>
  )
}

export default App
