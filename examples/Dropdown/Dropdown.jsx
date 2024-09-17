'use client';
import * as React from 'react';
import { Select,Option } from "@mui/joy"
function onBlur(){
  // alert('blurred');
  // write your blur logic here
  console.log('on blur');
}
var animals=[
  {
    slug:'dog',
    name:'Dog',
  },
  {
    slug:'cat',
    name:'Cat',
  },
  {
    slug:'horse',
    name:'Horse',
  },
  {
    slug:'cow',
    name:'Cow',
  },
]
export default function Dropdown(){
  return (
    <Select
      name={`dropdown_name`}
      // onBlur={onBlur}
      onChange={onBlur}
      placeholder='Choose animal'
      defaultValue={'dog'}
    >
      {animals?.map((a)=>(
        <Option key={a.slug} value={`${a.slug}`} >{a.name}</Option>
      ))}
    </Select>
  )
}