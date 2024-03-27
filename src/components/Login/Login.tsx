import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import axios from "axios"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { fetchUserDetails } from "@/redux/slice/userSlice"


export function Login() {
  const dispatch = useDispatch();
  const [name, setname] = useState<string>("");
  const [pass, setpass] = useState<string>("");
  const Navigator = useNavigate();
  const [isload, setIsload] = useState<boolean>(false);
  const [varient, setVarient] = useState<"secondary" | "destructive" | "link" | "default" | "outline" | "ghost" | null | undefined>("secondary");
  /*const handleSubmit = async(e:any)=>{
    setIsload(true)
    e.preventDefault();
    const rep = await axios.post("https://server-production-fa75.up.railway.app/api/login/cus", {username: name, password: pass});
    if(rep.data.status){
      Navigator("/doctors")
    }else{
      setVarient("destructive");
    }
    setIsload(false)
  }*/
  const handleSubmit =async (params:any) => {
    params.preventDefault();
    setIsload(true)
    dispatch(fetchUserDetails({username: name, password: pass}) as any)
    .then(() => {setIsload(false); Navigator('/doctors')})
    .catch(() => setVarient("destructive"));
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    const checktoken = async () => {
      const res = await axios.post('https://server-production-fa75.up.railway.app/api/token', {token});
      console.log(res);
    }
    checktoken();
    
  })
  return (
    <Card className="w-[350px]" id="card">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>To Visit 1000+ Doctors</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label  htmlFor="name">Name</Label>
              <Input
              onChange={(e) => { setname(e.target.value) }}
              id="name" placeholder="Enter Your Name"
              disabled={isload}
            />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Password</Label>
              <Input
                disabled={isload}
                onChange={(e) => { setpass(e.target.value) }}
                id="pass" 
                placeholder="Enter Your Password" />
            </div>
          </div>
          <div className="w-100 grid place-items-center">
          <Button disabled={isload} variant={varient} className="mt-3">Login</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
