'use client'
import React from 'react';

import { Box, Typography, Breadcrumbs } from '@mui/joy';
import { Link as JoyLink } from '@mui/joy'
import NextLink from 'next/link';

import PropTypes from 'prop-types';

// Create a basic link component in switchless and import it here
const BreadcrumbLink = ({ href, children }) => {
	return (
		<JoyLink color="primary" component={NextLink} href={href}>
			{children}
		</JoyLink>
	)
}


const BreadcrumbsCustom = function ({ breadcrumbs }) {

	return (
		<Breadcrumbs separator="›" aria-label="breadcrumbs" sx={{ p: 0 }}>
			{breadcrumbs.map((b, index) => (
				<React.Fragment key={index}>
					{b.href ? (
						<BreadcrumbLink key={b.href} href={b.href}>
							{b.text}
						</BreadcrumbLink>
					) : (
						<Typography key={b.text}>{b.text}</Typography>
					)}
				</React.Fragment>
			))}
		</Breadcrumbs>
	)
}

export default function PageHeader({ header = "PageHeader", RightButtons = null, level='h3', headerLevel=null, breadcrumbs = null }) {
	if(headerLevel)
		level=headerLevel;
	const renderHeader = () => {
		if (React.isValidElement(header)) {
			return header;  // Return React component as is
		} else if (typeof header === 'string') {
			return <Typography level={level}>{header}</Typography>
		} else if (typeof header === 'object') {
			const headerParts = Object.values(header);
			return (
				<Typography level={level}>
					{headerParts.length === 1 ? (
						<span>
							{headerParts[0]}
						</span>
					) : (
						headerParts.map((part, index) => (
							<span key={index} style={{ opacity: index === 1 ? 1 : 0.5 }}>
								{part}{index < headerParts.length - 1 && ' '}
							</span>
						))
					)}
				</Typography>
			)
		}
		return null;
	};


	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: { xs: 'column', sm: 'row' },
				alignItems: { xs: 'flex-start', sm: 'center' },
				gap: { xs: 1, sm: 1 },
			}}>
			<Box sx={{ flexGrow: 1 }}>
				{breadcrumbs && <BreadcrumbsCustom breadcrumbs={breadcrumbs} />}
				{renderHeader()}
			</Box>
			{RightButtons && (
				<Box sx={{ flexGrow: 0, width: 'auto', margin: "auto 0" }}>
					{typeof RightButtons === 'function' ? <RightButtons /> : RightButtons}
				</Box>
			)}
		</Box>
	)
}

PageHeader.propTypes = {
	header: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
		PropTypes.element
	]).isRequired,
	// headerLevel: PropTypes.string,
	level: PropTypes.string,
	breadcrumbs: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		href: PropTypes.string
	})),
	RightButtons: PropTypes.func,
};

