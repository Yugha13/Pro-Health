import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, Routes } from "react-router-dom"
import { Skeleton } from "../ui/skeleton"
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { Appointments } from "../WebDoctors/allappointment/Appointments";
const PrivateRoute = () => {
  const [isLogged, setisLogged] = useState<boolean>(false);
  const [isloading, setisloading] = useState<boolean>(true);
  const [isdoc, setisdoc] = useState<boolean>(false);
  useEffect( () => {
    const token = localStorage.getItem("token");
    const checkToken = async () => {
      try{
        setisloading(true)
        const res = await axios.post("https://server-production-fa75.up.railway.app/api/token", {token})
        console.log(res);
        if (res.data.status === true) {
          console.log('yes');
          setisLogged(true);
          if(res.data.isDoc == true){
            console.log('here');
            setisdoc(true);
          }
        } else{
          setisLogged(false)
        }
        setisloading(false)
      } catch (e){
        setisloading(false)
      }
    }
    checkToken();
    
  }, [])
  if(isloading){
    return (
    
    <div  className="grid place-items-center grid-cols-2 lg:grid-cols-4 h-screen w-screen">
   { [1,2,3,4,5,6,7,8].map(item => (
    <div key={item} className="flex flex-col  items-center space-x-4 ">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2 grid place-items-center">
        <Skeleton className="h-6 w-[200px]" />
        <Skeleton className="h-6 w-[250px]" />
        <Skeleton className="h-[3rem] w-[250px]" />
      </div>
    </div>
    ))}
    </div>
    )
  }
  if(!isLogged){
    return (
    <div className="grid place-items-center h-screen w-screen">
      404 Page Not Found / UnAuthrized User
      <Link to={"/login"}>Login</Link>
    </div>)
  }
  if(isLogged && isdoc){
    return (
      <div className="grid place-items-center h-screen w-screen">
      <Routes>
        <Route path="/appointments" element={<Appointments/>}/>
      </Routes>
      </div>
    )
  }
  return (
    <>
      <div className="grid place-items-center h-screen">
      <Outlet></Outlet>
      </div>
    </>
  )
}

export default PrivateRoute