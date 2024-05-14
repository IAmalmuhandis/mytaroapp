import React from 'react'
import Button from '@mui/material/Button';
import { red } from '../utils/colors'
import { useTheme } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from '../assets/css/bluebtn.module.css'

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
    const isSmallLaptop = window.innerWidth >= 900 && window.innerWidth <= 1090
    const btnStyle = {
        width: isLargeScreen ? '450px' : '230px', 
        height: isLargeScreen ? '60px'  : '40px', 
        borderRadius: isLargeScreen ? '18.94px' : '10px', 
        padding: '5.6px', 
        fontSize: isLargeScreen ? '28px' : '18px',
        textTransform: 'none',
        backgroundColor: red,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        lineHeight: '22px',
    }
    return (
        <ThemeProvider theme={customTheme}>
            <Button className={styles.button} color='primary' disableElevation sx={btnStyle} variant="contained" onClick={props.onClick}>{props.title}</Button>
        </ThemeProvider>
    )
}

export default Signin_SignupBtn