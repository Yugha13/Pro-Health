import axios from "axios"

export const Data = async () => {
    
    const token = localStorage.getItem("token");
    const body = {username: 'ashwin', token }
    try{
        const res = await axios.post("https://server-production-fa75.up.railway.app/api/app", body);
        console.log(res);
        if(res.data.status){
            return res.data.appointment.reverse()
        }else{
            return "error"
        }

    }catch{
        
    }
}
/*
app.post("/api/app", tokenCheck, async(req, res)=>{
    const patientName = req.username;
    try{
        const appointment = await Appointment.find({patientName});
        res.json({appointment, status: true})
    }catch(err){
        res.status(400).json({status: false})
    }
})
 */

