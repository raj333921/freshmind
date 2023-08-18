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

export default function CustomizedAccordions({id,key,indexList,answer,author,date,category}) {

  const cardDev = indexList?.map(index => <Cardc url={index.url} name={index.name} desc={index.desc} img={index.img}></Cardc> );
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion sx={{backgroundColor: 'white'}} expanded={expanded === id} onChange={handleChange(id)}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>{id}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        {cardDev}
        <div dangerouslySetInnerHTML={{__html: answer ? answer : ''}} />
        <br />
        <Stack direction="row" spacing={4}>
          {date ? <Chip label={date} color="primary" variant="outlined" />:''}
          {author ? <Chip label={author} color="success" variant="outlined" />:''}
        </Stack>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
