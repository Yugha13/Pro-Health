import { useEffect } from "react";
import NavigationMenus from "./NavigationMenus";
import NavigationMenusNot from "./NavigationMenusNot";
import DocNavigation from "./DocNavigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails } from "@/redux/slice/userSlice";
const CommonNavbar = () => {
  const dispatch = useDispatch();
  const raw = useSelector((item:any) => item)
  const {isloading, islogged, isDoc} = raw.user
  const appointments = raw.app.data
  useEffect(() => {
    dispatch(fetchUserDetails('') as any)
  }, []);

  if(isloading){
    return <NavigationMenusNot></NavigationMenusNot>
  }
  if(islogged && isDoc){
    return <DocNavigation/>
  }
  if(islogged) {
    return <NavigationMenus appointments={appointments}></NavigationMenus>
  } else {
    return <NavigationMenusNot/>
  }
}

export default CommonNavbar