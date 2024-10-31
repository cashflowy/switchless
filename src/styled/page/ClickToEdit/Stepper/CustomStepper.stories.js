import React from 'react';
import CustomStepper from "./CustomStepper";

const stepData = [
  { title: 'Order Placed', status: 'completed' },
  { title: 'Processing', status: 'pending' },
  { title: 'Shipped', status: 'pending' },
  { title: 'Delivered', status: 'pending' }
];

export default {
  title: 'Exported via npm/Styled/Page/CustomStepper',
  component: CustomStepper,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light'
    }
  },
  argTypes: {
    steps: { 
      control: { type: 'object' },
      description: 'Array of step objects with title and status'
    },
    activeStep: { 
      control: { type: 'number', min: 0, max: 3 },
      description: 'Index of the currently active step'
    }
  }
};

// Default story with minimal configuration
export const Default = {
  args: {
    steps: stepData,
    activeStep: 1
  }
};

// Story showing all completed steps
export const AllCompleted = {
  args: {
    steps: stepData.map(step => ({ ...step, status: 'completed' })),
    activeStep: stepData.length - 1
  }
};

// Story showing first step active
export const FirstStepActive = {
  args: {
    steps: stepData,
    activeStep: 0
  }
};

// Story with custom step titles
export const CustomTitles = {
  args: {
    steps: [
      { title: 'Started', status: 'completed' },
      { title: 'In Progress', status: 'pending' },
      { title: 'Almost There', status: 'pending' },
      { title: 'Finished', status: 'pending' }
    ],
    activeStep: 1
  }
};

// Story with more steps
export const MoreSteps = {
  args: {
    steps: [
      { title: 'Initial', status: 'completed' },
      { title: 'Preparation', status: 'completed' },
      { title: 'Review', status: 'pending' },
      { title: 'Approval', status: 'pending' },
      { title: 'Finalization', status: 'pending' }
    ],
    activeStep: 2
  }
};