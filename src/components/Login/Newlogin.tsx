import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tip } from "../common/Tip"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export function Newlogin() {
  const Navi = useNavigate();
  const [isDoc, setisDoc] = useState<boolean>(false);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const handleLogin = async () => {
    try{ 
      const res = await axios.post("https://server-production-fa75.up.railway.app/api/login/client", {username, password});
      if(res.data.token){
        localStorage.setItem("token", res.data.token);
        Navi("/doctors")
      }
    }catch(e){
      console.log(e);
      
    }
  }

  return (
    <>
    <div className="grid w-screen place-items-center h-screen">
    <Tabs defaultValue="account" className="w-[400px] ">
      <TabsList className="grid w-full grid-cols-2 mb-10">
        <TabsTrigger value="account">Login</TabsTrigger>
        <TabsTrigger value="password">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              To Visit 1000+ Doctors in One Place
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
              id="gmail"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              defaultValue="example@gmail.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="pass">Password</Label>
              <Input
               type="password"
               value={password}
               onChange={(e) => setpassword(e.target.value)}
               id="pass" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex gap-2 justify-center">
            <Switch onClick={()=>setisDoc(!isDoc)} ></Switch>
            <Label htmlFor="airplane-mode">As {isDoc?"Doctor":"Patient"}</Label>
            </div>
            <button onClick={()=> {username&&password?handleLogin():null}}>
            <Tip mess="already a user?"  title="Login">
            </Tip>
            </button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input
                id="new"
                type="password"
                />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
    </>
  )
}
