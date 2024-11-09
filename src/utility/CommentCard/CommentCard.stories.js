import React from 'react';
import CommentCard from './CommentCard';

export default {
  title: 'Exported via npm/Utility/CommentCard',
  component: CommentCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    comments: {
      description: 'Array of comment objects',
      control: 'object',
    },
    submit: {
      description: 'Function called when submitting a new comment',
      action: 'submitted',
    },
  },
};

// Sample comments data
const sampleComments = [
  {
    username: 'John Doe',
    content: 'This is a great feature!',
    createdAt: new Date('2024-02-01').toISOString(),
  },
  {
    username: 'Jane Smith',
    content: 'Really helpful, thanks for sharing.',
    createdAt: new Date('2024-02-02').toISOString(),
  },
];

const longComment = {
  username: 'Long Commenter',
  content: 'This is a very long comment that should wrap properly. '.repeat(10),
  createdAt: new Date('2024-02-03').toISOString(),
};

// Basic story with no comments
export const Empty = {
  args: {
    comments: [],
    submit: () => new Promise((resolve) => setTimeout(resolve, 1000)),
  },
};

// Story with sample comments
export const WithComments = {
  args: {
    comments: sampleComments,
    submit: () => new Promise((resolve) => setTimeout(resolve, 1000)),
  },
};

// Story with many comments
export const ManyComments = {
  args: {
    comments: Array(5).fill(null).map((_, index) => ({
      username: `User ${index + 1}`,
      content: `Comment ${index + 1}`,
      createdAt: new Date(Date.now() - index * 86400000).toISOString(), // Different dates
    })),
    submit: () => new Promise((resolve) => setTimeout(resolve, 1000)),
  },
};

// Story with a long comment
export const WithLongComment = {
  args: {
    comments: [...sampleComments, longComment],
    submit: () => new Promise((resolve) => setTimeout(resolve, 1000)),
  },
};

// Story demonstrating loading state
export const LoadingState = {
  args: {
    comments: sampleComments,
    submit: () => new Promise((resolve) => setTimeout(resolve, 5000)), // Long delay to show loading state
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the loading state when submitting a new comment. The submission is artificially delayed by 5 seconds.',
      },
    },
  },
};

// Story with error handling
export const WithError = {
  args: {
    comments: sampleComments,
    submit: () => new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Failed to submit comment')), 1000)
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates error handling when comment submission fails.',
      },
    },
  },
};

// Interactive story with all features
// export const Interactive = {
//   args: {
//     comments: [
//       {
//         username: 'Interactive User',
//         content: 'Try adding a new comment below!',
//         createdAt: new Date().toISOString(),
//       },
//       ...sampleComments
//     ],
//     submit: async () => {
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       return true;
//     },
//   },
//   parameters: {
//     docs: {
//       description: {
//         story: 'Fully interactive version with working submission.',
//       },
//     },
//   },
// };

// Example usage template
// export const Template = {
//   render: (args) => (
//     <div style={{ maxWidth: '600px', margin: '0 auto' }}>
//       <CommentCard {...args} />
//     </div>
//   ),
// };

// // Story with custom styling
// export const CustomStyling = {
//   ...Template,
//   args: {
//     comments: sampleComments,
//     submit: () => new Promise((resolve) => setTimeout(resolve, 1000)),
//   },
//   parameters: {
//     docs: {
//       description: {
//         story: 'CommentCard with custom styling applied.',
//       },
//     },
//   },
// };