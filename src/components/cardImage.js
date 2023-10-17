import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MovieCreationTwoToneIcon from '@mui/icons-material/MovieCreationTwoTone';
import TempleHinduTwoToneIcon from '@mui/icons-material/TempleHinduTwoTone';
import CelebrationTwoToneIcon from '@mui/icons-material/CelebrationTwoTone';
import FastfoodTwoToneIcon from '@mui/icons-material/FastfoodTwoTone';

export default function CardImage({name,type,count}) {
  return (
    <Card sx={{ direction:'flex' }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="body" component="div">
                 {name}
              </Typography>
              <Typography variant="h5" color="text.warning">
<Stack direction="row" spacing={3}>
  {count}  {type === 'food' ? <FastfoodTwoToneIcon sx={{ fontSize: 30,color: 'red' }} />: type === 'devotional'? <TempleHinduTwoToneIcon sx={{ fontSize: 30,color: 'Green' }}/>:type === 'movie'? <MovieCreationTwoToneIcon sx={{ fontSize: 30,color: '#2571f5' }}/>:<CelebrationTwoToneIcon sx={{ fontSize: 30,color: 'Violet' }}/>}
</Stack>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
  );
}