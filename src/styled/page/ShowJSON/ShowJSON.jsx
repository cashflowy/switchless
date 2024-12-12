'use client';
import React from 'react';
import JsonView from '@uiw/react-json-view';


export default function ShowJSON({ data }) {
    return (
        <JsonView value={data} />
    );
}
