import { fn } from '@storybook/test';
import Table from './Table';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Exported via npm/Styled/Page/Table',
  component: Table,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  
};



import * as React from 'react';
// import Table from '@mui/joy/Table';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



export const TopHeader = {
  args: {
    type:'topHeader',
    children:(<>
      <thead>
        <tr>
          <th style={{ width: '40%' }}>Column width (40%)</th>
          <th>Calories</th>
          <th>Fat&nbsp;(g)</th>
          <th>Carbs&nbsp;(g)</th>
          <th>Protein&nbsp;(g)</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.calories}</td>
            <td>{row.fat}</td>
            <td>{row.carbs}</td>
            <td>{row.protein}</td>
          </tr>
        ))}
      </tbody>
    </>)
  },
};

export const SideHeader = {
  args: {
    type:'sideHeader',
    children:(<>
      <tbody>
          <tr >
            <td>Name</td>
            <td>Alex J V</td>
          </tr>
          <tr >
            <td>Age</td>
            <td>35</td>
          </tr>
          <tr >
            <td>Vehicle</td>
            <td>Duster</td>
          </tr>
      </tbody>
    </>)
  },
};
