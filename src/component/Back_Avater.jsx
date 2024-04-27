import React from 'react'
import Button from '@mui/material/Button';
import { red } from '../utils/colors';
import { Stack } from '@mui/material';
import { ReactComponent as Logo } from '../assets/logo/Logo.svg';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { deepOrange } from '@mui/material/colors';

const Avt = () =>{
    return(
        <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      >
        B
      </Avatar>
    )
}

const SigninBtn = (props) => {

  const navigate = useNavigate();

  const btnStyle = {
    width: props.width, 
    height: props.height, 
    borderRadius: '32px', 
    padding: '5.6px', 
    fontSize: props.fontSz,
    textTransform: 'none',
    backgroundColor: red,
    fontFamily: 'Montserrat',
    fontWeight: '500px',
    lineHeight: '10.97px',
    letterSpacing: '-3%'
  }

  const onClick = () =>{
    navigate('/signup')
  }
  
  return (
    <Button color='primary' disableElevation sx={btnStyle} variant="contained" onClick={onClick}>Signin/Signup</Button>
  )
}

const Back_Avater = () =>{
  const navigate = useNavigate();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen

  const onClick = () =>{
    navigate('/choose')
  }

  return(
    <Stack spacing={2} direction="row" mx={1} mt={{ xs: 3, sm: 5, md: 7 }} justifyContent='space-between'>
      <Button sx={{color: 'black'}} variant='text' onClick={onClick}><ArrowBackIosIcon sx={{fontSize: isLargeScreen ? '40px' : '30px'}} /></Button>
      <SigninBtn width={isLargeScreen ? '200px' : '120px'} height={isLargeScreen ? '50px' : '32px'} fontSz={isLargeScreen ? '18px' : '9px'}/> 
    </Stack>
  )
}

export default Back_Avater