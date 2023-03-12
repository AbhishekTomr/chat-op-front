import React from 'react';
import Box from '@mui/material/Box';
import './LandingPage.css';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

interface ILandingPage{

}

const LandingPage:React.FC<ILandingPage> = (props:ILandingPage) => {
  return (
    <Box className='landing-page'>
      <Box className='landing-page-text'>
        <Typography variant='h3' className='landing-img-caption landing-page-caption-heading'>Welcome to Chat OP</Typography>
        <Typography className='landing-page-caption landing-page-caption-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni odit
         neque voluptatum fugit veniam quasi reprehenderit vitae excepturi deserunt?
          Rerum eveniet blanditiis tenetur soluta sunt sint veniam ipsa magnam totam.</Typography>
          <Button className='get-started-btn' variant="contained">Get Started</Button>
      </Box>
      <Box className='img-wrap'>
        
      </Box>
    </Box>
  )
}

export default LandingPage
