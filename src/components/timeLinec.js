import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FacebookIcon from '@mui/icons-material/Facebook';
import PublicIcon from '@mui/icons-material/Public';
import TempleHinduTwoToneIcon from '@mui/icons-material/TempleHinduTwoTone';
import CelebrationTwoToneIcon from '@mui/icons-material/CelebrationTwoTone';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MovieCreationTwoToneIcon from '@mui/icons-material/MovieCreationTwoTone';

export default function TimeLinec({event}) {


  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.primary"
        >
          {event.eventStartDate}
          <br/>{event.eventEndDate}

          <Typography>{event.website? <a href={event.website} target="_blank" ><PublicIcon /></a>:''}
               {event.facebook? <a href={event.facebook} target="_blank" ><FacebookIcon /></a>:''}
               {event.whatsapp? <a href={event.whatsapp} target="_blank" ><WhatsAppIcon /></a>:''}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">

            {event.type === 'food' ? <FastfoodIcon />: event.type === 'devotional'? <TempleHinduTwoToneIcon />:event.type === 'movie'? <MovieCreationTwoToneIcon />:<CelebrationTwoToneIcon />}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            {event.eventName}
          </Typography>
          <Typography>{event.location}</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}