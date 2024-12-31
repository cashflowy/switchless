'use client'
import React from 'react';
import { Alert, Typography, List, ListItem } from "@mui/joy";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";


const AlertBox = ({ title, message, icon = true, color='warning' }) => (
    <Alert
        variant="soft"
        invertedColors
        color={color}
        startDecorator={icon ? <WarningRoundedIcon /> : null}
        sx={{ alignItems: "flex-start" }}
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
