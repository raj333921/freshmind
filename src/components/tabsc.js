import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import FreeSolo from './freeSolo';
import FreeSoloQuery from './freeSoloQuery';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

export default function Tabsc({accordian,accordian_query,searchQuery,search,event}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
          {event}
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