import React from "react";
import { Paper,Typography,Button,TextField,Avatar } from "@mui/material";
import './login.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface ILoginWrapper{

}

const LoginWrapper:React.FC<ILoginWrapper> = (props:ILoginWrapper) =>{
  return (
    <div className="login-panel">
      <Paper elevation={3}>
        <div className="form-wrap">
          <div className="form-section">
            <AccountCircleIcon 
            className="user-icon" 
            color="primary"
            fontSize='large'/>
            <Typography 
            variant="h5"
            className="form-heading">
              Sign In
            </Typography>
        </div>
        <div className="form-section">
          <div className="row">
            <TextField id="outlined-basic" className="input-text" label="Username" variant="outlined" />
          </div>
          <div className="row">
          <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          className="input-text"
          />
          </div>
        </div>
        <div className="form-section">
          <Button 
          className="form-btn" 
          variant="contained">
              Sign In
          </Button>
        </div>
        </div>
      </Paper>
    </div>
  )
}

export default LoginWrapper;