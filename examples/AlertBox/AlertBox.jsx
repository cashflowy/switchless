'use client'
import React from "react";
import { Alert, Box, Typography } from "@mui/joy";
export default function AlertBox({color, variant='soft'} ) {
    return <>
        <Alert
            size="md"
            color={color}
            variant={variant}
            sx={{
                mb: 2,
                // bgcolor: 'background.success',
                // '& .MuiAlert-message': {
                //     color: 'text.success',
                // },
            }}
        >
            <Box sx={{ flex: 1 }}>
                <Typography level="title-lg" color={`text.${color}`}>Vendor creation restricted to Admin only</Typography>
                <Typography color={`text.${color}`}>
                    Admin has restricted vendor creation to &ldquo;Admin only&ldquo; (from settings).
                </Typography>
                <Typography>
                    {/* Your access level is {_user.membership.type}. You don&lsquo;t have sufficient permission. */}
                </Typography>
            </Box>
        </Alert>
    </>
}