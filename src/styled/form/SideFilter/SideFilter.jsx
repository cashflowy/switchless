'use client';
import React from 'react';


import { useState, useEffect } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import SideFilterAccordian from '../SideFilterAccordian/SideFilterAccordian';

import {ButtonGroup,Button,Input,FormControl,FormLabel,Select,Option,Grid} from '@mui/joy';
export default function SideFilter({
  searchParams={},
  fields=[],
  useRouter=()=>({push:()=>{}}),
  usePathname=()=>'/',
}){
  const pathname = usePathname();
  const router = useRouter();
  const [loading,setLoading]=useState({apply:false,reset:false});
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading({apply:true,reset:false});
    const form = event.currentTarget;
    const formData = new FormData(form);
    
    const currentSearchParams = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value) {
        currentSearchParams.append(key, value);
      }
    });

    const newSearchParams = new URLSearchParams();
    formData.forEach((value, key) => {
      if (value !== "" && value !== "all") {
        let field = fields.find(f => f.name === key);
        if (field.multiple && value !== "") {
          value = JSON.parse(value);
        }
        newSearchParams.append(key, value.toString());
      }
    });

    const queryString = newSearchParams.toString();
    if(currentSearchParams.toString() === queryString) {
      setLoading({apply: false, reset: false});
      return;
    }
    await router.push(`${pathname}?${queryString}`);
  };
  const handleReset = async () => {
    setLoading({apply:false,reset:true});
    await router.push(pathname, undefined, { shallow: false });
    // setLoading({apply:false,reset:false});
  };
  useEffect(() => {
    setLoading({apply: false, reset: false});
  }, [pathname, searchParams]);

  const CustomFormField = function({width='full',label,children,show=true}){
    let col_width=12;
    if(width=='half')
      col_width=6;
    else if(width=='third')
      col_width=4;
    if(show)
      return (
        <Grid xs={col_width} sx={{ pt: 0.5 }}>
          <FormControl>
            <FormLabel sx={{mb:0.25}}>{label}</FormLabel>
            {children}
          </FormControl>
        </Grid>
      )
    return <></>
  }
  let sx={
    active:{bgcolor:'primary.50',borderColor:'primary.300'},
    passive:{bgcolor:'white'} 
  }

  
  return (
    <SideFilterAccordian>
      <form onSubmit={handleSubmit}>
        <Grid container rowSpacing={2} columnSpacing={1} sx={{ pt: 1 }}>
          {fields.map((field)=><>
            {field.field=='input' && <>
              <CustomFormField width={field.width} label={field.label} show={field.show}>
                <Input 
                  sx={searchParams[field.name]?sx.active:sx.passive} 
                  size="sm" 
                  name={field.name} 
                  type={field.type} 
                  placeholder={field.placeholder} 
                  defaultValue={searchParams[field.name] || field.defaultValue || ""} 
                />
              </CustomFormField>
            </>}
            {field.field=='select' && !field.multiple && <>

              <CustomFormField width={field.width} label={field.label} show={field.show}>
                <Select 
                  sx={searchParams[field.name]?sx.active:sx.passive} 
                  size="sm" 
                  name={field.name} 
                  defaultValue={searchParams[field.name] || field.defaultValue || ""} 
                >
                  {field.options.map((option)=>
                    <Option value={option.value}>{option.display}</Option>
                  )}
                </Select>
              </CustomFormField>
            </>}
            {field.field=='select' && field.multiple && <>
              <CustomFormField width={field.width} label={field.label} show={field.show}>
                <Select 
                  sx={searchParams[field.name]?sx.active:sx.passive} 
                  size="sm" 
                  name={field.name} 
                  multiple
                  defaultValue={
                    (searchParams[field.name] && searchParams[field.name]?.split(","))
                    || (field?.defaultValue && field?.defaultValue?.split(","))
                  } 
                >
                  {field.options.map((option)=>
                    <Option value={option.value}>{option.display}</Option>
                  )}
                </Select>
              </CustomFormField>
            </>}
            {/* <pre>{JSON.stringify(field,null,2)}</pre> */}
          </>)}
          

          <Grid xs={12} sx={{ pt: 0.5 }}>
            <ButtonGroup spacing={1} >
              <Button loading={loading.apply} disabled={loading.reset} type="submit" fullWidth color="primary" variant="solid" startDecorator={<FilterAltIcon />}>Apply filter</Button>
              <Button disabled={loading.apply} loading={loading.reset} fullWidth variant="outlined" color="primary" onClick={handleReset} >Reset</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </form>
    </SideFilterAccordian>
  );
}