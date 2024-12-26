"use client";
import React from 'react';
import { IconButton, Box, Stack,Typography } from "@mui/joy";
import { useState,useRef } from 'react';
import useResizeObserver from '@react-hook/resize-observer';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


const useElementWidth = (targetRef) => {
  const [width, setWidth] = useState(0);

  useResizeObserver(targetRef, (entry) => {
    setWidth(entry.contentRect.width);
  });
  return width;
};



export default function FoldFilterContainer({ columnOne,columnTwo,searchParams }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const targetRef = useRef(null);
  const width = useElementWidth(targetRef);
  // const isCollapsed = width <= 50;
  return (
    <>
      <Stack 
        direction={{ 
          xs: 'column', // vertical on mobile
          md: 'row'     // horizontal on medium and larger screens
        }} 
        spacing={1.5}
        sx={{
          width: '100%',    // Ensure the stack takes full width
          overflow: 'hidden' // Prevent horizontal overflow
        }}
      >
        <Box ref={targetRef}
          sx={{
            width: {
              xs: '100%',                           // full width on mobile
              md: isCollapsed ? '36px' : '333px'    // controlled width on desktop
            },
            minWidth: {
              xs: 'auto',                           // auto on mobile
              md: isCollapsed ? '36px' : '333px'    // controlled min-width on desktop
            },
            maxWidth: {
              xs: '100%',
              md: isCollapsed ? '36px' : '333px'
            },
            flexShrink: 0,  // Prevent the filter column from shrinking
            transition: 'all 0.3s ease-in-out'
          }}
        >
          {width <=150 ? (
            <Box 
              sx={{ 
                // height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: 2
              }}
            >
              <Typography 
                sx={{ 
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  letterSpacing: '0.1em'
                }}
              >
                Filter {Object.keys(searchParams).length > 0 && '(Applied)'}
              </Typography>
            </Box>
          ) : (columnOne)}
          {/* {columnOne} */}
          <Box 
            sx={{ 
              display: { 
                xs: 'none',     // hidden on mobile
                md: 'flex'      // visible and flex on medium and up
              }, 
              justifyContent: 'flex-end', 
              mt: 1 
            }}
          >
            <IconButton 
              variant="outlined" 
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </Box>
        </Box>

        <Box 
          sx={{ 
            flexGrow: 1,
            minWidth: 0,  // Allow the content to shrink below its minimum content size
            width: '100%' // Take remaining width
          }}
        >
          {columnTwo}
        </Box>
      </Stack>
    </>
  );
}