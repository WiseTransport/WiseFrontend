import { Route, Routes } from "react-router-dom"
import { SignUp, WiseMap, Login } from "@/pages"
import { TestPage } from "./pages/Test"

function App() {
  return (
    <Routes>
      <Route element={<WiseMap />} path="/" />
      <Route element={<SignUp />} path="/sign-up" />
      <Route element={<Login />} path="/login" />
      <Route element={<TestPage />} path="/test" />
    </Routes>
  )
}

export default App
