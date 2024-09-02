#### Usage


```jsx
'use client'
import React, { useState } from "react";
import { Snackbar, Button } from "@mui/joy";
import { OverridableStringUnion } from '@mui/types';

export default function SnackbarExample() {
    const [snackbar, setSnackbar] = useState({
        open: false,
        color: 'success',
        content: 'snackbar content',
    });

    const handleSnackbarClose = () => {
        setSnackbar({ ...snackbar, open: false });
    };
    return <>
        <Button onClick={() => setSnackbar({ ...snackbar, open: true })}>Open Snackbar</Button>

        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            color={snackbar.color}
            open={snackbar.open}
            onClose={handleSnackbarClose}
            variant="soft"
            autoHideDuration={5000}
        >
            {snackbar.content}
        </Snackbar>
    </>
}
```