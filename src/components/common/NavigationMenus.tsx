
import * as React from "react"
import { Link } from "react-router-dom"
 
import { cn } from "@/components/utils/cn"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
 
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]
 
const  NavigationMenus = ()=> {
  return (
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
                    to="/profile"
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
              <Link to={"/doctors"}>
              <ListItem className="" title="Upcoming Appointment">
                <div className="bg-red-400 text-white mt-2 rounded-xl text-center">
                Jony Sins
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
  )
}
 
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
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