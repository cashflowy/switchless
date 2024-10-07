import React from 'react';
import ClickToEdit from './ClickToEdit';
import { Card, CardContent, Typography } from '@mui/joy';

export default {
  title: 'Exported via npm/Styled/Page/ClickToEdit',
  component: ClickToEdit,
  argTypes: {
    children: { type: 'string', control: 'text' },
    onSave: { action: 'saved' }  },
  parameters: {
    layout: 'centered',
  },
};

export const Default  = {
    args: {
        children: 'Click to edit',
        onSave: () => {
           alert("saved: ")
        }
    }
};



export const WithinCard = {
  render: () => {
    const onNameSave = () => {};
    const onDescriptionSave = () => {};

    return (
      <Card sx={{ maxWidth: 500 }}>
        <CardContent>
          <Typography level="title-lg">
            <ClickToEdit onSave={onNameSave}>
              Click to edit name
            </ClickToEdit>
          </Typography>
          <Typography level="body-sm"  mb={1}>
            Created on: {new Date().toISOString().substring(0, 10)}
          </Typography>
          <Typography level="body-sm" sx={{ color: 'neutral.400' }}>
            <ClickToEdit onSave={onDescriptionSave}>
              Click to edit description
            </ClickToEdit>
          </Typography>
        </CardContent>
      </Card>
    );
  }
};



