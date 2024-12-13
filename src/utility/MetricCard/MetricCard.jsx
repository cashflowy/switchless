'use client'
import React from 'react';
import { Typography, Card, CardContent, Chip } from '@mui/joy';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import RemoveIcon from '@mui/icons-material/Remove'; 

import PropTypes from 'prop-types';



const currencyFormatter = (value, currency = 'USD', locale = 'en-US') => {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    notation: 'compact',
    maximumFractionDigits: 2,
  });

  let formatted = formatter.format(value);

  // Special handling for INR
  if (currency === 'INR') {
    if (value >= 10000000) { // 1 crores
      const crores = value / 10000000;
      formatted = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        maximumFractionDigits: 2,
      }).format(crores).replace(/[\d,]+/, trimNumber(crores)) + ' Cr';
    } else if (value >= 100000) { // 1 lakh
      const lakhs = value / 100000;
      formatted = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        maximumFractionDigits: 2,
      }).format(lakhs).replace(/[\d,]+/, trimNumber(lakhs)) + ' L';
    }
  }

  // Trim trailing zeros and unnecessary decimal points for all currencies
  return formatted.replace(/(\d+)(\.?)(\d*)/, (match, p1, p2, p3) => {
    if (p3) {
      p3 = p3.replace(/0+$/, '');
      return p3 ? `${p1}${p2}${p3}` : p1;
    }
    return p1;
  });
};

const trimNumber = (num) => {
  return num.toFixed(0).replace(/\.?0+$/, '');
};




export default function MetricCard ({ title, value, previousValue, width = '200px', currency = 'USD',locale='en-US'}) {
  const change = previousValue !== 0
    ? ((value - previousValue) / previousValue) * 100
    : 0;
  
    let chipColor, TextColor, ArrowIcon;

    if (change > 0) {
      chipColor = 'success';
      TextColor = '#00c853';
      // '#6ae900';
      ArrowIcon = NorthEastIcon;
    } else if (change < 0) {
      chipColor = 'danger';
      TextColor = '#f44336';
      ArrowIcon = SouthEastIcon;
    } else {
      chipColor = 'neutral';
      TextColor = '#757575'; 
      ArrowIcon = RemoveIcon;
    }

  return (
    <Card variant="outlined" sx={{ width: width, p: 1.5, }}>
      <CardContent sx={{alignItems: 'center'}}>
      <Typography level="body-sm" > {title} </Typography>
      <Typography level="h2" fontWeight="bold"> 
      {currencyFormatter(value, currency, locale)}
        </Typography>
      <Typography level="body-xs" >from {currencyFormatter(previousValue, currency, locale)}</Typography>
        <Chip variant="soft" color={chipColor}
         endDecorator={<ArrowIcon sx={{fontSize: 14, color: TextColor}} />}ßå >
            <Typography level="body-xs" sx={{color: TextColor}}>
            {change===0 ? '0%': `${change.toFixed(2)}%`}
            </Typography>
        </Chip>
      </CardContent>
    </Card>
  );
};
  

MetricCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  previousValue: PropTypes.number.isRequired,
  width: PropTypes.string,
  currency: PropTypes.string,
  locale: PropTypes.string,
};

MetricCard.defaultProps = {
  width: '200px',
  currency: 'USD',
  locale: 'en-US',
};


