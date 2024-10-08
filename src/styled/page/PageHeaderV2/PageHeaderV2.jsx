'use client'
import {Box, Typography, Breadcrumbs ,Link} from '@mui/joy';
import React from 'react';

const BreadcrumbsCustom = function({breadcrumbs}){

	return (
		<Breadcrumbs separator="›" aria-label="breadcrumbs" sx={{p:0}}>
			{breadcrumbs.map((b, index) => (
				<React.Fragment key={index}>
					{b.href ? (
					<Link key={b.href} color="primary" href={b.href}>
					  {b.text}
					</Link> 
					) : (
					  <Typography key={b.text}>{b.text}</Typography>
					)}
				</React.Fragment>
			))}
		</Breadcrumbs>
	)
}

export default function PageHeaderV2({header="PageHeader",RightButtons=null,headerLevel = 'h3',breadcrumbs = null }){

	const renderHeader = () => {
		if (typeof header === 'string') {
		  return <Typography level={headerLevel} >{header}</Typography>
		} else if (typeof header === 'object') {
			const headerParts = Object.values(header);
			return (
					<Typography level={headerLevel} >
					{headerParts.map((part, index) => (
						<span key={index} style={{ opacity: index === 1 ? 1 : 0.5 }}>
						{part}{index < headerParts.length - 1 && ' '}
						</span>
					))}
					</Typography>
					)}
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
			<Box sx={{flexGrow: 0, width: 'auto',margin:"auto 0"}}>
				 {typeof RightButtons === 'function' ? <RightButtons /> : RightButtons}
			</Box>
            )}
		</Box>
	)
}

/* -------------------------------------------------------------------------- */
/*                              Things to Change¸    

/*1. Change to Next.js 14 App Router Link
Go through the code check it thorughly
Look through it with fresh eyes
/*
                         */
/* -------------------------------------------------------------------------- */