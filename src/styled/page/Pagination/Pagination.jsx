'use client';
import React from 'react';
import { Box, Button, Typography } from '@mui/joy';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Pagination ({pageCount}){
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')||'1');
  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // width: '1100px', // Set this to the static width of your table
        height: 'var(--joy-size-md)',
        mt: 1,
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
      <Typography level="body-sm">
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
