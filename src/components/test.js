import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export default function Cardc({url,name,desc,img}){
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
  return (
  <div>
    <Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={1}>
          <Grid container item spacing={3}>
        <Grid item xs={4}>
          <Item> <Card sx={{ minWidth: 275 }} variant="outlined">
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
                   </Item>
        </Grid>
          </Grid>
              </Grid>
            </Box>

    </div>
  );
}


