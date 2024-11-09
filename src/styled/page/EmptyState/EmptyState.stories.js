import React from 'react';
import EmptyState from "./EmptyState";

export default {
  title: 'Exported via npm/Styled/Page/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
    // backgrounds: {
    //   default: 'light'
    // }
  },
  argTypes: {
    description: { 
      control: 'text',
      description: 'Text displayed below the icon'
    },
    buttonText: {
      control: 'text',
      description: 'Text displayed on the action button'
    },
    onButtonClick: {
      action: 'clicked',
      description: 'Function called when button is clicked'
    }
  }
};

// Default story with minimal configuration
export const Default = {
  args: {
    description: "You haven't added any Jobs",
    buttonText: "Add Job"
  }
};

// Without button
// export const NoButton = {
//   args: {
//     description: "No results found",
//     buttonText: ""
//   }
// };

// Custom content
export const CustomContent = {
  args: {
    description: "Your cart is empty",
    buttonText: "Start Shopping"
  }
};

// With long description
export const LongDescription = {
  args: {
    description: "We couldn't find any matches for your search criteria. Try adjusting your filters or search terms.",
    buttonText: "Clear Filters"
  }
};

// Search context
export const SearchResults = {
  args: {
    description: "No matching results found",
    buttonText: "Reset Search"
  }
};

// Upload context
export const FileUpload = {
  args: {
    description: "Drop files here or click to upload",
    buttonText: "Browse Files"
  }
};