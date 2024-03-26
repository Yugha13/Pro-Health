import { ThemeProvider } from "@/components/theme-provider"
import { Route, Routes } from "react-router-dom"
import { Newlogin } from "./components/Login/Newlogin"
import {DoctorsList}  from "./components/Doctors/DoctorsList"
import  Home  from "./components/home/Home"
import { Appointments } from "./components/appointments/Appointments"
import { Display } from "./components/Doctors/ViewDoc"
import CommonNavbar from "./components/common/CommonNavbar"
import { Toaster } from "@/components/ui/sonner"

import PrivateRoute from "./components/Private/PrivateRoute"
const Profile = () => {
  console.log("in Profile");
  return <h1>Profile</h1>
}
function App() {

  return (
    <ThemeProvider  defaultTheme="light"  storageKey="vite-ui-theme">
      <CommonNavbar></CommonNavbar>
      <div className="">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Newlogin></Newlogin>}/>
          <Route  element={<PrivateRoute/>}>
            <Route path="profile" element={<Profile/>} />
            <Route path="doctors" element={<DoctorsList></DoctorsList>} />
            <Route path="appointments" element={<Appointments/>} />
            <Route path="doctors/:name" element={<Display></Display>} />
          </Route>
          
        </Routes>
        <Toaster/>
      </div>
    </ThemeProvider>
  )
}

export default App
