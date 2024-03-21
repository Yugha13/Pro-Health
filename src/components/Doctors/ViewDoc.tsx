import * as React from "react"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { cn } from "@/components/utils/cn"
import { Rating } from "@material-tailwind/react";
export const Display = () => {
    const params = useParams();
    //console.log(params);
    const [name, setname] = useState<any>();
    const [err, seterr]  = useState<any>();
    useEffect(() => {
      const fetchDoc = async () => {
        try{
          const res = await axios.get(`https://server-production-fa75.up.railway.app/doc/${params.name}`);
          console.log(res);
          if(res.data ){
            if(res.data.username){
              console.log(res.data);
              
              return setname(res.data);
            }else{
              return seterr(true)
            }
          }
        }catch(e){
          seterr(true);
        }
      }
      fetchDoc()
    }, [])
    if(err || !name){
      return (
      <h2 className="flex-row justiy-center">
        <>{err?"404 page not found": "Loading"}</>
      </h2>)
    }
    return (
        
        <ul className="grid p-4 md:w-1/2 rounded-2xl lg:grid-cols-2 rounded-xl select-none justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
              <div
                className="lg:row-span-2 col-span-2 row-span-2 rounded-xl select-none justify-end rounded-md  p-6 no-underline outline-none focus:shadow-md"
              >
                <div className="mb-2 mt-4 text-lg font-medium">
                  <img  className="rounded-2xl" src={name.profileUrl}></img>
                </div>  
              </div>
          <div className="pl-4 " >
          <ListItem  title="Details" className=" w-100">
            <div className="mt-1">
            Name: {name.username}<br></br>
            Gmail: {"ashwin@gmail.com"}<br/>
            phn: (274) 295-5462<br/>
            email: fe@esa.tw<br/>
            </div>
          </ListItem>
          </div>
          <div>
          <ListItem title="Rating" className="grid place-items-center">
          <div className="grid place-items-center mt-3">
            <Rating readonly value={3} unratedColor="yellow" ratedColor="yellow" placeholder={"hi"} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}></Rating>
            <p className={cn("transition-colors text-sm text-muted-foreground")} >{"•321"}</p>
          </div>
          </ListItem>
          <div className="" >
          <ListItem  title="Details" className="">
            <div className="mt-1">
            Name: {name.username}<br></br>
            Gmail: {"ashwin@gmail.com"}<br/>
            phn: (274) 295-5462<br/>
            email: fe@esa.tw<br/>
            </div>
          </ListItem>
          </div>
          <div className="pl-4 " >
          <ListItem  title="Details" className=" w-100">
            <div className="mt-1">
            Name: {name.username}<br></br>
            Gmail: {"ashwin@gmail.com"}<br/>
            phn: (274) 295-5462<br/>
            email: fe@esa.tw<br/>
            </div>
          </ListItem>
          </div>
          </div>
          <div className="col-span-2 grid  place-items-start pl-4 md:place-items-start ">
            <div className="flex gap-2 ">
          <button className="bg-blue-500 hover:bg-blue-700  border-2 border-blue-700  h-fit w-fit p-2 text-white font-bold py-2 px-4 rounded text-sm leading-snug text-muted-foreground">Book</button>
          <button className="focus:shadow-md  border-2 border-blue-300  h-fit w-fit p-2 text-white font-bold py-2 px-4 rounded text-sm leading-snug text-muted-foreground">Call</button>
            </div>
          </div>
        </ul>
      
    )
  }


const ListItem = React.forwardRef<
React.ElementRef<"div">,
React.ComponentPropsWithoutRef<"a">
>(({ className, title, children,  }) => {
return (
  <li>
    
      <div
        className={cn(
          "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className=" text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </div>
  </li>
)
})
ListItem.displayName = "ListItem"
