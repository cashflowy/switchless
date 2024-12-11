import React from 'react';
import Sheet from '@mui/joy/Sheet';
import {Table as MuiTable} from '@mui/joy';
import PropTypes from 'prop-types';

/** 
 * Custom defined table. 
 * - is scrollable 
 * - is plain and simple
 */
export default function Table({type='topHeader',borderAxis,sx={}, children, hoverRow=false, variant='outlined', stickyHeader=false}){
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




Table.propTypes = {
	/**
	 * There are 2 types of table, Top header and Side header
	 */
	type:PropTypes.oneOf(['topHeader','sideHeader']),
	/**
	 * The content of the table
	 */
	children:PropTypes.node,
	borderAxis: PropTypes.oneOf(['x', 'y', 'both', 'none', 'xBetween', 'yBetween', 'bothBetween']),
	sx: PropTypes.object,
};
