import React from 'react';
import Sheet from '@mui/joy/Sheet';
import Table from '@mui/joy/Table';
import PropTypes from 'prop-types';

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];

// position: 'sticky',
// left: 0,
// boxShadow: '1px 0 var(--TableCell-borderColor)',
// bgcolor: 'background.surface',
// fontSize:18,


/** 
 * Custom defined table. 
 * - is scrollable 
 * - is plain and simple
 */
export default function CustomTable({type='topHeader',borderAxis,sx={}, children}){
	var tableSX={
		...sx,
		'& tbody': { bgcolor: 'white' },
		
	}
	if(type=='sideHeader'){
		tableSX['& tr > *:first-child']= {
			fontSize:18,
			bgcolor: 'background.surface',
		};
	}
	return(
  	<Sheet
    	variant="outlined"
    	sx={{
    		borderRadius: 'sm',
    		overflow: 'auto',
    		// bgcolor:'white',
    	}}
  	>
    	<Table
    		borderAxis={borderAxis||'bothBetween'}
    		hoverRow
    		sx={tableSX}
    	>
    		{children}
    	</Table>
  	</Sheet>
	)
}




CustomTable.propTypes = {
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

CustomTable.defaultProps = {
	type:'topHeader'
};


import { VERSION } from './version';
CustomTable.version = VERSION;