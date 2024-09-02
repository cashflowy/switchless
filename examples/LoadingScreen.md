
## Usage
```jsx
import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/joy';

const LoadingScreen = ({ message = "Loading..." }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
        >
            <CircularProgress size="md" />
            <Typography level="body-md" sx={{ ml: 2 }}>
                {message}
            </Typography>

        </Box>
    );
};

export default LoadingScreen;
```
