'use client';
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import {AccordionGroup,Accordion,AccordionSummary,AccordionDetails,Typography} from '@mui/joy';
export default function SideFilterAccordian({children}){

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <AccordionGroup transition="0.3s ease" variant="outlined" sx={{ borderRadius: "sm" }}>
      <Accordion defaultExpanded={isLargeScreen} sx={{width: 'auto'}}>
        <AccordionSummary>
          <Typography level="title-md" fontWeight="bold">Filter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {children}
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}