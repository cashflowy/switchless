'use client'
import React from 'react';
import { Box, Typography, Button } from '@mui/joy';
import HandymanRoundedIcon from '@mui/icons-material/HandymanRounded';

export default function EmptyState({ 
  description = "You haven't added any Jobs",
  buttonText = "Add Job",
  onButtonClick = () => {}
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        gap: 2,
        backgroundColor: 'background.level1',
        borderRadius: 'sm',
        minHeight: 200
      }}
    >
      <HandymanRoundedIcon sx={{fontSize: '3rem',color: 'neutral.500', mb: 1 }} />
      <Typography level="body-md" color="neutral">{description}</Typography>
      <Button variant="soft" color="primary" startDecorator={<span>+</span>} onClick={onButtonClick}>
        {buttonText}
      </Button>
    </Box>
  );
}