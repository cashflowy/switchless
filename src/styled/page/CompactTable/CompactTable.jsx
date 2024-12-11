import React from 'react';
import Sheet from '@mui/joy/Sheet';
import {Table as MuiTable} from '@mui/joy';


export default function CompactTable({type='topHeader',borderAxis,sx={}, children, hoverRow=false, variant='outlined', stickyHeader=false}){
	var tableSX={
		...sx,
		'& tbody': { bgcolor: 'white' },
		'& tr > th, & tr > td': {
    height: 'auto',
  },
	}
	if(type=='sideHeader'){
		tableSX['& tr > *:first-of-type'] = {
			fontSize:18,
			bgcolor: 'background.surface',
		};
	}
	return(
  	<Sheet
    	variant={variant}
    	sx={{
    		borderRadius: 'sm',
    		overflow: 'auto',
    		// bgcolor:'white',
    	}}
  	>
    	<MuiTable
    		borderAxis={borderAxis||'bothBetween'}
    		hoverRow={hoverRow}
    		sx={tableSX}
    		stickyHeader={stickyHeader}
    	>
    		{children}
    	</MuiTable>
  	</Sheet>
	)
}

