import React from 'react'
import Button from '@mui/material/Button';
import { red } from '../../utils/colors'
import { useTheme } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import '../../assets/css/btnAnimation.css';

const customTheme = createTheme({
    palette: {
      primary: {
        main: red, 
      },
    },
  });

const Signin_SignupBtn = (props) => {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
    const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
    const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen
    const btnStyle = {
        borderRadius: isLargeScreen ? '18.94px' : '12px', 
        fontSize: isLargeScreen ? '28px' : '18px',
        backgroundColor: red,
        fontFamily: 'Montserrat',
        lineHeight: '22px',
    }
    return (
        <ThemeProvider theme={customTheme}>
            <Button className='w-full md:h-16 h-10 font-[500] btnAnimation' sx={btnStyle} color='primary' disableElevation variant="contained" onClick={props.onClick}>{props.title}</Button>
        </ThemeProvider>
    )
}

export default Signin_SignupBtn