'use client'
import React from "react";
import { Link, Sheet, Typography } from "@mui/joy";

import FullscreenIcon from '@mui/icons-material/Fullscreen';
import OpenInNew from "@mui/icons-material/OpenInNew";

import { useRef, useEffect } from "react";

export default function GSheetIframe({ src, width = '100%', height = '600px' }) {
  const iframeRef = useRef(null);

  // Fullscreen handling function
  const handleFullscreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
      } else {
        console.error("Fullscreen API is not supported.");
      }
    }
  };

  useEffect(() => {
    const iframe = iframeRef.current;

    const handleMouseEnter = () => {
      document.body.style.overflow = 'hidden';
    };

    const handleMouseLeave = () => {
      document.body.style.overflow = 'auto';
    };

    if (iframe) {
      iframe.addEventListener('mouseenter', handleMouseEnter);
      iframe.addEventListener('mouseleave', handleMouseLeave);
    }

    // Cleanup event listeners
    return () => {
      if (iframe) {
        iframe.removeEventListener('mouseenter', handleMouseEnter);
        iframe.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (

        <Sheet sx={{ padding: '2px', gap: 0 }}>
          <iframe
            ref={iframeRef}
            width={width}
            height={height}
            src={src}
            loading="lazy"
            allowFullScreen
            style={{ border: 'none' }}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-downloads"

          />
          <div
            style={{
              padding: "0",
              backgroundColor: 'inherit',
              color: "#394351",
              width: '100%',
              height: '100%'
            }}
          >
            <Typography level="body-xs" sx={{ display: 'inline', marginLeft: '5px' }}>Google Sheets</Typography>
            <Link
              fontSize={15}
              href={src}
              target="_blank"
              startDecorator={<OpenInNew fontSize='inherit' />}
              style={{
                padding: "0px",
                float: "right",
                color: "#394351",
                marginRight: "10px",
              }}
            >Open</Link>
            <Link
              fontSize={15}
              href="#"
              startDecorator={<FullscreenIcon fontSize='inherit' />}
              style={{
                padding: "0px",
                float: "right",
                color: "#394351",
                marginRight: "10px",
              }}
              onClick={(e) => {
                e.preventDefault();
                handleFullscreen();
              }}
            >Fullscreen</Link>
          </div>
        </Sheet>

  );
}
