import React from 'react'
import Button from '@mui/material/Button';
import { blue } from '../utils/colors'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const BlueBtn = (props) => {
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
        backgroundColor: blue,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        lineHeight: '19.5px',
    }
    return (
        <Button color='primary' disableElevation sx={btnStyle} variant="contained" onClick={props.onClick}>{props.title}</Button>
    )
}

export default BlueBtn