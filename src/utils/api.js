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

export const searchPaper= async (req,cite,type)=>{
    try{
        const res=await publicRequest.post('/papers/search/'+type+'/'+cite,req)
        console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
        return err;
    }
}

