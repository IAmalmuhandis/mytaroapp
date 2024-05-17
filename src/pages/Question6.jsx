import { Container, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { blue, grey } from '../utils/colors';
import { ReactComponent as Arrow } from '../assets/svg/Arrow.svg';
import { ReactComponent as Illustration } from '../assets/svg/Questions-cuate 1.svg';
import BlueBtn from '../component/blueBtn';
import { NigeriaNaira } from '../utils/helpers';
import ContinueBtn from '../component/continueBtn';

const Question6 = ({ onNext }) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen;
  const isSmallLaptop = window.innerWidth >= 900 && window.innerWidth <= 1024;

  const [answer, setAnswer] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleNext = () => {
    onNext();
  };

  const handleYesClick = () => {
    setAnswer('Yes');
  };

  const handleNoClick = () => {
    setAnswer('No');
    handleNext();
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Container maxWidth="none">
      {/* Conditionally render initial UI based on the answer state */}
      {answer !== 'Yes' && (
        <div>
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
             Are there any additional details, preference or requirement that you would like to share for the event?
          </Typography>
          <div
            style={{ marginTop: '5px', display: 'flex', alignItems: 'center', justifyContent: isLargeScreen ? 'center' : 'left' }}
          >
            <Arrow width={isLargeScreen || isSmallLaptop ? '173px' : '112px'} height={isLargeScreen || isSmallLaptop ? '27px' : '23px'} />
          </div>
          <Stack mt={isLargeScreen && -5} sx={{ alignItems: 'center', justifyContent: 'space-between' }} spacing={isLaptopScreen || isDesktopScreen ? 30 : 5} direction={isLaptopScreen || isDesktopScreen ? 'row' : 'column'}>
            <Stack>
              <Illustration width={isLargeScreen || isSmallLaptop ? 509 : 335} height={isLargeScreen ? 509 : 335} />
            </Stack>
            <Stack spacing={3}>
              <BlueBtn title="Yes" onClick={handleYesClick} />
              <BlueBtn title="No" onClick={handleNoClick} />
            </Stack>
          </Stack>
        </div>
      )}
      {answer === 'Yes' && (
         <Container maxWidth="none" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
         <Container maxWidth="none" sx={{minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Stack spacing={2} sx={{alignItems: 'center', justifyContent: 'center'}}>
             <div style={{}}>   
             <Typography
                sx={{
                  fontFamily: 'Montserrat',
                  fontSize: isLargeScreen ? '44px' : '14px',
                  lineHeight: isLargeScreen ? '85px' : '30px',
                  color: blue,
                  fontWeight: '800',
                  textAlign: 'center'
                }}
              >
                Please Type The Detail Below
              </Typography>
              </div>
              <div
                style={{ marginTop: '5px', display: 'flex', alignItems: 'center', justifyContent: isLargeScreen ? 'center' : 'flex-start' }}
              >
                <Arrow width={isLargeScreen || isSmallLaptop ? '193px' : '112px'} height={isLargeScreen || isSmallLaptop ? '37px' : '23px'} />
            </div>
              <Stack spacing={3}>
                <textarea   id="message" name="message" rows={isLargeScreen ? "10" : "10"} cols={isLargeScreen ? "50" : '25'} placeholder='Type something....' style={{
                    backgroundColor: grey,
                    outline: 'none',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '20px',
                    fontFamily: 'Monteserrat',
                    fontSize: '20px',
                    resize: 'none'
                }}></textarea>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <ContinueBtn onClick={handleNext} />
               </div> 
              </Stack>
              </Stack>
         </Container>
         </Container>
      )}
    </Container>
  );
};


export default Question6;
