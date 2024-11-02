import React from "react";

import MoreOptionsMenu from "./MoreOptionsMenu";
import { Box } from '@mui/joy';

export default {
  title: 'Exported via npm/Utility/MoreOptionsMenu',
  component: MoreOptionsMenu,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 4, display: 'flex', justifyContent: 'flex-end' }}>
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    onEdit: { 
      action: 'edited',
      description: 'Callback function when edit is clicked' 
    },
    onDelete: { 
      action: 'deleted',
      description: 'Callback function when delete is confirmed' 
    },
    itemName: {
      control: 'text',
      description: 'Name of the item being acted upon',
      defaultValue: 'item'
    },
  },
};

// Basic usage
export const Default = {
  args: {
    itemName: 'item',
  },
};

// With custom item name
export const CustomItemName = {
  args: {
    itemName: 'document',
  },
};

// With loading states
// export const WithLoadingStates = {
//   args: {
//     itemName: 'project',
//     onEdit: () => new Promise(resolve => setTimeout(resolve, 1000)),
//     onDelete: () => new Promise(resolve => setTimeout(resolve, 2000)),
//   },
// };

// With error handling
// export const WithErrorHandling = {
//   args: {
//     itemName: 'record',
//     onDelete: () => new Promise((_, reject) => 
//       setTimeout(() => reject(new Error('Failed to delete')), 1000)
//     ),
//   },
// };

// // Multiple menus example
// export const MultipleMenus = {
//   render: (args) => (
//     <Box sx={{ 
//       display: 'flex', 
//       gap: 2, 
//       border: '1px solid', 
//       borderColor: 'divider',
//       p: 2,
//       borderRadius: 'sm',
//     }}>
//       <Box sx={{ p: 2, bgcolor: 'background.level1' }}>
//         <MoreOptionsMenu {...args} itemName="Document 1" />
//       </Box>
//       <Box sx={{ p: 2, bgcolor: 'background.level1' }}>
//         <MoreOptionsMenu {...args} itemName="Document 2" />
//       </Box>
//       <Box sx={{ p: 2, bgcolor: 'background.level1' }}>
//         <MoreOptionsMenu {...args} itemName="Document 3" />
//       </Box>
//     </Box>
//   ),
// };

// Custom styling example
// export const CustomStyling = {
//   args: {
//     itemName: 'custom item',
//   },
//   decorators: [
//     (Story) => (
//       <Box 
//         sx={{ 
//           p: 4, 
//           bgcolor: 'background.level1',
//           borderRadius: 'md',
//           boxShadow: 'sm',
//         }}
//       >
//         <Story />
//       </Box>
//     ),
//   ],
// };

// Interactive example with all features
// export const Interactive = {
//   args: {
//     itemName: 'interactive item',
//     onEdit: async () => {
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       console.log('Edit completed');
//     },
//     onDelete: async () => {
//       await new Promise(resolve => setTimeout(resolve, 2000));
//       console.log('Delete completed');
//     },
//   },
//   parameters: {
//     docs: {
//       description: {
//         story: 'Fully interactive example with simulated async operations.',
//       },
//     },
//   },
// };

// Example showing different states in context
// export const InContext = {
//   render: () => (
//     <Box sx={{ 
//       width: 300, 
//       p: 2, 
//       bgcolor: 'background.surface',
//       borderRadius: 'md',
//       boxShadow: 'sm',
//     }}>
//       <Box sx={{ 
//         display: 'flex', 
//         justifyContent: 'space-between', 
//         alignItems: 'center',
//         mb: 2,
//       }}>
//         <div>Sample Item</div>
//         <MoreOptionsMenu 
//           itemName="sample item"
//           onEdit={() => console.log('Edit clicked')}
//           onDelete={() => console.log('Delete confirmed')}
//         />
//       </Box>
//       <Box sx={{ height: 100, bgcolor: 'background.level1', borderRadius: 'sm' }} />
//     </Box>
//   ),
//   parameters: {
//     docs: {
//       description: {
//         story: 'Shows how the menu looks and behaves in a typical card context.',
//       },
//     },
//   },
// };