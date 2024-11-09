import React from 'react';
import SideFilter from './SideFilter';

export default {
  title: 'Example Patterns/SideFilter',
  component: SideFilter,
  parameters: {
    layout: 'centered',
  },
  
};


 const fields=[
    { type: 'text', label: 'Product Name', name: 'name',gridProps:{xs:6} },
    { type: 'select', label: 'Category', name: 'category', options: [
      { value: 'electronics', label: 'Electronics' },
      { value: 'clothing', label: 'Clothing' },
      { value: 'home', label: 'Home' },
    ]},
    { type: 'number', label: 'Price', name: 'price',gridProps:{xs:6} },
    { type: 'select', label: 'something', name: 'something',gridProps:{xs:6}, options: [
      { value: 'something', label: 'something' },
      { value: 'clothing', label: 'Clothing' },
      { value: 'home', label: 'Home' },
    ]},
  ]
  
  const searchParams = {
    name: 'Wireless Headphones',
    category: 'electronics',
    price: '299',
    something: 'something'
  };

export const Default = {
    args: {
        fields: fields,
        searchParams:searchParams
     
    },
  };
  