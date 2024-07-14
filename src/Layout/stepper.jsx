import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Container, ThemeProvider, createTheme } from '@mui/material';
import {Stack } from '@mui/material';
import Back_Avater from '../component/topNavigation/Back_Avater';
import {red} from '@mui/material/colors';
import Question1 from '../pages/Ai_Questions/Question1';
import Question2 from '../pages/Ai_Questions/Question2';
import { useNavigate } from 'react-router-dom';
import Question3 from '../pages/Ai_Questions/Question3';
import Question4 from '../pages/Ai_Questions/Question4';
import Question5 from '../pages/Ai_Questions/Question5';
import Question6 from '../pages/Ai_Questions/Question6';
import { Helmet } from 'react-helmet';

const theme = createTheme({
    palette: {
      primary: red, 
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
      <Helmet>
        <title>Answer the Questions</title>
      </Helmet>
      <Back_Avater onClick={handleBack} />
      <div className='flex justify-center mt-7'>
      <Container>
        <ThemeProvider theme={theme}>
        <Stepper activeStep={activeStep} alternativeLabel>
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
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
        </ThemeProvider>
        <Container maxWidth="none" className='min-h-[60vh] flex flex-col'>
          {getStepContent(activeStep)}
        </Container>
      </Container>
      </div>
      </>
    );
  };

const S = () => { 
  return (
    <Container maxWidth="none" className='min-h-[80vh] flex flex-col justify-between overflow-hidden'>
        <Stack mt={3} spacing={4}>
             <StepperPage />
        </Stack>    
    </Container>
  )
}

export default S