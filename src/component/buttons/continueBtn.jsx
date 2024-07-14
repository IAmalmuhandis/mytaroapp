import React from 'react'
import Button from '@mui/material/Button';
import { blue, red } from '../../utils/colors'
import { useTheme } from '@mui/material/styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../../assets/css/btnAnimation.css'

const RedcustomTheme = createTheme({
    palette: {
      primary: {
        main: red, 
      },
    },
});

const BluecustomTheme = createTheme({
    palette: {
      primary: {
        main: blue, 
      },
    },
});

const ContinueBtn = ({onClick, color=red}) => {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
    const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
    const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen
    const isSmallLaptop = window.innerWidth >= 900 && window.innerWidth <= 1090
    const btnStyle = {
        width: isLargeScreen ? '300px' : '200px', 
        height: isLargeScreen ? '70px'  : '46px', 
        borderRadius: '20px', 
        padding: '5.6px', 
        fontSize: isLargeScreen ? '28px' : '16px',
        textTransform: 'none',
        backgroundColor: color,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        lineHeight: '19.5px'
    }
    return (
        <ThemeProvider theme={color === red ? RedcustomTheme : BluecustomTheme }>
            <Button className='btnAnimation' color='primary' disableElevation sx={btnStyle} variant="contained" onClick={onClick}>Continue <ChevronRightIcon sx={{fontSize: isLargeScreen ? '35px' : '20px'}} /></Button>
        </ThemeProvider>
    )
}

export default ContinueBtn