import React from 'react'
import {getDatafromToken} from './controllers/Acontrollers.js'
import { Card, CardContent, Typography, Avatar,Box } from "@mui/material";


import { useEffect } from 'react';
const viewU = () => {
  
    const y= getDatafromToken();
    // console.log("data from token",y,getDatafromToken())
  

  
  
  return (
    <div>
<Box sx={{display:"flex",alignItems:"center",justifyContent:"center",alignContent:"center", height: "100vh", width: "100%", background:"#819A91"}}>
  <Card sx={{ maxWidth: 600, margin: "20px auto", textAlign: "center", padding: 2 ,width:400,background:"#D1D8BE"}}>
      <Avatar
        sx={{ width: 80, height: 80, margin: "10px auto", bgcolor: "primary.main",fontSize:"1.7rem" }}
      >
        {y?.fullName.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")[0]}
      </Avatar>
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{fontSize:"1.7rem",color:"#00000",fontWeight:"550"}}>{
        y?.fullName.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
          
          }</Typography>
          {/* y.fullName.charAt(0).toUpperCase() + y.fullName.slice(1); */}
        {/* <Typography variant="body1"><strong>Name:</strong> {y.fullName}</Typography> */}

        <Typography variant="body1" sx={{textAlign: "left",fontSize:"1.3rem",color:"#57564F"}}><strong>Email:</strong> {y.email}</Typography>
        <Typography variant="body1" sx={{textAlign: "left",fontSize:"1.3rem",color:"#57564F"}}><strong>Role:</strong> {y.role}</Typography>
       {/* <Typography variant="body1" sx={{textAlign: "left",fontSize:"1.3rem",color:"#57564F"}}><strong>Role:</strong> {user?.role}</Typography> */}
        
        {/* <Typography variant="body1"><strong>Score:</strong> {y.score}</Typography> */}
      </CardContent>
    </Card>
    </Box>
    </div>
  )
}

export default viewU
