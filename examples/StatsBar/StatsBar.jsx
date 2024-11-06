import React from 'react';
import {Card,CardContent,Stack,Typography} from '@mui/joy';
export default function StatsBar({stats}){ 
  // const formatNumber = (number) => new Intl.NumberFormat().format(number.toFixed(0));
  const number = new Intl.NumberFormat('en-IN');
  return <>
    <Card
      variant="outlined"
      sx={{
        mb:1,
        bgcolor: 'white',
      }}
    >
      <CardContent orientation="horizontal">
        <Stack direction='row' spacing={2} sx={{justifyContent: "space-evenly"}}>
          <div>
            <Typography level="body-xs">Net Change:</Typography>
            <Typography fontSize="lg" fontWeight="lg" color={stats?.total?.net_change>0?'success':'warning'}>
              {number.format(stats?.total?.net_change?.toFixed(0))}
              {/* {stats?.total?.net_change.toFixed(0)} */}
            </Typography>
          </div>
          <div>
            <Typography level="body-xs">Inflow:</Typography>
            <Typography fontSize="lg" fontWeight="lg" color='success'>
              {number.format(stats?.total?.inflow.toFixed(0))}
            </Typography>
          </div>
          <div>
            <Typography level="body-xs">Outflow:</Typography>
            <Typography fontSize="lg" fontWeight="lg" color='warning'>
              {number.format((-stats?.total?.outflow).toFixed(0))}
            </Typography>
          </div>
          <div>
            <Typography level="body-xs">Income:</Typography>
            <Typography fontSize="lg" fontWeight="lg" color='success'>
              {number.format(stats?.total?.income?.toFixed(0))}
            </Typography>
          </div>
          <div>
            <Typography level="body-xs">Expense:</Typography>
            <Typography fontSize="lg" fontWeight="lg" color='warning'>
              {number.format((-stats?.total?.expense)?.toFixed(0))}
            </Typography>
          </div>
          <div>
            <Typography level="body-xs">Transfer In:</Typography>
            <Typography fontSize="lg" fontWeight="lg" color='success'>
              {number.format(stats?.total?.transfer_in?.toFixed(0))}
            </Typography>
          </div>
          <div>
            <Typography level="body-xs">Transfer Out:</Typography>
            <Typography fontSize="lg" fontWeight="lg" color='warning'>
              {number.format((-stats?.total?.transfer_out)?.toFixed(0))}
            </Typography>
          </div>
          <div>
            <Typography level="body-xs">Count:</Typography>
            <Typography fontSize="lg" fontWeight="lg" >
              {number.format(stats?.count)}
            </Typography>
          </div>
				</Stack>
      </CardContent>
    </Card>
  </>
}


/* -------------------------------------------------------------------------- */
/*                                    notes                                   */
/* -------------------------------------------------------------------------- */
/*
Not Sure on how to abstaract it for different stats and stat colors
Used in the transactions App.

*/