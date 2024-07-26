import { BrowserRouter, Routes, Route } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NoPage from "./pages/NoPage"
import Admin from "./pages/Admin"
import { AdminProvider } from "./context/useContext"
import SignIn from "./pages/SignIn"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route element={<AdminProvider />}>
              <Route path="/admin" element={<Admin />} />
            </Route>
            <Route path="*" element={<NoPage />} />
            <Route path="sign-in-as-admin" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
