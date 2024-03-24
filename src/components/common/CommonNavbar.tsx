import { useEffect, useState } from "react";
import NavigationMenus from "./NavigationMenus";
import NavigationMenusNot from "./NavigationMenusNot";
import axios from "axios";
import DocNavigation from "./DocNavigation";
const CommonNavbar = () => {
    
  const [isLogged, setisLogged] = useState<boolean>(false);
  const [isloading, setisloading] = useState<boolean>(true);
  const [isdoc, setisdoc] = useState<boolean>(true);
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
          if(res.data.isdoc){
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
    
  }, []);

  if(isloading){
    return <></>
  }
  if(isLogged && isdoc){
    return <DocNavigation/>
  }
  if(isLogged) {
    return <NavigationMenus></NavigationMenus>
  } else {
    return <NavigationMenusNot/>
  }
}

export default CommonNavbar