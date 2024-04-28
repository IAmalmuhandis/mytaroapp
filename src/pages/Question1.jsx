import { Container, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { blue, grey } from '../utils/colors';
import { ReactComponent as Arrow } from '../assets/svg/Arrow.svg';
import { ReactComponent as Illustration } from '../assets/svg/Banknote-pana 1.svg';
import BlueBtn from '../component/blueBtn';
import { NigeriaNaira } from '../utils/helpers';
import ContinueBtn from '../component/continueBtn';

const Question1 = ({ onNext }) => {
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
              fontSize: isLargeScreen ? '44px' : '18px',
              lineHeight: isLargeScreen ? '85px' : '20px',
              color: blue,
              fontWeight: '800',
              textAlign: isLargeScreen ? 'center' : 'left',
            }}
            mt={3}
            ml={-7}
          >
            Please Answer the Questions!
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Montserrat',
              fontSize: isLargeScreen ? '32px' : '15px',
              lineHeight: isLargeScreen ? '40px' : '20px',
              color: blue,
              fontWeight: '700',
              letterSpacing: '1%',
              textAlign: isLargeScreen ? 'center' : 'left',
            }}
            mt={2}
            ml={-7}
          >
            Do you have a budget?
          </Typography>
          <div
            style={
              isLargeScreen
                ? { marginTop: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }
                : { marginTop: '5px' }
            }
          >
            <Arrow width={isLargeScreen || isSmallLaptop ? '193px' : '112px'} height={isLargeScreen || isSmallLaptop ? '37px' : '23px'} />
          </div>
          <Stack sx={{ alignItems: 'center' }} spacing={isLaptopScreen || isDesktopScreen ? 30 : 5} direction={isLaptopScreen || isDesktopScreen ? 'row' : 'column'}>
            <Illustration width={isLargeScreen || isSmallLaptop ? 509 : 335} height={isLargeScreen ? 509 : 335} />
            <Stack spacing={3}>
              <BlueBtn title="Yes" onClick={handleYesClick} />
              <BlueBtn title="No" onClick={handleNoClick} />
            </Stack>
          </Stack>
        </div>
      )}
      {answer === 'Yes' && (
         <Container maxWidth="none" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
          <Stack  mt={5} spacing={2}>
                <Typography
                sx={{
                  fontFamily: 'Montserrat',
                  fontSize: isLargeScreen ? '44px' : '18px',
                  lineHeight: isLargeScreen ? '85px' : '30px',
                  color: blue,
                  fontWeight: '800',
                  textAlign: 'center'
                }}
              >
                Please State The Amount Below
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3px'}}>
                <Arrow width={isLargeScreen ? '193px' : '112px'} height={isLargeScreen ? '37px' : '23px'}/>
              </div>
            </Stack>
         <Container maxWidth="none" sx={{minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Stack mt={-5} spacing={5}>
              <Stack spacing={4} sx={{alignItems: 'center', justifyContent: 'center'}}>
             <div style={{}}>   
            <Typography
                sx={{
                  fontFamily: 'Montserrat',
                  fontSize: isLargeScreen ? '86px' : '43px',
                  lineHeight: isLargeScreen ? '52px' : '30px',
                  color: blue,
                  fontWeight: '800',
                  textAlign: 'center',
                  textWrap: 'nowrap'
                }}
              >
                {NigeriaNaira.format(inputValue)}
              </Typography>
              </div>
              <Stack direction='row' spacing={2}>
                <Paper elevation={0} sx={{
                  backgroundColor: grey, 
                  width: isLargeScreen ? '167px' : '96px',
                  height: isLargeScreen ? '98px' : '57px',
                  borderRadius: isLargeScreen ? '53px' : '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                  }}>
                   <Typography
                      sx={{
                        fontFamily: 'Montserrat',
                        fontSize: isLargeScreen ? '25px' : '14px',
                        lineHeight: isLargeScreen ? '31px' : '18px',
                        color: '#00324D',
                        fontWeight: '400',
                        textAlign: 'center'
                  }}
                   >NGR</Typography>
                </Paper>
                <TextField
                    value={inputValue}
                    onChange={handleInputChange}
                    type='number'
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
                    placeholder='00.00'
                />
              </Stack>
              </Stack>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <ContinueBtn onClick={handleNext} />
               </div> 
            </Stack>
         </Container>
         </Container>
      )}
    </Container>
  );
};


export default Question1;
