import React from 'react';
import Login from "./Login";
import { Box } from '@mui/joy';



export default{
    title: 'Exported via npm/Styled/Page/Login',
    component: Login,
    parameters: {
      layout: 'centered',
    },
    decorators: [
      (Story) => (
        <Box sx={{ width: 420, height: 400 }}>
          <Story />
        </Box>
      )
    ],
    argTypes: {
      emailRight: { control: 'boolean' },
      passwordRight: {control : 'boolean' }
    }
}

export const Default = {

}

export const Error = {
  emailRight: true,
  passwordRight: false
}