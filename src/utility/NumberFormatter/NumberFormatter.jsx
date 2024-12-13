'use client'
import React from 'react';

const formatNumber = (value, style = 'US', precision = 2) => {
  const absValue = Math.abs(value);
  
  if (style === 'IN') {
    if (absValue >= 1e7) {
      return `${(value / 1e7).toFixed(precision)} Cr`;
    } else if (absValue >= 1e5) {
      return `${(value / 1e5).toFixed(precision)} L`;
    } else if (absValue >= 1e3) {
      return `${(value / 1e3).toFixed(precision)} K`;
    }
  } else { // US style
    if (absValue >= 1e9) {
      return `${(value / 1e9).toFixed(precision)} B`;
    } else if (absValue >= 1e6) {
      return `${(value / 1e6).toFixed(precision)} M`;
    } else if (absValue >= 1e3) {
      return `${(value / 1e3).toFixed(precision)} K`;
    } 
  }
  
  return Number.isInteger(value) ? value : value.toFixed(2);
};

export default function NumberFormatter ({ value, style, precision }) {
  const formattedValue = formatNumber(value, style, precision);
  
  return <span>{formattedValue}</span>
}









