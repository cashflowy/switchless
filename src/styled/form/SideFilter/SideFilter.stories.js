import React from 'react';
import SideFilter from './SideFilter';

export default {
  title: 'Exported via npm/Styled/Form/SideFilter',
  component: SideFilter,
  parameters: {
    layout: 'padded',
  },
};

const fields = [
  {
    field:'input',
    type:'date',
    name:'date_from',
    width:'half',
    label:'Date From',
    show:true,
  },
  {
    field:'input',
    type:'date',
    name:'date_to',
    width:'half',
    label:'Date To',
    show:true,
  },
  {
    field:'input',
    type:'number',
    name:'amount_from',
    width:'third',
    label:'Amount from',
    show:true,
  },
  {
    field:'input',
    type:'number',
    name:'amount_to',
    width:'third',
    label:'Amount to',
    show:true,
  },
  {
    field:'select',
    name:'flow_type',
    width:'third',
    label:'In / Out 2',
    show:true,
    options:[
      {
        value:'',
        display:'All',
      },
      {
        value:'inflow',
        display:'Inflow',
      },
      {
        value:'outflow',
        display:'Outflow',
      },
    ]
  },
  {
    field:'input',
    type:'string',
    name:'particulars',
    width:'full',
    label:'Particulars',
    placeholder:'contains ...',
    show:true,
  },
  {
    field:'select',
    multiple:true,
    name:'accounts',
    width:'full',
    label:'Accounts',
    show:true,
    options:[
      {
        value:'1',
        display:'ICICI 651',
      },
      {
        value:'2',
        display:'ICICI 451',
      },
      {
        value:'3',
        display:'ICICI CC 3000',
      },
    ]
  },
]

// Basic filter story with minimal props
export const Basic = {
  render: () => (
    <>
      <div style={{ width: '400px' }}>
        <SideFilter
          {...{
            searchParams: {},
            fields,
            useRouter:()=>({push:(url)=>{alert(url)}}),
          }}
        />
      </div>
    </>
  )
};

// Story with pre-filled search params
export const WithSearchParams = {
  render: () => (
    <>
      <div style={{ width: '400px' }}>
        <SideFilter {...{
          searchParams: {
            date_from: '2024-01-01',
            date_to: '2024-03-31',
            amount_from: '1000',
            amount_to: '5000',
            flow_type: 'inflow',
            // accounts: '1,2',   
            type: 'income',
          },
          fields,
          useRouter:()=>({push:(url)=>{alert(url)}}),
        }}
        />
      </div>
    </>
  )
};
