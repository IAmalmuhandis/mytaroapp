import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Container, Button, ThemeProvider, createTheme } from '@mui/material';
import { TextField, Typography, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Back_Avater from '../component/Back_Avater';
import { green, purple, red} from '@mui/material/colors';
import Question1 from '../pages/Question1';
import Question2 from '../pages/Question2';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
    palette: {
      primary: red, // Customize primary color
    },
  });

const StepperPage = () => {
  
    const [activeStep, setActiveStep] = useState(0); // Tracks the current step of the stepper
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1); // Move to the next step
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1); // Move to the previous step
    };
  
    const getStepContent = (step) => {
      switch (step) {
        case 0:
          return <Question1 onNext={handleNext}/>;
        case 1:
          return <Question2 onNext={handleNext} />;
        // Add cases for other questions
        default:
          return 'Unknown step';
      }
    };
  
    return (
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
          {/* Show appropriate question component based on activeStep */}
          {/* <div>
            {activeStep !== 0 && (
              <Button onClick={handleBack}>Back</Button>
            )}
            {activeStep !== 2 && (
              <Button onClick={handleNext}>Next</Button>
            )}
          </div> */}
        </Container>
      </Container>
    );
  };

const S = () => {
    const navigate = useNavigate()
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
    const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
    const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen
    const isSmallLaptop = window.innerWidth >= 900 && window.innerWidth <= 1024  
  return (
    <Container maxWidth="none" sx={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
        <Stack mt={4} spacing={4}>
            <Back_Avater onClick={() => navigate('/AiAssistant')} />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
                <StepperPage />
            </div>
        </Stack>    
    </Container>
  )
}

export default S