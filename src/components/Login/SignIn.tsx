import React from 'react';
import { TextField } from "@mui/material";
import './login.css';

interface ISignIn{

}

const SignIn:React.FC<ISignIn> = (props:ISignIn) => {
  return (
    <>
        <div className="row">
            <TextField 
                id="outlined-basic" 
                className="input-text" 
                label="Username" 
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

export default SignIn;
