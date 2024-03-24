
import * as React from "react"
import { Link } from "react-router-dom"
import  {Data as data}  from "../Data/userAppointment"
import { cn } from "@/components/utils/cn"
import { ModeToggle } from "../ModeToggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Label } from "@radix-ui/react-label"
 
 
const  NavigationMenusNot = ()=> {
  const [appointments, setappointments] = React.useState<any>([]);
  React.useEffect(() => {
    const res = async() => {
      const res = (await data());
      setappointments(res)
    }
    res()
  }, [])
  return (
    <div className="flex ">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    to="/"
                  >
                    
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Pro Health
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Your Health In our Hands<br/>
                      Ponuu enthutha Gunuu enthutha🔫
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <Link to={"/docs"}>
              <ListItem  title="View Appointments">
                Your All Appointments Here👈🏻(Login Required)
              </ListItem>
              </Link>
              <Link to={"/login"}>
              <ListItem  title="Contact">
                Login
              </ListItem>
              </Link>
              
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    to="/profile"
                  >
                    <img src='https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg' className="rounded-full w-32 lg:w-48" alt=''/>
                    <Label>Not Logged In</Label>
                    <div className="mb-2 mt-4 text-lg font-medium m-auto">
                      
                    </div>
                    
                  </Link>
                </NavigationMenuLink>
                </li>
                <ListItem className="h-100" title="Details">
                  <Link to={"/"}>
                  <div className="">
                    <div className="flex justify-spacebetween">
                    Name: {'****'}
                    </div>
                    <div className="">
                    Age: {'**'}
                    </div>
                    gmail: {'***@gmail.com'}
                    </div>
                  </Link>
              </ListItem>
              <Link to={"/doctors"}>
              <ListItem className="" title="Upcoming Appointment">
                <div className="bg-red-400 text-white mt-2 rounded-xl text-center">
                  {appointments?appointments[0]?.username:"no appointments"}
                </div>
                
              </ListItem>
              </Link>
                </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          
            <NavigationMenuLink  className={navigationMenuTriggerStyle()}>
              <Link to={"/doctors"}>
              View Doctors
              </Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <div className="grid place-items-end w-full gap-4 mr-4">
    <ModeToggle></ModeToggle>
    </div>
    </div>
  )
}
 
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  ref
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default NavigationMenusNot