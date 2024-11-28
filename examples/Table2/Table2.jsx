import React from 'react'
import { Sheet,Table as MuiTable, Box} from '@mui/joy'

export default function Table2({variant,children, sx={}}) {
	const tableSX = {
		...sx,
		'& tbody': { bgcolor: 'white' },
		'& tr > th, & tr > td': {
    height: 'auto',
},
}
  return ( 
	<Box sx={{ pt: 2 }}>
	<Box sx={{ overflowY: "auto", border: '1px solid #e0e0e0', borderRadius: 'sm', maxHeight: "calc(100vh - 160px)" }}>
    <Sheet variant={variant} sx={{ borderRadius: 'sm', overflow: 'auto', tableLayout:'auto'}}>
        	<MuiTable
    	// 	borderAxis={borderAxis||'bothBetween'}
    	// 	hoverRow={hoverRow}
    		sx={tableSX}
    		stickyHeader="true"
    	>
    		{children}
    	</MuiTable>


    </Sheet>
	</Box>
	</Box>
  )
}