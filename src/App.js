import data from './utilities/response.json';
import data1 from './utilities/questionres.json';
import event from './utilities/events.json';
import Bodyc from './bodyc';
import ResponsiveAppBar from "./components/responsiveAppBar";
import axios from 'axios';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import React from 'react';
import CustomizedEventAccordions from './components/customizedEventAccordions';
import _ from 'underscore';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {lime, purple} from '@mui/material/colors';

function App() {
 const [indexData,setIndexData] = React.useState(null);
 const [eventData,setEventData] = React.useState(null);
 const [faqData,setFaqData] = React.useState(null);
 const [flag,setFlag] = React.useState(false);

 const endpoints = [
   'https://sachadigi.com/freshdb/categoryindexes',
   'https://sachadigi.com/freshdb/eventamenities',
   'https://sachadigi.com/freshdb/faqs'
 ];

 React.useEffect(()=>{
   axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
     axios.spread(({data: index}, {data:event}, {data:faq}) => {
     setIndexData(index);
     setEventData(event);
     setFaqData(faq);
     setFlag(true);
     })
   );
 },[]);
const dataFormat = (dat) => {
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d= new Date(dat);
return d.getDate()+'-'+months[d.getMonth()] +'-'+d.getFullYear();
}
const dateCheck = (d1) => {
    var date1 = new Date(d1).getTime()+86400000;
    var date2 = new Date().getTime();
    if (date1 < date2) {
         return 1;
    } else if (date1 > date2) {
         return 2;
    } else {
         return 2;
    }
    }
    const notificationEvent = _.sortBy(_.filter(eventData,function(item) {
                                                             return dateCheck(item.startDate) !== 1;
                                                         }),'endDate');
    const accordianEvent = _.sortBy(notificationEvent, 'startDate').map(link => <CustomizedEventAccordions type={link.type} eventName={link.name+" on "+dataFormat(link.startDate)} endDate={link.endDate} startDate={link.startDate} website={link.website} facebook={link.facebook} whatsapp={link.whatsapp} location={link.mapLocation} price={link.price}  city={link.city}  desc={link.desc}  timeSlot={link.timeSlot}/>);
  const theme = createTheme({
    palette: {
      primary : {
      main: '#9FE870',
      light: '#163300',
      contrastText: '#260A2F'
      }
    }
  })

  return (
  <div>
  <ThemeProvider theme={theme} >
    <div className="">
       {flag ? "": <Box sx={{ width: '100%' }}>
                         <LinearProgress />
                       </Box> }
      <ResponsiveAppBar events={notificationEvent}/>
      </div>
      {indexData ? <Bodyc data={indexData} query={faqData} event={accordianEvent} notificationEvent={notificationEvent}/> : 'It\'s trying to load ! If you are seeing an empty page, try to refresh browser'}
    </ThemeProvider>
    </div>
  );
}

export default App;
