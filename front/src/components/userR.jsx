import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import { Link as RouterLink } from 'react-router-dom';
// import {} from '@mui/material'

import { deepOrange } from '@mui/material/colors';

import { Container,Box,Typography,TextField,Button ,Link,FormControl,InputLabel,Select,MenuItem} from '@mui/material'
import Avatar from '@mui/material/Avatar';
import LockOutlined from '@mui/icons-material/LockOutlined' 
import { rigister } from './controllers/Acontrollers.js';
// import { Link } from 'react-router-dom';
const register = () => {
    const [state,setState]=useState({firstName:"",lastName:"",email:"",password:"",mobile:"",role:"Volunteer"});
    const [error,seterr]=useState([]);
    const navigate=useNavigate();
    const handleChange=(event)=>{
      seterr([]);
        const {name,value}=event.target;        
        setState({...state,[name]:value})      
     }
 
    const handleSubmit=(event)=>{
event.preventDefault();
// console.log(state);
rigister(state)
.then(res=>{
    if(res.data.err==0){
        alert(res.data.msg);
        // navigate("/");
        refresh();
    }
    if(res.data.err==1){
        seterr(res.data.msg);
       
    }
    // console.log("res:",res)
  })
.catch(err=>console.log("err",err))

 }
 const refresh=()=>{
 seterr([]);
 setState({firstName:"",lastName:"",email:"",password:"",mobile:""});
 }
 


  return (
    <Box
          sx={{
            background:"#819A91", // choose your favorite!
          width:"100%",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
   
      <Container component="main" maxWidth="xm" sx={{
    width: {
      xs: '100%',  // mobile
      sm: '75%',   // small screen
      md: '50%',   // medium screen
      lg: '30%'    // large screen
    }
  }}>
      <Box sx={{
        marginTop:8,
        display:"flex",
        flexDirection:"column",
        alignItems:"centre",
        bgcolor :"#f5f5f5",
        padding:"30 px",
        borderRadius:"2%",
       
      }}>
        <Avatar 
        // sx={{m:1,bgcolor:"secondary.main" , mx: 'auto'}}
         sx={{
          height:80,
          width:80,
    // increase height
    fontSize: 40, // increase text size inside Avatar (e.g., "V")
    bgcolor: "#1976d2", // example background color
     mx: 'auto'
  }}
        >
          <LockOutlined />
        </Avatar>
        {/* <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
  N
</Avatar> */}
<Typography component="h1" variant="h4" fontWeight="bold" variants="h5" sx={{ display:'block',textAlign:"center", mb: 3 }}>
  Sign Up
  {error!=""&&<Alert variant="filled" severity="error">
{error}
</Alert>

  }
</Typography>
<Box component="form" sx={{mt:1, mb: 3}} onSubmit={handleSubmit}>
<TextField margin='normal ' sx={{ mb: 2}} fullWidth id='firstName' label="First Name" required name='firstName'autoComplete="firstName" autoFocus  onChange={handleChange}  value={state.firstName}  ></TextField>
 
<TextField margin='normal 'sx={{ mb: 2}} fullWidth id='lastName' label="Last Name" required name='lastName'autoComplete="lastName" autoFocus onChange={handleChange}  value={state.lastName}></TextField>
<TextField margin='normal 'sx={{ mb: 2 }} fullWidth id='mobile' label="Mobile" required name='mobile'autoComplete="mobile" autoFocus onChange={handleChange} value={state.mobile} ></TextField>
 
  <TextField margin='normal 'sx={{ mb: 2 }} fullWidth id='email' label="Email Address" required name='email'autoComplete="email" autoFocus onChange={handleChange} value={state.email} ></TextField>
   <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth sx={{mb:2}}>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state.role}
          name="role"
          label="Role"
          onChange={handleChange}
        >
          {/* <MenuItem value="Admin">Admin</MenuItem> */}
          <MenuItem value="Volunteer">Volunteer</MenuItem>
          <MenuItem value="Intern">Intern</MenuItem>

        
        </Select>
      </FormControl>
    </Box>
  <TextField sx={{ mb: 3 }} fullWidth id='password' label="Password" required name='password'autoComplete="current-password"  type='password'autoFocus onChange={handleChange} value={state.password}></TextField>
          <Button type="submit" variant="contained" fullWidth sx={{ mb:2}}>Sign In</Button>
          <Button  variant="outlined" color="primary" fullWidth sx={{ mb:2}} onClick={refresh}>Refresh</Button>
          {/* <Link  component={RouterLink}  to="/" sx={{ display:'block',textAlign:"center", mb: 3 }}>Login Here</Link> */}
</Box>
      </Box >
      </Container>
      </Box>
    
  )
}

export default register

