import React from 'react';

const currencyFormatter = (currency, value) => {
  if (currency === 'INR') {
    if (value >= 1e7) {
      return `${currency} ${(value / 1e7).toFixed(2)} Cr`;
    } else if (value >= 1e5) {
      return `${currency} ${(value / 1e5).toFixed(2)} L`;
    }
  } else if (currency === 'USD') {
    if (value >= 1e6) {
      return `${currency} ${(value / 1e6).toFixed(2)} M`;
    } else if (value >= 1e3) {
      return `${currency} ${(value / 1e3).toFixed(2)} K`;
    }
  }

  // Fallback to basic number formatting if no special case applies
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 2,
  }).format(value);
};

export default function CurrencyFormatter ({ currency, value }){
  const formattedValue = currencyFormatter(currency, value);

  return <span>{formattedValue}</span>;
};

