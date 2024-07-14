import React from 'react'
import Button from '@mui/material/Button';
import { red } from '../../utils/colors';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const SigninBtn = (props) => {

  const navigate = useNavigate();

  const onClick = () =>{
    navigate('/signin')
  }
  
  return (
    <button className='lg:w-52 lg:h-[3.3rem] md:w-48 md:h-12 w-36 h-9 rounded-3xl md:text-xl text-xs text-white font-[500] btnAnimation' style={{backgroundColor: red}} onClick={onClick}>Sign in</button>
  )
}

const Back_Avater = ({onClick}) =>{
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen

  return(
    <div className='flex flex-row justify-between md:mt-8 mt-5 w-full'>
      <Button sx={{color: 'black', marginLeft: '-10px'}} variant='text' onClick={onClick}><ArrowBackIosIcon sx={{fontSize: isLargeScreen ? '40px' : '30px'}} /></Button>
      <SigninBtn width={isLargeScreen ? '200px' : '120px'} height={isLargeScreen ? '50px' : '32px'} fontSz={isLargeScreen ? '18px' : '9px'}/> 
    </div>
  )
}

export default Back_Avater