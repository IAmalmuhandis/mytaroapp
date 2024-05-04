import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import { blue } from '../utils/colors';
import { ReactComponent as Arrow } from '../assets/svg/Arrow.svg';
import { ReactComponent as Illustration } from '../assets/svg/Date picker-pana 1.svg';
import ContinueBtn from '../component/continueBtn';
import DateTimePicker from '../component/dateTimePicker';

const Question5 = ({onNext}) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen;
  const isSmallLaptop = window.innerWidth >= 900 && window.innerWidth <= 1024;

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
            What is the proposed date and time for the event?
          </Typography>
          <div
            style={{ marginTop: '5px', display: 'flex', alignItems: 'center', justifyContent: isLargeScreen ? 'center' : 'flex-start' }}
          >
            <Arrow width={isLargeScreen || isSmallLaptop ? '193px' : '112px'} height={isLargeScreen || isSmallLaptop ? '37px' : '23px'} />
          </div>
          <Stack mt={3} sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={isDesktopScreen ? 30 : 2} direction={isDesktopScreen ? 'row' : 'column'}>
             <Stack>
             <Illustration width={isLargeScreen || isSmallLaptop ? 509 : 335} height={isLargeScreen ? 509 : 335} />
             </Stack>
             <Stack sx={{justifyContent:'center', alignItems: 'center'}} spacing={2}>
                <DateTimePicker />
                <ContinueBtn onClick={onNext} />
             </Stack>  
          </Stack>
    </Container>
  )
}

export default Question5