'use client'
import React from 'react';
// .toISOString().substring(0,10)
export default function DisplayDate({d}){
	return (
		<span>
			{d.substring(0,10)}
		</span>
	)
}

import { VERSION } from './version';
DisplayDate.version = VERSION;