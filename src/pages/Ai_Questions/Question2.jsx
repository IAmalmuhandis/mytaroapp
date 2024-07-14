import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import { blue } from '../../utils/colors';
import { ReactComponent as Arrow } from '../../assets/svg/Arrow.svg';
import { ReactComponent as Illustration } from '../../assets/svg/Honeymoon-pana 1.svg';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../../assets/css/btnAnimation.css'

const customTheme = createTheme({
    palette: {
      primary: {
        main: blue, 
      },
    },
});

const Btn = (props) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen
  const isSmallLaptop = window.innerWidth >= 900 && window.innerWidth <= 1090
  const btnStyle = {
      width: isLargeScreen ? '139px' : '77px', 
      height: isLargeScreen ? '50px'  : '33px', 
      borderRadius: isLargeScreen ? '27px' : '14px', 
      padding: '5.6px', 
      fontSize: isLargeScreen ? '28px' : '16px',
      textTransform: 'none',
      backgroundColor: blue,
      fontFamily: 'Montserrat',
      fontWeight: '500',
      lineHeight: '19.5px',
  }
  return (
      <ThemeProvider theme={customTheme}>
        <Button className='btnAnimation' color='primary' disableElevation sx={btnStyle} variant="contained" onClick={props.onClick}>{props.title}</Button>
      </ThemeProvider>
  )
}

const Question2 = ({onNext}) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen;
  const isSmallLaptop = window.innerWidth >= 900 && window.innerWidth <= 1024;

  const typeSomtingStyle = {
    backgroundColor: '#E7E7E7',
    borderRadius: isLargeScreen ? '60px' : '20.29px',
    fontWeight: '8.77px',
    '& .MuiOutlinedInput-root': {
      height: isLargeScreen ? '70px' : '35px', 
      width: isLargeScreen ? '440px' : '164px',
      fontSize: isLargeScreen ? '18px' : '12px',
      '& fieldset': {
        border: 'none', 
      },
    },
  }

  const handleNext = (guest) => {
    localStorage.setItem('guest', JSON.stringify(guest))
    onNext();
  };

  return (
    <Container maxWidth="none">
       <Typography
            mt={3}
            fontFamily='Montserrat'
            fontSize={{xl: 30, lg: 30, md: 30, sm: 30, xs: 15 }}
            lineHeight={2}
            color={blue}
            fontWeight={800}
            textAlign={{xl: 'center', lg: 'center', md: 'center', xs: 'left', sm: 'center'}}
            ml={{sm: -5, xs: -5}}
          >
            Please Answer the Questions!
          </Typography>
          <Typography
            mt={2}
            fontFamily='Montserrat'
            fontSize={{xl: 20, lg: 20, md: 20, sm: 20, xs: 12 }}
            lineHeight={2}
            color={blue}
            fontWeight={700}
            textAlign={{xl: 'center', lg: 'center', md: 'center', xs: 'left', sm: 'center'}}
            ml={{sm: -5, xs: -5}}
          >
            How many guest are you expecting to attend?
          </Typography>
          <div className='mt-1 flex items-center justify-start lg:justify-center'>
            <Arrow width={isLargeScreen || isSmallLaptop ? '173px' : '112px'} height={isLargeScreen || isSmallLaptop ? '27px' : '23px'} />
          </div>
          <Stack className='pb-4 items-center justify-center' mt={0} spacing={{xl: 30, lg: 15, md: 2, xs: 2, sm: 2}} direction={{xl:'row', lg: 'row', md: 'column', xs: 'column', sm: 'column'}}>
             <Stack>
             <Illustration width={isLargeScreen || isSmallLaptop ? 509 : 335} height={isLargeScreen ? 450 : 335} />
             </Stack>
             <Stack spacing={2}>
                <Stack spacing={1} direction='row'>
                  <Btn title='100' onClick={() => handleNext(100)} />
                  <Btn title='200' onClick={() => handleNext(200)} />
                  <Btn title='300' onClick={() => handleNext(300)} />
                </Stack>
                <Stack spacing={1} direction='row'>
                  <Btn title='400' onClick={() => handleNext(400)} />
                  <Btn title='500' onClick={() => handleNext(500)} />
                  <Btn title='600' onClick={() => handleNext(600)} />
                </Stack>
                <Stack spacing={1} direction='row'>
                  <Btn title='700' onClick={() => handleNext(700)} />
                  <Btn title='800' onClick={() => handleNext(800)} />
                  <Btn title='900' onClick={() => handleNext(900)} />
                </Stack>
                <Stack spacing={0} direction="column" alignItems="center" mt={5}>
                <Typography className='items-center font-[Montserrat] ' sx={{ color: blue, fontWeight: 800, fontSize: isLargeScreen ? '22.29px' : '9px', lineHeight: '28.4px', letterSpacing: '1%' }}>Didn't find the answer?</Typography>
                <div className='flex justify-center' >
                <TextField
                sx={typeSomtingStyle}
                placeholder="Type something.........."
              />
              </div>
               </Stack>
             </Stack> 
          </Stack>
    </Container>
  )
}

export default Question2