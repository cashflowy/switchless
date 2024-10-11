'use client';
import * as React from 'react';
import { Pagination as MUIPagination } from "@mui/material";
import { useRouter, useSearchParams } from 'next/navigation';

export default function Pagination({
  pageCount = 1,
  disabled = false,
  customRouter,
  customSearchParams
}) {
  const router = customRouter || useRouter();
  const searchParams = customSearchParams || useSearchParams();

  const handlePageChange = (event, newPage) => {
    // Create a new URLSearchParams object from existing searchParams
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    
    // Update the page parameter
    current.set('page', newPage.toString());
    
    // Construct the new query string
    const search = current.toString();
    const query = search ? `?${search}` : '';
    
    // Navigate to the new URL
    router.push(`${window.location.pathname}${query}`);
  };
// Get the page parameter from the URL
  const pageParam = searchParams.get('page');
  const page = pageParam && !isNaN(parseInt(pageParam)) ? parseInt(pageParam) : 1;

  return (
    <MUIPagination
      count={pageCount}
      page={page}
      variant="outlined"
      shape="rounded"
      onChange={handlePageChange}
      disabled={disabled}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        // marginTop: '1rem',
      }}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*                                    Notes                                   */
// Improve the documentation to show how the URL gets updated with the selected page number.
/* -------------------------------------------------------------------------- */

