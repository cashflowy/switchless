'use client'
import React from 'react'
import { Link as JoyLink } from '@mui/joy'
import NextLink from 'next/link'
import PropTypes from 'prop-types';


export default function Link({ href='/', sx={}, target='_self', onClick=()=>{}, children, Component=null }) {
  if (Component) {
    return (
      <NextLink href={href} target={target} passHref>
        <Component
          onClick={(e) => { if (onClick) { onClick(e) } }}
          sx={sx}>
          {children}
        </Component>
      </NextLink>
    )
  }

  const defaultSx = {
    backgroundColor: "transparent",
    "&:hover": { backgroundColor: "none" },
  };

  return (
    <JoyLink color="neutral" component={NextLink} underline="none" target={target} href={href}
      sx={{
        ...defaultSx,
        ...sx
      }}
      onClick={(e) => { if (onClick) { onClick(e) } }}>
      {children}
    </JoyLink>
  )
}


// For Storybook Documentation
Link.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
  onClick: PropTypes.func,
  Component: PropTypes.elementType,
  href: PropTypes.string.isRequired,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
};

