import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import FreeSolo from './freeSolo';
import FreeSoloQuery from './freeSoloQuery';
import CardImage from './cardImage';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import _ from 'underscore';
import CustomizedEventAccordions from './customizedEventAccordions';
import Grid from '@mui/material/Grid';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Tabsc({accordian,accordian_query,searchQuery,search,event,notificationEvent}) {
  const [value, setValue] = React.useState(0);
  const [eventFilter, setEventFilter] = React.useState(event);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const typeEvent =(typeStr)=> { return _.sortBy(_.filter(notificationEvent,function(item) {
                                                               return item.type === typeStr;
                                                           }),'endDate');
                                                           }
    const dataFormat = (dat) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var d= new Date(dat);
        return d.getDate()+'-'+months[d.getMonth()] +'-'+d.getFullYear();
    }
   const accordianEvent = (type)=> _.sortBy(typeEvent(type), 'startDate').map(link => <CustomizedEventAccordions type={link.type} eventName={link.name+" on "+dataFormat(link.startDate)} endDate={link.endDate} startDate={link.startDate} website={link.website} facebook={link.facebook} whatsapp={link.whatsapp} location={link.mapLocation} price={link.price}/>);
   function click(event){
        setEventFilter(accordianEvent(event));
   }
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} selectionFollowsFocus centered>
               <Tab icon={<EventAvailableIcon />} iconPosition="end" label="Events" {...a11yProps(0)}/>
              <Tab icon={<BookmarksIcon />} label="Go To Web" iconPosition="end" {...a11yProps(1)}/>
              <Tab icon={<QuestionAnswerIcon />} iconPosition="end" label="Advice" {...a11yProps(2)}/>
            </Tabs>
          </Box>
        <TabPanel value={value} index={0} >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
           {typeEvent('movie').length > 0 ? <Grid item xs={1} sm={4} md={4} onClick={() => {click('movie')}}>
              <CardImage type="movie" name="" count={typeEvent('movie').length}  /><br/>
            </Grid>:''}
            {typeEvent('celebration').length > 0 ?<Grid item xs={1} sm={4} md={4} onClick={() => {click('celebration')}}>
           <CardImage type="celebration" name="" count={typeEvent('celebration').length}/><br/>
                        </Grid>:''}
           {typeEvent('devotional').length > 0 ? <Grid item xs={1} sm={4} md={4} onClick={() => {click('devotional')}}>
           <CardImage type="devotional" name="" count={typeEvent('devotional').length}/><br/>
                        </Grid>:''}
           {typeEvent('food').length > 0 ? <Grid item xs={1} sm={4} md={4} onClick={() => {click('food')}}>
           <CardImage type="food" name="" count={typeEvent('food').length}/><br/>
                        </Grid>: ''}
        </Grid>
          {eventFilter}
        </TabPanel>
        <TabPanel value={value} index={1} >
          <FreeSolo search={search} />
          <br/>
          {accordian}
        </TabPanel>
        <TabPanel value={value} index={2} >
          <FreeSoloQuery search={searchQuery} />
                   <br/>

          {accordian_query}
        </TabPanel>
        <TabPanel value={value} index={3} >
          We love to serve ... ! let you know ;)
        </TabPanel>
    </Box>
  );
}