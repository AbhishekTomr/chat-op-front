import React from 'react';
import { Typography,Button,TextField } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './login.css';

interface ISignUp{

}

const SignUp:React.FC<ISignUp> = (props:ISignUp) => {
  return (
    <>
    <div className="row">
        <TextField 
            id="outlined-basic" 
            className="input-text" 
            label="First Name" 
            variant="outlined" />
        <TextField 
            id="outlined-basic" 
            className="input-text" 
            label="Last Name" 
            variant="outlined" />
    </div>
    <div className="row">
        <TextField 
            id="outlined-basic" 
            className="input-text" 
            label="Email" 
            variant="outlined" />
    </div>
    <div className="row">
        <TextField 
            id="outlined-basic" 
            className="input-text" 
            label="User Name" 
            variant="outlined" />
    </div>
    <div className="row">
       <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            className="input-text"
      />
    </div>
   </>
  )
};

export default SignUp;
