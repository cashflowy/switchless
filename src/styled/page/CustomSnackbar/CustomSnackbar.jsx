
'use client'
import React, { useState } from "react";
import { Snackbar, Button, Typography } from "@mui/joy";

export default function CustomSnackbar({
    color="primary",
    header,
    icon,
    // description,
    content = 'Snackbar content'
}) {
    const [open, setOpen] = useState(false);

    const handleSnackbarClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button onClick={() => setOpen(true)}>
                Open Snackbar
            </Button>

            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                color={color}
                open={open}
                onClose={handleSnackbarClose}
                variant="soft"
                autoHideDuration={5000}
                startDecorator={icon}
            >
                <div>
                    {header && (
                        <Typography level="title-sm" component="div">
                            {header}
                        </Typography>
                    )}
                    {/* {description && (
                        <Typography level="body-sm" component="div">
                            {description}
                        </Typography>
                    )} */}
                    {content && (
                        <Typography level="body-md" component="div">
                            {content}
                        </Typography>
                    )}
                </div>
            </Snackbar>
        </>
    );
}