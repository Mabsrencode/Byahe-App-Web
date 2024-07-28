import { BrowserRouter, Routes, Route } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import AdminLayout from "./layout/AdminLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NoPage from "./pages/NoPage"
import Admin from "./pages/Admin/Admin"
import { AdminProvider } from "./context/useContext"
import SignIn from "./pages/SignIn"
import VerifiedDrivers from "./pages/Admin/VerifiedDrivers"
import DriversVerification from "./pages/Admin/DriversVerification"
import Graph from "./pages/Admin/Graph"
import Settings from "./pages/Admin/Settings"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
            <Route path="sign-in-as-admin" element={<SignIn />} />
          </Route>
          <Route path="/" element={<AdminLayout />}>
            <Route element={<AdminProvider />}>
              <Route path="/admin" element={<Admin />} />
              <Route path="/verified-drivers" element={<VerifiedDrivers />} />
              <Route path="/drivers-verification" element={<DriversVerification />} />
              <Route path="/graph" element={<Graph />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
