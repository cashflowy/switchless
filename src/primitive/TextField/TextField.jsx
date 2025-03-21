'use client'
import React from 'react';
import {Input,FormLabel, FormControl } from '@mui/joy';
// import { FormControl } from '@mui/base/FormControl';
export default function TextField({name,defaultValue,placeholder,label,required,type,step,endDecorator,startDecorator,disabled,hidden,onBlur}){
	var number_sx = {
		textAlign:'right',
		'& input': { 
			textAlign: 'right' 
		} 
	}
	return(
		<FormControl
		required={required}
		disabled={disabled}
		hidden={hidden}
		>
		<FormLabel sx={{
			margin: 0
		}}>{label}</FormLabel>
			<Input
				type={type}
				name={name}
				step={step}
				defaultValue={defaultValue}
				startDecorator={startDecorator}
				endDecorator={endDecorator}
				placeholder={placeholder}
				onBlur={onBlur}
				sx={type=='number'? number_sx : {}}
			/>
			{/*<FormHelperText>Please enter a name</FormHelperText>*/}
		</FormControl>
	)
}


