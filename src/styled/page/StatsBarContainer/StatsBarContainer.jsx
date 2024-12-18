'use client';
import React from 'react';
// this container implements overflow correctly. 
import {Card,CardContent,Stack,Typography,Divider} from '@mui/joy';
export default function StatsBarContainer({items=[],children}){
  // const formatNumber = (number) => new Intl.NumberFormat().format(number.toFixed(0));
  
  function nF(num,options){
    const number = new Intl.NumberFormat('en-IN');
    if(parseFloat(num)){
      if(typeof num =='number')
        num = num?.toFixed(0)
      return number.format(num);
    }else{
      return num;
    }
  }
  const Metric = function({label,value,color}){
    if(!color){
      color = value>0?'success':'warning';
      if(value==0)
        color='neutral'
    }
    return <div>
      <Typography level="body-xs" noWrap sx={{ maxWidth: '100px', textOverflow: 'ellipsis' }}>{label}:</Typography>
      <Typography fontSize="lg" fontWeight="lg" color={color}>
        {nF(value)}
      </Typography>
    </div>
  }
  return <>
    <Card
      variant="outlined"
      sx={{
        mb:1,
        bgcolor: 'white',
      }}
    >
      <CardContent orientation="horizontal">
        <Stack direction='row' spacing={2} sx={{ 
          overflowX: "auto", 
          justifyContent: "space-evenly",
          '&::-webkit-scrollbar': { display: 'none' },  // Hide scrollbar for Chrome/Safari/Newer Edges
          msOverflowStyle: 'none',  // Hide scrollbar for IE
          scrollbarWidth: 'none',  // Hide scrollbar for Firefox
        }}>
          {items.map((item,i)=>{
            if(item.type=='metric')
              return <Metric key={i} label={item.label} value={item.value} color={item.color}/>
            if(item.type=='divider')
              return <Divider key={i} orientation="vertical" />
          })}
          {children}
				</Stack>
      </CardContent>
    </Card>
    {/* <pre>{JSON.stringify(stats.expense,null,2)}</pre> */}
  </>
}