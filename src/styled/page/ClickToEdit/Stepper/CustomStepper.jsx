import React from 'react';
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepIndicator from '@mui/joy/StepIndicator';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Check from '@mui/icons-material/Check';
import { Typography } from '@mui/joy';

export default function CustomStepper({
  steps,
  activeStep = 0
}) {
  const renderStepIndicator = (index,status = 'pending') => {
    if (status === 'completed') {
      return (
        <StepIndicator 
          variant="solid" 
          color="primary"
          // sx={{ width: 24, height: 24 }}
        >
          <Check />
        </StepIndicator>
      );
    }

    return (
      <StepIndicator 
        variant="outlined" 
        color="neutral"
        // sx={{ width: 24, height: 24 }}
      >
        {index+1}
      </StepIndicator>
    );
  };

  return (
    <Stepper 
      orientation="horizontal"
      sx={{ 
        width: '100%',
        // '--Stepper-connectorWidth': '2px',
        // '--Stepper-gap': '8px'
      }}
    >
      {steps.map((step, index) => (
        <Step
          key={step.title}
          indicator={renderStepIndicator(index,step.status)}
          active={index === activeStep}
        >
          <Typography level="body-sm" sx={{ fontSize: '0.75rem' }}>
            {step.title}
          </Typography>
        </Step>
      ))}
    </Stepper>
  );
}
