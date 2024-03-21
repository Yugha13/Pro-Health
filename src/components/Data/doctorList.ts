import axios from "axios"

export const doctorList = async() => {
    const res = await axios.get("https://server-production-fa75.up.railway.app/doc/all");
    //console.log('in doclist');
    //console.log(res);
    
    if(res.data.respond){
        //console.log('in doclist true');
        return res.data.respond;
    }
    return [];
}

