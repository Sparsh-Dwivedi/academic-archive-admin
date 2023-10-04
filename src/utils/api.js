import axios from "axios";

const BASE_URL=import.meta.env.VITE_BASE_URL;
console.log(BASE_URL)
const publicRequest = axios.create({
    baseURL:BASE_URL,
});

export const getAllUsers= async ()=>{
    try{
        const res=await publicRequest.get('/auth/getallusers')
        // console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
        return err;
    }
}
