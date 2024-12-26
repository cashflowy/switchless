'use client';
import React from 'react'
import { usePathname } from "next/navigation";
import { Box, List, ListItem, ListItemButton } from "@mui/joy";
import Link from "next/link";

export default function VerticalMenu({items=[]}){
  const pathname = usePathname();
  return (<>
    <Box sx={{ flexGrow: 1, display: 'flex', gap: 2, flexWrap: 'wrap', '& > *': { minWidth: 0, flexBasis: 200 }, }}>
      <List size='md' variant="outlined" sx={{ maxWidth: 300, borderRadius: 'sm', p: 0 }}>
        {/* {items.map((i)=> <Item key={i.name} href={i.href}>{i.name}</Item>)} */}
        {items.map((i)=> 
          <ListItem key={i.name}>
            <ListItemButton 
              selected={pathname === i.href} 
              component={Link} 
              href={i.href} 
              sx={{borderRadius: 0, border: 'none', textDecoration: 'none', '&:hover': { textDecoration: 'none' } }}
            >
              {i.name}
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  </>)
}