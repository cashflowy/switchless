'use client';
import React from 'react';
import { FormControl, FormLabel, Grid } from '@mui/joy';
export default function FormField({ width = 'full', label, children, show = true }) {
  let sx = {
    active: { bgcolor: 'primary.50', borderColor: 'primary.300' },
    passive: { bgcolor: 'white' }
  }
  let col_width = 12;
  if (width == 'half')
    col_width = 6;
  else if (width == 'third')
    col_width = 4;
  if (show)
    return (
      <Grid xs={col_width} sx={{ pt: 0.5 }}>
        <FormControl>
          <FormLabel sx={{ mb: 0.25 }}>{label}</FormLabel>
          {children}
        </FormControl>
      </Grid>
    )
  return <></>
}