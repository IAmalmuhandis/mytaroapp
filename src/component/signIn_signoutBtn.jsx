import React from 'react'
import Button from '@mui/material/Button';
import { red } from '../utils/colors';

const SigninBtn = () => {
  const btnStyle = {
    height: '32px', 
    width: '120px', 
    borderRadius: '32px', 
    padding: '5.6px', 
    fontSize: '9px',
    textTransform: 'none',
    backgroundColor: red,
    fontFamily: 'Montserrat',
    fontWeight: '500px',
    lineHeight: '10.97px',
    letterSpacing: '-3%'
  }
  return (
    <Button color='primary' disableElevation sx={btnStyle} variant="contained">Signin/Signup</Button>
  )
}

export default SigninBtn