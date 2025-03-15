'use client'
import React from 'react';
import { Alert, Typography, List, ListItem } from "@mui/joy";


const AlertBox = ({ title, message, icon = true, color='warning' }) => (
    <Alert
    
        variant="soft"
        invertedColors
        color={color}
        startDecorator={icon}
        sx={{ alignItems: "flex-start", width: "100vw" }}
    >
        <div>
            <Typography
                component="div"
                level="title-lg"
            // fontWeight="bold" 
            >
                {title }
            </Typography>
            <Typography
                component="div"
                level="body-md"
            >
                {Array.isArray(message) ? <List marker="disc">
                    {message.map((item, index) => (
                        <ListItem key={index}>{item}</ListItem>
                    ))}
                </List> : message}
            </Typography>
        </div>
    </Alert>
);

export default AlertBox;
