import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Container, ThemeProvider, createTheme } from '@mui/material';
import {Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Back_Avater from '../component/Back_Avater';
import {red} from '@mui/material/colors';
import Question1 from '../pages/Question1';
import Question2 from '../pages/Question2';
import { useNavigate } from 'react-router-dom';
import Question3 from '../pages/Question3';
import Question4 from '../pages/Question4';
import Question5 from '../pages/Question5';
import Question6 from '../pages/Question6';

const theme = createTheme({
    palette: {
      primary: red, // Customize primary color
    },
  });

const StepperPage = () => {

    const navigate = useNavigate()
  
    const [activeStep, setActiveStep] = useState(0); // Tracks the current step of the stepper
  
    const handleNext = () => {
      activeStep === 5 ? navigate('/AiAssistant/Confirm') :  setActiveStep((prevActiveStep) => prevActiveStep + 1) // Move to the next step
    };
  
    const handleBack = () => {
      activeStep === 0 ? navigate('/AiAssistant') : setActiveStep((prevActiveStep) => prevActiveStep - 1); // Move to the previous step
    };
  
    const getStepContent = (step) => {
      switch (step) {
        case 0:
          return <Question1 onNext={handleNext}/>;
        case 1:
          return <Question2 onNext={handleNext} />;
        case 2:
          return <Question3 onNext={handleNext} />
        case 3:
          return <Question4 onNext={handleNext} />
        case 4:
          return <Question5 onNext={handleNext} />
        case 5: 
          return <Question6 onNext={handleNext} />
        default:
          return 'Unknown step';
      }
    };
  
    return (
      <>
      <Back_Avater onClick={handleBack} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
      <Container>
        <ThemeProvider theme={theme}>
        <Stepper activeStep={activeStep} alternativeLabel>
          <Step>
            <StepLabel> </StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          {/* Add more steps as needed */}
        </Stepper>
        </ThemeProvider>
        <Container maxWidth="none" sx={{minHeight: '60vh', display: 'flex', flexDirection: 'column' }}>
          {getStepContent(activeStep)}
        </Container>
      </Container>
      </div>
      </>
    );
  };

const S = () => {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
    const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
    const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen
    const isSmallLaptop = window.innerWidth >= 900 && window.innerWidth <= 1024  
  return (
    <Container maxWidth="none" sx={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
        <Stack mt={3} spacing={4}>
             <StepperPage />
        </Stack>    
    </Container>
  )
}

export default S