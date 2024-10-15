'use client'
import React from 'react'
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';

import { usePathname } from 'next/navigation';

function TabNavigation( {tabHeaders=[],vertical = false} ) {
  
  const pathname = usePathname();

  const formatTabHeaderForUrl=(header)=>header.toLowerCase().replace(/\s+/g, '-');

  const handleTabChange = (event, newTab) => {
  const newTabValue = formatTabHeaderForUrl(tabHeaders[newTab].header);

  const headers = tabHeaders.map(tab=>formatTabHeaderForUrl(tab.header));
  const pathParts = pathname.split('/');

  const existingTabIndex = pathParts.findIndex(part=>headers.includes(part));


  if(existingTabIndex !== -1){
    pathParts[existingTabIndex] = newTabValue;
  }else{
    pathParts.push(newTabValue);
  }
  const newPath = pathParts.join('/').replace(/\/+/g, '/');
  window.history.pushState(null, '', newPath);

  }


  return (
    <Box sx={boxStyle}>
      <Tabs sx={tabStyle} onChange={handleTabChange} defaultValue={0}
       orientation={vertical ? 'vertical' : 'horizontal'}>
        <TabList>
          {Array.isArray(tabHeaders) && tabHeaders.map((tab,index)=>(
            <Tab  key={index}>
              <Box sx={tabContentStyle}>
                {tab.header}
                {tab.count !== undefined && tab.count > 0 && (
                  <Chip variant="outlined" size="sm">
                    {tab.count}
                  </Chip>    
                )}
              </Box>
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Box>          
  )
}

const boxStyle = {
  display: 'flex',
  overflowX: 'auto',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  WebkitScrollbar: { display: 'none' }
}
const tabStyle = {
  display: 'inline-block',
  backgroundColor: 'white',
  whiteSpace: 'nowrap',
  '& .MuiTab-root': {
      backgroundColor: 'transparent',
      '&.Mui-selected': {
          backgroundColor: 'transparent',
      },
      '&:hover': {
          backgroundColor: 'transparent',  // Remove hover background
      },
  },
}
const tabContentStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: 0.5, 
    color: 'black'
  }

export default TabNavigation