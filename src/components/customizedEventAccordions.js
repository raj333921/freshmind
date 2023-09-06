import * as React from 'react';
import Cardc from './cardc'
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import PublicIcon from '@mui/icons-material/Public';
import TempleHinduTwoToneIcon from '@mui/icons-material/TempleHinduTwoTone';
import CelebrationTwoToneIcon from '@mui/icons-material/CelebrationTwoTone';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MovieCreationTwoToneIcon from '@mui/icons-material/MovieCreationTwoTone';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedEventAccordions({eventName,type,startDate,endDate,website,facebook,whatsapp,location}) {

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion sx={{backgroundColor: 'white'}} expanded={expanded === eventName} onChange={handleChange(eventName)}>

        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Stack direction="row" spacing={3}>
         {type === 'food' ? <FastfoodIcon />: type === 'devotional'? <TempleHinduTwoToneIcon />:type === 'movie'? <MovieCreationTwoToneIcon />:<CelebrationTwoToneIcon />}
           <Typography>{eventName}</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          To book / register / watch more for information <br /><br />
          {website? <a href={website} target="_blank" ><PublicIcon /></a>:''}
          {facebook? <a href={facebook} target="_blank" ><FacebookIcon /></a>:''}
          {whatsapp? <a href={whatsapp} target="_blank" ><WhatsAppIcon /></a>:''}

          </Typography><br />
          {"Location: "+location}<br /><br />
        <br />
        <Stack direction="row" spacing={2}>
          {startDate ? <Chip label={"Start : " + startDate} color="success" variant="outlined" />:''}
          {endDate ? <Chip label={"End: "+ endDate} color="error" variant="outlined" />:''}
        </Stack>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
