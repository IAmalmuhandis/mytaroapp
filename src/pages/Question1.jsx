import { Container, Stack, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { blue } from '../utils/colors';
import { ReactComponent as Arrow } from '../assets/svg/Arrow.svg';
import { ReactComponent as Illustration } from '../assets/svg/Banknote-pana 1.svg';
import BlueBtn from '../component/blueBtn';

const Question1 = ({ onNext }) => {

    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
    const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
    const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen
    const isSmallLaptop = window.innerWidth >= 900 && window.innerWidth <= 1024 

    const [answer, setAnswer] = useState('');
  
    const handleNext = () => {
      // Here you can add validation logic for the answer if needed
      // For simplicity, we just move to the next step
      onNext();
    };
  
    return (
      <Container maxWidth="none">
        <Typography sx={{ 
          fontFamily: 'Montserrat', 
          fontSize: isLargeScreen ? '44px' : '18px', 
          lineHeight: isLargeScreen ? '85px' : '20px', 
          color: blue, 
          fontWeight: '800',  
          textAlign: isLargeScreen ? 'center' : 'left'
          }}
          mt={3}
          ml={-7}
          >Please Answer the Questions!
        </Typography>
        <Typography sx={{ 
          fontFamily: 'Montserrat', 
          fontSize: isLargeScreen ? '32px' : '15px', 
          lineHeight: isLargeScreen ? '40px' : '20px', 
          color: blue, 
          fontWeight: '700', 
          letterSpacing: '1%', 
          textAlign: isLargeScreen ? 'center' : 'left' 
          }}
          mt={2}
          ml={-7}
          >Do you have a budget?
        </Typography>
        <div style={isLargeScreen ? {marginTop: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center'} : {marginTop: '5px'}}>
            <Arrow width={isLargeScreen || isSmallLaptop ? '193px' : '112px'} height={isLargeScreen || isSmallLaptop ? '37px' : '23px'}/>
        </div>
        <Stack sx={{alignItems: 'center'}} spacing={isLaptopScreen || isDesktopScreen ? 30 : 5} direction={isLaptopScreen || isDesktopScreen ? 'row' : 'column'}>
          <Illustration width={isLargeScreen || isSmallLaptop ? 509 : 335} height={isLargeScreen ? 509 : 335} />
          <Stack spacing={3}>
              <BlueBtn title='Yes' />
              <BlueBtn title='No' />
          </Stack>
        </Stack>
      </Container>
    );
  };

export default Question1