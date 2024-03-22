
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
 
 
const  NavigationMenus = ()=> {
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
                Your All Appointments Here👈🏻
              </ListItem>
              </Link>
              <Link to={"/login"}>
              <ListItem  title="Contact">
              
                ∙phn: (274) 295-5462<br/>
                ∙email: fe@esa.tw
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
                    to="/private/profile"
                  >
                    <img src='https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp' className="rounded-full w-32 lg:w-48" alt=''/>
                    <div className="mb-2 mt-4 text-lg font-medium m-auto">
                      
                    </div>
                    
                  </Link>
                </NavigationMenuLink>
                </li>
                <ListItem className="h-100" title="Details">
                  <Link to={"/"}>
                  <div className="">
                    <div className="flex justify-spacebetween">
                    Name: {'ashwin'}
                    </div>
                    <div className="">
                    Age: {'18'}
                    </div>
                    gmail: {'ashwin@gmail.com'}
                    </div>
                  </Link>
              </ListItem>
              <Link to={"/private/doctors"}>
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
              <Link to={"/private/doctors"}>
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

export default NavigationMenus