import React from 'react'
import Button from '@mui/material/Button';
import { red } from '../utils/colors';
import { Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { deepOrange } from '@mui/material/colors';


// const Avt = () =>{
//     return(
//         <Avatar
//         sx={{ bgcolor: deepOrange[500] }}
//         alt="Remy Sharp"
//         src="/broken-image.jpg"
//       >
//         B
//       </Avatar>
//     )
// }

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
    <Stack spacing={5} direction="row" mx={1} mt={{ xs: 3, sm: 5, md: 7 }} justifyContent='space-between'>
      <Button sx={{color: 'black', marginLeft: '-10px'}} variant='text' onClick={onClick}><ArrowBackIosIcon sx={{fontSize: isLargeScreen ? '40px' : '30px'}} /></Button>
      <SigninBtn width={isLargeScreen ? '200px' : '120px'} height={isLargeScreen ? '50px' : '32px'} fontSz={isLargeScreen ? '18px' : '9px'}/> 
    </Stack>
  )
}

export default Back_Avater