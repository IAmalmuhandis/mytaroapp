import { Container, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { blue, grey } from '../utils/colors';
import { ReactComponent as Arrow } from '../assets/svg/Arrow.svg';
import { ReactComponent as Illustration } from '../assets/svg/Add color-rafiki 1.svg';
import BlueBtn from '../component/blueBtn';
import { NigeriaNaira } from '../utils/helpers';
import ContinueBtn from '../component/continueBtn';

const Question4 = ({ onNext }) => {
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
            Do you have any specific themes or color schemes in mind for the event?
          </Typography>
          <div
            style={{ marginTop: '5px', display: 'flex', alignItems: 'center', justifyContent: isLargeScreen ? 'center' : 'center' }}
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
                Please Type The Color Name
              </Typography>
              </div>
              <Stack spacing={3}>
                <TextField
                    value={inputValue}
                    onChange={handleInputChange}
                    sx={{
                      backgroundColor: grey, 
                      borderRadius: isLargeScreen ? '53px' : '30px',
                      height: isLargeScreen ? '98px' : '57px', 
                      width: isLargeScreen ? '369px' : '213px',
                      '& .MuiOutlinedInput-root': {
                      height: isLargeScreen ? '98px' : '57px', 
                      width: isLargeScreen ? '369px' : '213px',
                      fontSize: isLargeScreen ? '25px' : '15px',
                      lineHeight: isLargeScreen ? '31px' : '18px',
                      '& fieldset': {
                        border: 'none', 
                        color: blue,
                      },
                    },}}
                    placeholder='Royal Blue'
                />
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


export default Question4;
