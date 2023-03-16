import React, {useState} from "react";
import { Paper } from "@mui/material";
import { Typography,Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './login.css';
import SignIn from "./SignIn";
import SignUp from "./SignUp";


const formType:any = {
  'sign in':{
    id: 'sign-in',
    label: 'Sign In',
    helperText: 'Not a member yet?',
    altOption: 'sign up'
  },
  'sign up':
  {
    id: 'sign-up',
    label: 'Sign Up',
    helperText: 'Already a member?',
    altOption: 'sign in'
  }
}


interface ILoginWrapper{

}

const LoginWrapper:React.FC<ILoginWrapper> = (props:ILoginWrapper) =>{
  const [formState,changeFormState] = useState(formType['sign in']);

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
              {formState.label}
            </Typography>
          </div>
          <div className="form-section">
          {formState.id==='sign-in'?<SignIn/>:<SignUp/>}
          </div>
          <div className="form-section">
          <Button 
          className="form-btn" 
          variant="contained">
              {formState.label}
          </Button>
          </div>
          <div className="form-section">
            <Typography variant="subtitle2" className="helper-text">{formState.helperText}<button onClick={()=>{changeFormState(formType[formState.altOption])}} className="link">{formState.altOption}</button></Typography>
          </div>
      </div>
     </Paper>
    </div>
  )
}

export default LoginWrapper;