import React from 'react';
import CustomStepper from "./CustomStepper";

const steps = [
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
    }
  }
};

// Default story with minimal configuration
export const Default = {
  args: {
    steps: steps,
    // activeStep: 1
  }
};

// Story showing all completed steps
export const AllCompleted = {
  args: {
    steps: steps.map(step => ({ ...step, status: 'completed' })),
    activeStep: steps.length - 1
  }
};

// Story showing first step active
export const FirstStepActive = {
  args: {
    steps: steps,
    // activeStep: 0
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
    // activeStep: 1
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
    // activeStep: 5
  }
};