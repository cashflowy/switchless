import ShowJSON from './ShowJSON';
import React from 'react';

const meta = {
  title: 'Exported via npm/Styled/Page/ShowJSON',
  component: ShowJSON,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Example = {
  name: ' Example',
  args: {
    data: {
      id: "ord_123456",
      orderDate: "2024-03-20T10:30:00Z",
      customer: {
        id: "cust_789",
        name: "Jane Smith",
        email: "jane@example.com",
        verified: true
      },
      items: [
        {
          id: "item_001",
          name: "Product A",
          quantity: 2,
          price: 29.99,
          inStock: true
        },
        {
          id: "item_002",
          name: "Product B",
          quantity: 1,
          price: 49.99,
          inStock: false
        }
      ],
      totalAmount: 109.97,
      status: "processing",
      metadata: {
        source: "web",
        promocode: "SPRING2024",
        notes: null
      }
    }
  }
};


