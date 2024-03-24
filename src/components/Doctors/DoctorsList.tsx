
import { doctorList } from "../Data/doctorList"
import { useEffect, useState } from "react"
import { CardContent } from "../ui/card"
import { Card } from "../ui/card"
import { Avataricon } from "./AvatarIcon"
import { Link } from "react-router-dom"
export function DoctorsList() {
  const [works, setwork] = useState<any>([])
  useEffect(() => {
    const fetchData = async()=>{
        //console.log('in fetchdata');
        const data = await doctorList();
        setwork(data);
    }
    fetchData();
  }, [])
  return (
    <div className="grid lg:grid-cols-5 mt-9  sm:grid-cols-2 sm:gap-4 lg:gap-7  gap-3">
        {works.map((item:any) => {
          let rating = parseFloat((Math.random()*10).toFixed(2))
          let ratings = 0;
          if(rating<1){
            ratings = parseFloat((1 + rating).toFixed(2))
          }else{
            ratings =  rating
          }
          let view:any = parseFloat((Math.random()*1000).toFixed(2))
          let views:any
          if(view<1){
            views = parseInt((1 + view).toFixed(1))
          }else{
            views =  parseInt(view)
          }
            return (
            <Link to={`/doctors/${item.username}`}>
            <Card key={item.username}>
                <CardContent className="flex w-64 aspect-square items-center justify-center flex-col gap-3 p-6 ">
                  <span className="text-xl font-semibold">{<Avataricon img={item.profileUrl}/>}</span>
                  <span className="text-xl font-semibold">Dr. {item.username}</span>
                  <div className="flex items-center mb-2 flex-col p-4">
                  <div className="flex justify-center">
                  <p className={`bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded ${ratings<4?"dark:bg-red-300":rating>8?"dark:bg-green-200":"dark:bg-blue-200"} dark:text-blue-800 `} >{ratings}</p>
                  <p className="ms-2 font-medium text-gray-900 dark:text-white">{ratings<4?"Average":rating>8?"Excellent":"Good"}</p>
                  </div>
                  <span className="h-2"></span>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{views} reviews</p>
                  </div>
                </CardContent>
              </Card>
              </Link>
              )

        })
        }
    
    </div>
  )
}
