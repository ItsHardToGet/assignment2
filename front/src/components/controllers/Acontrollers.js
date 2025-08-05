import axios from 'axios'
 import { jwtDecode } from "jwt-decode";

const URL="http://localhost:8899/api"
// http://localhost:8899/

// https://leaderboard2.onrender.com
// const URL="https://leaderboard2.onrender.com/api"

const rigister=async(data)=>{
   try{
   const output= await axios.post(`${URL}/signup`,{data})
   return output;

   } 
   catch(e){
    console.log("something went wrong")
   }
}
const login=async(dat)=>{
   try{
   const output= await axios.post(`${URL}/signin`,{"data":dat})
   return output;

   } 
   catch(e){
    console.log("something went wrong")
   }
}
const findall=async()=>{
   try{
   const output= await axios.get(`${URL}/findall`)
   return output;
   } 
   catch(e){
    console.log("something went wrong")
   }
}
const findone=async(dat)=>{
   try{
    // console.log("data in findone",dat)
   const output= await axios.get(`${URL}/findId/${dat}`)
   return output;
// /findId
   } 
   catch(e){
    console.log("something went wrong",e)
   }
}



const getToken=()=>{
    return localStorage.getItem("token");
}
const isLoggedIn=()=>{
    return getToken()!=undefined?true:false;
}
const getDatafromToken=()=>{
    try{
        // console.log("taken",getToken())
        // console.log("satge 1");
      const  decoded=jwtDecode(getToken())
        // console.log("satge 2");

    //    console.log(" decoded", decoded)
    return decoded;
    }
    catch(err){
        return {"err":err};
    }

}
const isAdmin=()=>{
    return getDatafromToken()?.role=='Admin'?true:false
}


export{findone,findall,login,rigister,isAdmin,getDatafromToken,getToken,isLoggedIn}