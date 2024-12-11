'use client'
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Chip } from '@mui/joy';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { useTheme } from '@mui/joy/styles';

/** 
 * Our implementation of tabs. This is the tab format that we will be using across the app.
 */
export default function CustomTab({tabs=[], variant='plain', tabName='tab'}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get(tabName) || 0);
  const theme = useTheme();

  useEffect(() => {
    const tabParam = searchParams.get(tabName);
    if (tabParam) {
      const index = tabs.findIndex(tab => tab.slug === tabParam);
      setActiveTab(index !== -1 ? index : 0);
    }
  }, [searchParams, tabs, tabName]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    const newTab = tabs[newValue].slug;
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(tabName, newTab);
    window.history.pushState(null, '', `?${newSearchParams.toString()}`);
  };

  return (
    <Tabs 
      aria-label="Basic tabs" 
      value={activeTab} 
      onChange={handleTabChange}
      sx={{
        width: '100%',
        overflowX: 'auto',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      <TabList
        variant="plain"
        sx={{
          bgcolor: 'white',
          flexWrap: 'nowrap',
          minWidth: 'fit-content',
          overflowX: 'auto',
          [`& .${tabClasses.root}`]: {
            '&[aria-selected="true"]': {
              bgcolor: 'background.surface',
              borderColor: 'divider',
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                height: 2,
                bottom: -2,
                left: 0,
                right: 0,
                bgcolor: 'background.surface',
              },
            },
            [theme.breakpoints.down('sm')]: {
              fontSize: '0.875rem',
              padding: '6px 12px',
            },
          },
        }}
      >
        {tabs.map((tab, index) => (
          <Tab indicatorPlacement="top" key={tab.slug}>
            {tab.name} {tab.stats && <Chip size='sm' variant='outlined'>{tab?.stats}</Chip>}
          </Tab>
        ))}
      </TabList>
      {tabs.map((tab, index) => (
        <TabPanel value={index} variant={variant} sx={{bgcolor: 'white', paddingX: 0}} key={tab.slug}>
          {tab.body}
        </TabPanel>
      ))}
    </Tabs>
  )
}
