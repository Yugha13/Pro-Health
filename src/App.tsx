import { ThemeProvider } from "@/components/theme-provider"
import { Route, Routes } from "react-router-dom"
import { Newlogin } from "./components/Login/Newlogin"
import {DoctorsList}  from "./components/Doctors/DoctorsList"
import NavigationMenus from "./components/common/NavigationMenus"
import  Home  from "./components/home/Home"
function App() {
  return (
    <ThemeProvider  defaultTheme="system"  storageKey="vite-ui-theme">
      <NavigationMenus></NavigationMenus>
      <div className="grid place-items-center h-screen">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Newlogin></Newlogin>}></Route>
          <Route path="/profile" element={<h1>Profile</h1>}></Route>
          <Route path="/test" element={<Home></Home>}></Route>
          <Route path="/doctors" element={<DoctorsList></DoctorsList>}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
