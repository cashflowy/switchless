
import React from 'react';
import Table2 from './Table2';

// Define default export for Storybook
export default {
  title: 'Example Patterns/Table2',
  component: Table2,
  parameters: {
    layout: 'centered',
  },
};

const exampleChildren =   <>  
    <thead>
        <tr>
        <th style={{ width: '15%' }}>PO Request no</th>
        <th>Request Date</th>
        <th>Status</th>
        <th>Approver</th>
        <th>Budget</th>
        <th>Vendor</th>
        <th style={{ width: '5%' }}>Level</th>
        <th style={{ textAlign: 'right' }}>Total Value</th>
        <th>Submitted By</th>
        <th>Comments</th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td>PO-00123</td>
        <td>2024-11-01</td>
        <td>Approved</td>
        <td>John Doe</td>
        <td>$10,000</td>
        <td>ABC Supplies</td>
        <td>1</td>
        <td style={{ textAlign: 'right' }}>$9,500</td>
        <td>Jane Smith</td>
        <td>Urgent delivery requested</td>
    </tr>
    <tr>
        <td>PO-00124</td>
        <td>2024-11-02</td>
        <td>Pending</td>
        <td>Emily Brown</td>
        <td>$5,000</td>
        <td>XYZ Electronics</td>
        <td>2</td>
        <td style={{ textAlign: 'right' }}>$4,800</td>
        <td>Mike Johnson</td>
        <td>Approval needed by end of week</td>
    </tr>
    <tr>
        <td>PO-00125</td>
        <td>2024-11-03</td>
        <td>Rejected</td>
        <td>Sarah Lee</td>
        <td>$12,000</td>
        <td>Office Depot</td>
        <td>1</td>
        <td style={{ textAlign: 'right' }}>$11,200</td>
        <td>Robert White</td>
        <td>Exceeded budget limit</td>
    </tr>
    <tr>
        <td>PO-00126</td>
        <td>2024-11-04</td>
        <td>Approved</td>
        <td>Michael Green</td>
        <td>$8,500</td>
        <td>Furniture Co.</td>
        <td>3</td>
        <td style={{ textAlign: 'right' }}>$8,300</td>
        <td>Linda Blue</td>
        <td>Special discount applied</td>
        </tr>
        <tr>
        <td>PO-00127</td>
        <td>2024-11-05</td>
        <td>In Progress</td>
        <td>Alice Black</td>
        <td>$7,000</td>
        <td>Construction Ltd.</td>
        <td>1</td>
        <td style={{ textAlign: 'right' }}>$6,700</td>
        <td>Chris Yellow</td>
        <td>Pending vendor confirmation</td>
        </tr>
    </tbody>
</> 

export const Default = {
    args: {
        variant:'soft',
        children:exampleChildren
   
    },
  };