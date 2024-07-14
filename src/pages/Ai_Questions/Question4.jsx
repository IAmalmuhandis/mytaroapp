import { Container, Paper, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { blue} from '../../utils/colors';
import { ReactComponent as Arrow } from '../../assets/svg/Arrow.svg';
import { ReactComponent as Illustration } from '../../assets/svg/Add color-rafiki 1.svg';
import BlueBtn from '../../component/buttons/blueBtn';
import ContinueBtn from '../../component/buttons/continueBtn';
import { HexColorPicker } from 'react-colorful';

const Question4 = ({ onNext }) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen;
  const isSmallLaptop = window.innerWidth >= 900 && window.innerWidth <= 1024;

  const [answer, setAnswer] = useState('');
  const [color, setColor] = useState('#4169e1')

  const handleNext = () => {
    localStorage.setItem('color', JSON.stringify(color))
    onNext();
  };

  const handleYesClick = () => {
    setAnswer('Yes');
  };

  const handleNoClick = () => {
    setAnswer('No');
    handleNext();
  };

  return (
    <Container maxWidth="none">
      {/* Conditionally render initial UI based on the  answer state */}
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
            Do you have any specific themes or color schemes in mind for the event?
          </Typography>
          <div className='mt-1 flex items-center justify-start lg:justify-center'>
            <Arrow width={isLargeScreen || isSmallLaptop ? '173px' : '112px'} height={isLargeScreen || isSmallLaptop ? '27px' : '23px'} />
          </div>
          <Stack className='pb-4 items-center justify-center' mt={isLargeScreen && -5} spacing={isLaptopScreen || isDesktopScreen ? 30 : 0} direction={isLaptopScreen || isDesktopScreen ? 'row' : 'column'}>
            <Stack>
              <Illustration width={isLargeScreen || isSmallLaptop ? 509 : 335} height={isLargeScreen ? 450 : 335} />
            </Stack>
            <Stack spacing={{xl: 3, lg: 3, md: 2, xs: 1, sm: 1}}>
              <BlueBtn title="Yes" onClick={handleYesClick} />
              <BlueBtn title="No" onClick={handleNoClick} />
            </Stack>
          </Stack>
        </div>
      )}
      {answer === 'Yes' && (
         <Container maxWidth="none" className='flex flex-col justify-between'>
         <Container maxWidth="none" className='min-h-[60vh] flex flex-col justify-center items-center'>
            <Stack spacing={2} className='items-center justify-center'>
             <div>   
             <Typography
                fontFamily='Montserrat'
                fontSize={{lg: 40, md: 35, xs: 15, xl: 45, sm: 30}}
                color={blue}
                fontWeight={800}
                textAlign='center'
                mt={3}
                lineHeight={{xl: 1, lg: 1, md: 2, sm: 2, xs: 2}}
              >
                Please Select The Color
              </Typography>
              </div>
              <Stack className='pb-4' spacing={3} mt={2}>
                <Stack direction={{xl: 'row', lg: 'row', md: 'row', sm: 'column', xs: 'column'}} justifyContent='center' alignItems='center' spacing={3}>
                  <div className='flex justify-center items-center'>
                    <HexColorPicker style={{width: '300px', height: '300px'}}  color={color} onChange={setColor} />
                  </div>
                  <Paper
                    sx={{backgroundColor: color, width: '300px', height: '300px'}}  
                  >
                  </Paper>
                </Stack>
                <div className='flex justify-center'>
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
