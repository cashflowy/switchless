import React from 'react';
import OrgCard2 from './OrgCard2';
import OrgCard2Docs from './OrgCard2.mdx'

export default {
  title: 'Example Patterns/OrgCard2',
  component: OrgCard2,
  parameters: {
    layout: 'centered',
  },
  
};
const sampleOrgData = [
    {
      org: {
        id: "1",
        name: "Tech Innovators",
        created_at: "2024-01-15T08:00:00.000Z",
        quotes: [
          { part: "Component A", quantity: 150, price: 500 },
          { part: "Component B", quantity: 300, price: 1200 },
        ],
      },
    },
    {
      org: {
        id: "2",
        name: "Green Solutions",
        created_at: "2023-11-02T14:30:00.000Z",
        quotes: [
          { part: "Solar Panel", quantity: 50, price: 2500 },
          { part: "Wind Turbine", quantity: 20, price: 30000 },
        ],
      },
    },
    {
      org: {
        id: "3",
        name: "HealthFirst",
        created_at: "2022-06-20T10:15:00.000Z",
        quotes: [
          { part: "Medical Kit", quantity: 100, price: 150 },
          { part: "First Aid Supplies", quantity: 200, price: 75 },
        ],
      },
    },
    {
      org: {
        id: "4",
        name: "EduTech",
        created_at: "2023-04-10T09:45:00.000Z",
        quotes: [
          { part: "E-learning Platform", quantity: 5, price: 5000 },
          { part: "Classroom Kit", quantity: 15, price: 800 },
        ],
      },
    },
  ];

export const Default = {
  args: {
    orgData:sampleOrgData
  },
};
