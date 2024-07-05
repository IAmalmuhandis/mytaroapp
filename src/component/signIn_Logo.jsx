import React from 'react'
import { red } from '../utils/colors';
import { Stack } from '@mui/material';
import { ReactComponent as Logo } from '../assets/logo/Logo.svg';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/btnAnimation.css';

const SigninBtn = () => {

  const navigate = useNavigate();

  const onClick = () =>{
    navigate('/signin')
  }

  
  return (
    <button className='lg:w-52 lg:h-[3.3rem] md:w-48 md:h-12 w-36 h-9 rounded-3xl md:text-xl text-xs text-white font-[500] btnAnimation' style={{backgroundColor: red}} onClick={onClick}>Sign in</button>
  )
}

const Logo_Btn = () =>{
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen
  return(
    <Stack spacing={2} direction="row" mx={1} mt={{ xs: 3, sm: 5, md: 7 }} justifyContent='space-between'>
      <Link to='/'><Logo width={isLargeScreen ? 187 : 65} height={isLargeScreen ? 109 : 65}/></Link>
      <SigninBtn />
    </Stack>
  )
}

export default Logo_Btn