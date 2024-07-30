import DateTime from './DateTime';

export default {
  title: 'Switchless/DateTime',
  component: DateTime,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ds: {
      description: 'The date-time string in ISO format',
      control: 'text',
      defaultValue: new Date().toISOString(),
    },
  },
};

export const Current = {
  args: {
    ds: new Date().toISOString(),
  },
};

export const SpecificDateTime = {
  args: {
    ds: '2023-12-25T15:30:45.123Z',
  },
};

export const MidnightDateTime = {
  args: {
    ds: '2023-06-01T00:00:00.000Z',
  },
};

export const InvalidDateTime = {
  args: {
    ds: 'Invalid DateTime',
  },
};