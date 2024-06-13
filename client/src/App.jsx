import { BrowserRouter, Routes, Route } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NoPage from "./pages/NoPage"
import Admin from "./pages/Admin"
import { UserProvider } from "./context/useContext"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route element={<UserProvider />}>
              <Route path="/admin" element={<Admin />} />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
