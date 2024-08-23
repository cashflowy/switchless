import Link from './Link';

export default {
  title: 'Primitives/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    href: {
      description: 'The URL that the hyperlink points to',
      control: 'text',
    },
    children: {
      description: 'The content to be displayed as the link text',
      control: 'text',
    },
    target: {
      description: 'Specifies where to open the linked document',
      control: 'select',
      options: ['_self', '_blank', '_parent', '_top'],
    },
  },
};

export const TargetSame = {
  args: {
    href: 'https://www.google.com',
    children: 'Link',
  },
};

export const TargetBlank = {
  args: {
    href: 'https://www.google.com',
    children: 'Link',
    target: '_blank',
  },
};

export const InternalLink = {
  args: {
    href: '/dashboard',
    children: 'Dashboard',
  },
};

export const CustomText = {
  args: {
    href: 'https://www.example.com',
    children: 'Click here for more information',
  },
};