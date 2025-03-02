import { Route, Routes } from "react-router-dom"
import { WiseMap } from "@/pages"

function App() {
  return (
    <Routes>
      <Route element={<WiseMap />} path="/" />
    </Routes>
  )
}

export default App
