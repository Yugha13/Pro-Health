import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const PrivateRoute = () => {
  
  const navi = useNavigate();
  const [isLogged, setisLogged] = useState<boolean>(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const checkToken = async () => {
      const res = await axios.post("https://server-production-fa75.up.railway.app/api/token", {token})
      console.log(res);
      if (res.data.status === true) {
        setisLogged(true);
      } else{
        setisLogged(false)
      }
    }
    checkToken();
  }, [])
  if(!isLogged){
    navi("/login")
    return (<>
      404
      <Link to={"/login"}>Login</Link>
    </>)
  }
  return (
    <>
      <Outlet></Outlet>
    </>
  )
}

export default PrivateRoute