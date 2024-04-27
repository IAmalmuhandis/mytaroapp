import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Container, Button } from '@mui/material';
import { TextField, Typography, Stack } from '@mui/material';

// Import other question components as needed

const Question1 = ({ onNext }) => {
    const [answer, setAnswer] = useState('');
  
    const handleNext = () => {
      // Here you can add validation logic for the answer if needed
      // For simplicity, we just move to the next step
      onNext();
    };
  
    return (
      <Stack spacing={2}>
        <Typography variant="h6">Question 1:</Typography>
        <TextField
          label="Enter your name"
          variant="outlined"
          fullWidth
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <Button variant="contained" onClick={handleNext}>Next</Button>
      </Stack>
    );
  };

  const Question2 = ({ onNext, onBack }) => {
    const [answer, setAnswer] = useState('');
  
    const handleNext = () => {
      // Here you can add validation logic for the answer if needed
      // For simplicity, we just move to the next step
      onNext();
    };
  
    const handleBack = () => {
      onBack();
    };
  
    return (
      <Stack spacing={2}>
        <Typography variant="h6">Question 2:</Typography>
        <TextField
          label="Enter your email"
          variant="outlined"
          fullWidth
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={handleBack}>Back</Button>
          <Button variant="contained" onClick={handleNext}>Next</Button>
        </Stack>
      </Stack>
    );
  };


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
        return <Question1 onNext={handleNext} />;
      case 1:
        return <Question2 onNext={handleNext} onBack={handleBack} />;
      // Add cases for other questions
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container>
      <Stepper activeStep={activeStep} alternativeLabel>
        <Step>
          <StepLabel> </StepLabel>
        </Step>
        <Step>
          <StepLabel>Question 2</StepLabel>
        </Step>
        <Step>
          <StepLabel>Question 2</StepLabel>
        </Step>
        <Step>
          <StepLabel>Question 2</StepLabel>
        </Step>
        <Step>
          <StepLabel>Question 2</StepLabel>
        </Step>
        <Step>
          <StepLabel>Question 2</StepLabel>
        </Step>
        {/* Add more steps as needed */}
      </Stepper>
      <div>
        {getStepContent(activeStep)}
        {/* Show appropriate question component based on activeStep */}
        <div>
          {activeStep !== 0 && (
            <Button onClick={handleBack}>Back</Button>
          )}
          {activeStep !== 2 && (
            <Button onClick={handleNext}>Next</Button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default StepperPage;