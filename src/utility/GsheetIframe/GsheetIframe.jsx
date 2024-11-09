import React from 'react';
import {Card, CardContent , CardOverflow, Divider, Typography, AspectRatio} from '@mui/joy'
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';



export default function GsheetIframe({src}) {

  const iframeProps = {
    sandbox: "allow-scripts allow-same-origin allow-popups allow-forms allow-downloads",
    loading: "lazy",
    allowFullScreen: true,
    frameBorder: 0,
    src: src
  }
  
  return (
    <Card variant="outlined" sx={{ width: '100%', gap: 0 }}>
      <CardOverflow sx={{ paddingBottom: 0 }}>
        <AspectRatio ratio="16/9">
          <iframe {...iframeProps} />
        </AspectRatio>
      </CardOverflow>
      <Divider />
      <CardOverflow variant="soft" sx={{ px: 1 }}>
        <CardContent orientation="horizontal"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 0, ml: 0 }}>
          <Typography level="body-sm">Google Sheet</Typography>
          <CardActions sx={{ p: 0, justifyContent: 'flex-end' }}>
            <IconButton size="xs" component="a" href={src} target="_blank" rel="noopener noreferrer">
              <OpenInNewIcon sx={{ fontSize: '1rem' }} />
            </IconButton>
          </CardActions>
        </CardContent>
      </CardOverflow>
    </Card>
   
  )
}


import { VERSION } from './version';
GsheetIframe.version = VERSION;