import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table,Box ,TableBody,Button, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import {findall} from './controllers/Acontrollers.js'
import { useNavigate } from "react-router-dom";
const Leaderboard = () => {
  const [data, setData] = useState([]);
  const navigate =useNavigate();
  var name="";
  useEffect(() => {
   const data=async()=>{
     try{
      const value=  await findall()
      // console.log("value",value.data.pdata);
      setData(value.data.pdata)

     }
     catch(e){
      console.log("error while getting data")
     }

    }
   data();
   
  }, []);

  return (
    <Box sx={{pt:1,background:"#D1D8BE" ,width:"100%",height:"100vh"}}>
    <TableContainer component={Paper} sx={{mt:9,background:"#D1D8BE"}} >
      <Table>
        <TableHead>
          <TableRow sx={{background:"#D1D8BE"}}>
            <TableCell sx={{fontSize:"1.5rem",color:"#604652"}}>Sl no.</TableCell>
            <TableCell sx={{fontSize:"1.5rem",color:"#604652"}}>Username</TableCell>
            <TableCell sx={{fontSize:"1.5rem",color:"#604652"}}>Role</TableCell>
            <TableCell sx={{fontSize:"1.5rem",color:"#604652"}}>Visit</TableCell>

          </TableRow>
        </TableHead>
        <TableBody sx={{background:"#EEEFE0"}}>
          {data.map((row, index) =>{
            let name=row.firstName.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")+" "+ row.lastName.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
             
           return ( <TableRow key={row._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{`${name}`}</TableCell>
             
             
              <TableCell>{row.role}</TableCell>
               <TableCell><Button onClick={()=>navigate(`/viewId`,{ state: { user:row } })}>view</Button></TableCell>
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
};

export default Leaderboard;

