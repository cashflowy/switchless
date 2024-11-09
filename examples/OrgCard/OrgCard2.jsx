import React from "react";
import { Card, Typography, Tooltip, CardContent, Grid } from "@mui/joy";
import { DisplayDate } from "./utils";
export default function OrgCard2({ orgData }) {
    return (
      <Grid container spacing={2} sx={{ p: 0, m: 0 }}>
        {orgData && orgData.map((o) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={o.org.id}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }} component="a" href={`/orgs/${o.org.id}/opportunities`}>
              <div>
              <Typography level="title-lg">{o.org.name}</Typography>
              <Typography level="body-sm">Created on <DisplayDate d={o.org.created_at} /></Typography>
            </div>
              <CardContent orientation="horizontal">
                {/* <div>
                  <Typography level="body-xs">Total parts:</Typography>
                  <Typography fontSize="lg" fontWeight="lg">
                    <pre>{JSON.stringify(o.org.quotes,2,2)}</pre>
                  </Typography>
                </div> */}
              </CardContent>
            </Card>
          </Grid>
        ))}
        {!orgData && (
          <Grid item xs={12}>
            <Typography>You are not part of any org</Typography>
          </Grid>
        )}
      </Grid>
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                                    Note                                    */
  /* -------------------------------------------------------------------------- */
//   More of a listCards Comopnent
// Pattern in PartPricing

