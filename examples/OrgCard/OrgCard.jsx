import React from 'react';
import { Card, Typography, Tooltip, CardContent } from "@mui/joy";


export default function OrgCard({ name, createdAt, href='/orgs' }){
    return (
      <Tooltip title={name} enterDelay={800} enterNextDelay={800} variant="outlined">
        <Card component="a" href={href}
          sx={{
            textDecoration: "none",
            transition: "all 0.1s ease-in-out",
            "&:hover": {
              textDecoration: "none",
              boxShadow: "lg",
              backgroundColor: "background.level2",
              transform: "translateY(-2px)",
            },
          }}
        >
          <Typography level="title-lg" noWrap sx={{ color: "inherit" }}>
            {name}
          </Typography>
          <Typography level="body-xs">
            {/* Created on {createdAt.slice(0, 10)} */}
            Created on {createdAt}
          </Typography>
          <CardContent orientation="horizontal"></CardContent>
        </Card>
      </Tooltip >
    );
  };


