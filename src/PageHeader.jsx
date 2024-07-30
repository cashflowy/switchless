'use client'
import {Box,Typography,Breadcrumbs,Link} from '@mui/joy';
import React from 'react';


var BreadcrumbsCustom = function({breadcrumbs}){
	return (
		<Breadcrumbs separator="›" aria-label="breadcrumbs" sx={{p:0}}>
			{breadcrumbs.map((b)=>(
				<>
					{b.href?
					<Link key={b.link} color="primary" href={b.href}>
					  {b.text}
					</Link>:
					  <Typography key={b.text}>{b.text}</Typography>
					}
				</>
			))}
		</Breadcrumbs>
	)
}


export default function PageHeader({header,RightButtons,breadcrumbs}){
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', mt:-1,mb:2}}>
			<Box
				sx={{
					// pt: '6px',
					// display: { xs: 'none', md: 'flex' },
					flexGrow: 1
				}}
			>
				<BreadcrumbsCustom breadcrumbs={breadcrumbs} />
				<Typography
					level='h3'
					component="h3"
					href="#app-bar-with-responsive-menu"
				>
					{header||'Header'}
				</Typography>
			</Box>
			
			<Box sx={{flexGrow: 0}}>
				{RightButtons && <RightButtons/>}
			</Box>
		</Box>
		
	)
}