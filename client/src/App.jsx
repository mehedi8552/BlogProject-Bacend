import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./Layout/NavBar"
function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<NavBar/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
