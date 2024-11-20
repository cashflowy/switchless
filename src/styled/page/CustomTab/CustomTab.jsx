'use client'
import React from 'react';

import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';


/** 
 * Our implementation of tabs. This is the tab format that we will be using accross the app.
 */
export default function CustomTab({tabs=[],activeTab='',variant='plain'}){
	var activeTabIndex=0;
	var slugs = tabs.map((t)=>t.slug);
	// console.log(slugs);
	if(activeTab)
		activeTabIndex = slugs.indexOf(activeTab);
	// activeTab = 2;
	return (
		<Tabs aria-label="Tabs" defaultValue={activeTabIndex}>
		  <TabList
		  	variant="plain"
		  	sx={{
		  		bgcolor: 'white',
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
		  	  },
		  	}}
		  >
		  	{tabs.length && tabs.map((tab) =>(
		  		<Tab indicatorPlacement="top" key={tab.slug}>
		  			{tab.name} {tab.stats && `(${tab.stats})`}
		  		</Tab>
		  	))}
		  </TabList>
		  {tabs.length && tabs.map((tab,i) =>(
		  	<TabPanel value={i} variant={variant} sx={{bgcolor: 'white',px:variant=='plain'?0:undefined}} key={tab.slug}>
		  	  {tab.body}
		  	</TabPanel>
		  ))}
		</Tabs>
	)
}
