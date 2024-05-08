import React from 'react'
import Button from '@mui/material/Button';
import { red } from '../utils/colors';
import { Stack } from '@mui/material';
import { ReactComponent as Logo } from '../assets/logo/Logo.svg';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const customTheme = createTheme({
    palette: {
      primary: {
        main: red, 
      },
    },
});

const SigninBtn = (props) => {

  const navigate = useNavigate();

  const btnStyle = {
    width: props.width, 
    height: props.height, 
    borderRadius: '32px', 
    padding: '5.6px', 
    fontSize: props.fontSz,
    textTransform: 'none',
    fontFamily: 'Montserrat',
    fontWeight: '500px',
    lineHeight: '10.97px',
    letterSpacing: '-3%'
  }

  const onClick = () =>{
    navigate('/signin')
  }
  
  return (
    <ThemeProvider theme={customTheme}>
        <Button color='primary' disableElevation sx={btnStyle} variant="contained" onClick={onClick}>Sign in</Button>
    </ThemeProvider>
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
      <SigninBtn width={isLargeScreen ? '200px' : '120px'} height={isLargeScreen ? '50px' : '32px'} fontSz={isLargeScreen ? '18px' : '9px'}/>
    </Stack>
  )
}

export default Logo_Btn