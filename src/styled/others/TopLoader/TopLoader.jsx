import React from 'react';
import { AppProgressBar  } from 'next-nprogress-bar';

export default function TopLoader() {
  return <AppProgressBar 
      color="#0d99fd"
      height="4px"
      options={{ showSpinner: false }}
  />
}