import React from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import image from "./uploads/login_image.jpg"
import FaceIcon from '@mui/icons-material/Face';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {login} from "./controllers/Acontrollers.js"
const Login = () => {
    const navigate=useNavigate();
const [log,setLog]=useState({email:"",password:""})
const [err,seterr]=useState("")
const onClick=(e)=>{
  seterr("")

    // console.log(e.target.value);
    setLog({...log,[e.target.name]:e.target.value})
      // console.log(log);
}
const handleSubmit=async(e)=>{
 e.preventDefault()
console.log("submitted");
      // console.log(log);

try{
const data=await login(log)
// console.log(data.data);
localStorage.removeItem("token")
if(data.data.err==1){
  seterr(data.data.msg)
}else{
localStorage.setItem("token",JSON.stringify(data.data.token))
seterr(data.data.msg)
navigate("/viewU")
}
}
catch(e){
console.log("error occored while logging")
}
      // if(log?.Username!==''&&log?.password!==''){
      //   navigate("/User")
      // }
      

}

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#C5B0CD",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: 400,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
         
        <Typography variant="h5" textAlign="center" sx={{color:"#415E72",fontWeight:"550",mb:"0"}} >
          {/* <FaceIcon sx={{fontSize: "3rem" }}/>  */}
           <img src={image} alt="Logo" width="400rem" />
        </Typography>
        {err&&<Alert severity="warning">{err}</Alert>}
         
        <Typography variant="h5" textAlign="center" sx={{color:"#415E72",fontWeight:"550",fontSize:"1.7rem",}}>
          Welcome
        </Typography>
         <form onSubmit={handleSubmit}>
        <TextField label="Email" variant="outlined" fullWidth  name="email" value={log.email}  onChange={onClick} required 
          sx={{mb:3}} />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          name="password"
          onChange={onClick}
          required
          value={log.password}
          sx={{mb:2}}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth sx={{pt:"1rem",pb:"1rem", borderRadius: "50px" ,mb:2,mt:1}}>
          Login
        </Button>
        <Button onClick={()=>navigate("/register")}>Click here to register</Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;

