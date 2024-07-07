import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container, Stack, Typography } from '@mui/material';
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
            What is the proposed date and time for the event?
          </Typography>
          <div
            style={{ marginTop: '5px', display: 'flex', alignItems: 'center', justifyContent: isLargeScreen ? 'center' : 'left' }}
          >
            <Arrow width={isLargeScreen || isSmallLaptop ? '173px' : '112px'} height={isLargeScreen || isSmallLaptop ? '27px' : '23px'} />
          </div>
          <Stack className='-mt-5' sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={isDesktopScreen ? 30 : 2} direction={isDesktopScreen ? 'row' : 'column'}>
             <Stack>
             <Illustration width={isLargeScreen || isSmallLaptop ? 430 : 335} height={isLargeScreen ? 430 : 335} />
             </Stack>
             <Stack sx={{justifyContent:'center', alignItems: 'center'}} spacing={2}>
                <DateTimePicker />
             </Stack>  
          </Stack>
          <div className='w-full pb-4 flex  xl:mt-0 mt-2 justify-center items-center'>
                <ContinueBtn onClick={handleNext} />
          </div>
    </Container>
  )
}

export default Question5