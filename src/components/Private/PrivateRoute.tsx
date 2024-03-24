import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"
import { Skeleton } from "../ui/skeleton"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NavigationMenus from "../common/NavigationMenus";
const PrivateRoute = () => {
  
  const navi = useNavigate();
  const [isLogged, setisLogged] = useState<boolean>(false);
  const [isloading, setisloading] = useState<boolean>(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const checkToken = async () => {
      try{

        setisloading(true)
        const res = await axios.post("https://server-production-fa75.up.railway.app/api/token", {token})
        console.log(res);
        if (res.data.status === true) {
          console.log('yes');
          setisLogged(true);
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
    <div className="grid place-items-center h-screen w-screen">
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
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
  return (
    <>
      <div className="grid place-items-center h-screen">
      <Outlet></Outlet>
      </div>
    </>
  )
}

export default PrivateRoute