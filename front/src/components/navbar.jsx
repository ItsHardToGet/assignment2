import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {isAdmin,isLoggedIn} from './controllers/Acontrollers.js'
const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const navigate=useNavigate();
  // const { window } = props;
  // const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const logout=()=>{
   var yy=window.confirm("Do you want to logout");
    if(yy){
      localStorage.removeItem("token")
      navigate("/")
    }
  }
  // const drawer = (
  //   <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
  //     <Typography variant="h6" sx={{ my: 2 }}>
  //       NGO : 
  //     </Typography>
  //     <Divider />
  //   <Button onClick={()=>navigate("/viewU")}>Home</Button>
  //   <Button onClick={()=>navigate("/viewAll")}> view All</Button>
  //   <Button>logout</Button>
  //   </Box>
  // );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' ,background:"#A08963"}}>
      {/* <CssBaseline /> */}
      <AppBar component="nav">
        <Toolbar>
        
           
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            NGO
          </Typography>
          
          <Button  sx={{color:"white"}} onClick={()=>navigate("/viewU")}>Home</Button>
    {isAdmin()&&<Button onClick={()=>navigate("/viewAll")}  sx={{color:"white"}}> view All</Button>}
          <Button  sx={{color:"white"}} onClick={()=>navigate('/uiewU')}>Register</Button>


    
    <Button  sx={{color:"white"}} onClick={logout}>logout</Button>
        </Toolbar>
      </AppBar>
      
      
    </Box>
  );
}




export default DrawerAppBar;

