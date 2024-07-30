import React from 'react';
// MUI Link
import { Link as MuiLink } from '@mui/material';
// or use default export
// import MuiLink from '@mui/material/Link';

// Next link
import NextLink from 'next/link';
import PropTypes from 'prop-types';

/**
 * We need the features of Next/link to spead up the ui and we need the presentation style of @mui/joy/link. 
 * This custom component combines both into one single component such that there is only one a tag in the html.
 */
export default function Link({children,href,target}){
	return (
		<MuiLink component={NextLink} href={href} target={target} underline="hover">
			 {children}
		</MuiLink>
	)
}
