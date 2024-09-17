
## Usage
```jsx
'use client';
import * as React from 'react';
import { Pagination as MUIPagination } from "@mui/material";

export default function Pagination({count=1, disabled=false}){

  const handlePageChange = (event, page) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set('page', page.toString());
    const search = current.toString();
    const query = search ? `?${search}` : '';
    router.replace(`${window.location.pathname}${query}`);
  };

  return(
    <MUIPagination count={count}
              variant='outlined'
              shape='rounded'
              onChange={handlePageChange}
              disabled={disabled} />
  )
}
```
