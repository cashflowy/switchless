
import React from 'react';
import { Alert, Typography } from "@mui/joy";
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
                {title || 'Data missing'}
            </Typography>
            <Typography
                component="div"
                level="body-md"
            >
                {message || 'No Data to show. Adjust filter or create data.'}
            </Typography>
        </div>
    </Alert>
);

export default AlertBox;
