import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import { blue } from '../utils/colors';
import { ReactComponent as Arrow } from '../assets/svg/Arrow.svg';
import { ReactComponent as Illustration } from '../assets/svg/Address-cuate 1.svg';
import ContinueBtn from '../component/continueBtn';

const Btn = (props) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen
  const isSmallLaptop = window.innerWidth >= 900 && window.innerWidth <= 1090
  const btnStyle = {
      width: isLargeScreen ? '230px' : '140px', 
      height: isLargeScreen ? '70px'  : '45px', 
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

const Question3 = ({onNext}) => {
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
              fontSize: isLargeScreen ? '30px' : '14px',
              lineHeight: isLargeScreen ? '70px' : '20px',
              color: blue,
              fontWeight: '800',
              textAlign: 'center',
            }}
            mt={3}
          >
            Please Answer the Questions!
          </Typography>
          <Typography
           sx={{
            fontFamily: 'Montserrat',
            fontSize: isLargeScreen ? '22px' : '15px',
            lineHeight: isLargeScreen ? '40px' : '25px',
            color: blue,
            fontWeight: '700',
            letterSpacing: '1%',
            textAlign: 'center',
          }}
          mt={2}
          >
            What is the preferred location?
          </Typography>
          <div
            style={{ marginTop: '5px', display: 'flex', alignItems: 'center', justifyContent: isLargeScreen ? 'center' : 'center' }}
          >
            <Arrow width={isLargeScreen || isSmallLaptop ? '173px' : '112px'} height={isLargeScreen || isSmallLaptop ? '27px' : '23px'} />
          </div>
          <Stack mt={3} sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={isDesktopScreen ? 30 : 2} direction={isDesktopScreen ? 'row' : 'column'}>
             <Stack>
             <Illustration width={isLargeScreen || isSmallLaptop ? 509 : 335} height={isLargeScreen ? 509 : 335} />
             </Stack>
             <Stack spacing={3}>
                <Stack spacing={isLargeScreen ? 4 : 2} direction='row'>
                    <Btn title='Kano' onClick={handleNext} />
                    <Btn title='Kaduna' onClick={handleNext} />    
                </Stack>
                <Stack spacing={isLargeScreen ? 4 : 2} direction='row'>
                    <Btn title='Abuja' onClick={handleNext} />
                    <Btn title='Katsina' onClick={handleNext} />    
                </Stack>
                <Stack spacing={isLargeScreen ? 4 : 2} direction='row'>
                    <Btn title='Jigawa' onClick={handleNext} />
                    <Btn title='Bauchi' onClick={handleNext} />    
                </Stack>
                <Stack spacing={isLargeScreen ? 4 : 2} direction='row'>
                    <Btn title='Kebbi' onClick={handleNext} />
                    <Btn title='Borno' onClick={handleNext} />    
                </Stack>
             </Stack>  
          </Stack>
    </Container>
  )
}

export default Question3