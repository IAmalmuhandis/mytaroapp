import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import { blue } from '../utils/colors';
import { ReactComponent as Arrow } from '../assets/svg/Arrow.svg';
import { ReactComponent as Illustration } from '../assets/svg/Honeymoon-pana 1.svg';
import ContinueBtn from '../component/continueBtn';

const Btn = (props) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen
  const isSmallLaptop = window.innerWidth >= 900 && window.innerWidth <= 1090
  const btnStyle = {
      width: isLargeScreen ? '149px' : '77px', 
      height: isLargeScreen ? '63px'  : '33px', 
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
      <Button color='primary' disableElevation sx={btnStyle} variant="contained" onClick={props.onClick}>{props.title}</Button>
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

  const handleNext = () => {
    onNext();
  };

  return (
    <Container maxWidth="none">
       <Typography
            sx={{
              fontFamily: 'Montserrat',
              fontSize: isLargeScreen ? '44px' : '16px',
              lineHeight: isLargeScreen ? '85px' : '25px',
              color: blue,
              fontWeight: '800',
              textAlign: isLargeScreen ? 'center' : 'left',
            }}
            mt={3}
            ml={isLargeScreen ? 0 : -3}
          >
            Please Answer the Questions!
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Montserrat',
              fontSize: isLargeScreen ? '32px' : '15px',
              lineHeight: isLargeScreen ? '40px' : '25px',
              color: blue,
              fontWeight: '700',
              letterSpacing: '1%',
              textAlign: isLargeScreen ? 'center' : 'left',
            }}
            mt={2}
            ml={isLargeScreen ? 0 : -3}
          >
            How many guest are you expecting to attend?
          </Typography>
          <div
            style={{ marginTop: '5px', display: 'flex', alignItems: 'center', justifyContent: isLargeScreen ? 'center' : 'flex-start' }}
          >
            <Arrow width={isLargeScreen || isSmallLaptop ? '193px' : '112px'} height={isLargeScreen || isSmallLaptop ? '37px' : '23px'} />
          </div>
          <Stack mt={3} sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={isDesktopScreen ? 30 : 5} direction={isDesktopScreen ? 'row' : 'column'}>
             <Stack>
             <Illustration width={isLargeScreen || isSmallLaptop ? 509 : 335} height={isLargeScreen ? 509 : 335} />
             </Stack>
             <Stack spacing={3}>
                <Stack spacing={2} direction='row'>
                  <Btn title='100' onClick={handleNext} />
                  <Btn title='200' onClick={handleNext} />
                  <Btn title='300' onClick={handleNext} />
                </Stack>
                <Stack spacing={2} direction='row'>
                  <Btn title='400' onClick={handleNext} />
                  <Btn title='500' onClick={handleNext} />
                  <Btn title='600' onClick={handleNext} />
                </Stack>
                <Stack spacing={2} direction='row'>
                  <Btn title='700' onClick={handleNext} />
                  <Btn title='800' onClick={handleNext} />
                  <Btn title='900' onClick={handleNext} />
                </Stack>
                <Stack spacing={0} direction="column" alignItems="center" mt={5}>
                <Typography sx={{ color: blue, textAlign: 'center', fontWeight: '800', fontFamily: 'Montserrat', fontSize: isLargeScreen ? '22.29px' : '9px', lineHeight: '28.4px', letterSpacing: '1%' }}>Didn't find the answer?</Typography>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
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