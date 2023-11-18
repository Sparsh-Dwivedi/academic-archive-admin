import axios from "axios";
import { loginSuccess } from "../Redux/userRedux";

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

export const searchRecord= async (req,type,token)=>{
    const config={
        headers:{
            'token': `Bearer ${token}`
        }
    }
    try{
        const res=await publicRequest.post('/record/search/'+type+'/',req,config)
        console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
        return err;
    }
}

export const searchPaper= async (req,cite,type,token)=>{
    const config={
        headers:{
            'token': `Bearer ${token}`
        }
    }
    try{
        const res=await publicRequest.post('/papers/search/'+type+'/'+cite,req,config)
        console.log(res)
        return res;
    }
    catch(err){
        console.log(err)
        return err;
    }
}

export const login= async (dispatch,user)=>{
    try{
        const res=await publicRequest.post('/auth/login',user)
        if(res.data.isAdmin===false)    return {
            response:{status:401,data:'You are not an Admin, only admin can login.'}
        }
        const {accessToken,...userDetails}=res.data;    
        dispatch(loginSuccess({accessToken,userDetails}));
        return res;
    }
    catch(err){
        console.log(err)
        return err;
    }
}
