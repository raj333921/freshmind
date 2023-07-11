import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Cardc({url,name,desc,img}){

  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 20 }} variant="poster" gutterBottom>
                {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {desc}
          </Typography>
        </CardContent>
        <CardActions>
        <Link href={url} target="_blank">Link</Link>
        </CardActions>
    </Card>
  );
}


