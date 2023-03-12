import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Header.css';

const logo = require('../../assets/logo/logo.png');

interface IHeader{
    
}

const Header:React.FC<IHeader> = (props:IHeader) => {
  return (
    <Box sx={{ flexGrow: 1 }} className='header-wrap'>
      <AppBar position="static" className='header'>
        <Toolbar className='toolbar'>
          <Typography className='main-heading' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="logo" className='header-logo'/>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

interface IHeader{
    
}

export default Header
