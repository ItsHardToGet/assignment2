import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom'
import { Card, CardContent, Typography, Avatar,Box ,Button} from "@mui/material";
import {findone} from './controllers/Acontrollers.js'
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
const viewId = () => {
  // const {id}=useParams();
  const navigate=useNavigate()
  const [user, setUser] = useState({});
   const location = useLocation();
  //  var p="";
  const use = location.state?.user;

  useEffect(()=>{
    
  
    // const location = useLocation();
  setUser(use)
// console.log("location",location.state.user,user);
  var p=use.firstName.charAt(0).toUpperCase();
  // console.log("p",p)
   
  },[])

  return (
    <div>
<Box sx={{display:"flex",alignItems:"center",justifyContent:"center",alignContent:"center", height: "100vh", width: "100%", background:"#819A91"}}>
   
     <Card sx={{ maxWidth: 600,width:400,height:320 ,margin: "20px auto", textAlign: "center", padding: 2,mu:"4",background:"#D1D8BE" }}>
         <Avatar
           sx={{ width: 80, height: 80, margin: "10px auto", bgcolor: "primary.main",fontSize:"1.7rem" }}
         >
           {use.firstName.charAt(0).toUpperCase()} {/* First letter of name */}
         </Avatar>
         <CardContent>
           <Typography variant="h5" gutterBottom sx={{fontSize:"1.7rem",color:"#00000",fontWeight:"550"}}>
            
            {`${use?.firstName.charAt(0).toUpperCase() +use.firstName.slice(1)+" "+use?.lastName.charAt(0).toUpperCase()+use.lastName.slice(1)}`}
            </Typography>
           {/* <Typography variant="body1"><strong>Name:</strong> {y.fullName}</Typography> */}
   
           <Typography variant="body1" sx={{textAlign: "left",fontSize:"1.3rem" ,color:"#57564F"}}><strong>Email:</strong> {user?.email}</Typography>
           
           <Typography variant="body1" sx={{textAlign: "left",fontSize:"1.3rem",color:"#57564F"}}><strong>Role:</strong> {user?.role}</Typography>
           <Typography variant="body1" sx={{textAlign: "left" ,fontSize:"1.3rem",color:"#57564F"}}><strong>Phone:</strong> {user?.mobile}</Typography>
           <Button variant='filled' sx={{background:"#819A91",mt:2,mb:2,}} onClick={()=>navigate("/viewAll")}>Back</Button>
           {/* <Typography variant="body1"><strong>Score:</strong> {y.score}</Typography> */}
         </CardContent>
       </Card>
       </Box>
       </div>
  )
}

export default viewId
