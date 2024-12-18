'use client';
import React from 'react';
import { Box, Button, Typography } from '@mui/joy';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Pagination2 ({pageCount,sx={},mock={}}){
  const pathname = mock.pathname || usePathname();
  const searchParams = mock.searchParams || useSearchParams();
  const currentPage = parseInt(searchParams.get('page')||'1');
  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  

  return (
    <Box
      sx={{
        ...{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 1,
        },
        ...sx
      }}
    >
      <Button
        component={Link}
        variant="outlined"
        color="neutral"
        size="sm"
        href={createPageURL(currentPage - 1)}
        disabled={currentPage === 1 }
      >
        Previous
      </Button>
      <Typography level="body-sm" sx={{mx:1}}>
        Page {currentPage} of {pageCount}
      </Typography>
      <Button
        component={Link}
        variant="outlined"
        color="neutral"
        size="sm"
        href={createPageURL(currentPage + 1)}
        disabled={currentPage === pageCount}
      >
        Next
      </Button>
    </Box>
  );
};
