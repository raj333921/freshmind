import data from './utilities/response.json';
import data1 from './utilities/questionres.json';
import event from './utilities/events.json';
import Bodyc from './bodyc';
import ResponsiveAppBar from "./components/responsiveAppBar";
import axios from 'axios';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import React from 'react';

function App() {
 const [indexData,setIndexData] = React.useState(null);
 const [eventData,setEventData] = React.useState(null);
 const [faqData,setFaqData] = React.useState(null);
 const [flag,setFlag] = React.useState(false);

 const endpoints = [
   'https://sachadigi.com/freshdb/categoryindexes',
   'https://sachadigi.com/freshdb/events',
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

  return (
  <div>
    <div className="">
       {flag ? "": <Box sx={{ width: '100%' }}>
                         <LinearProgress />
                       </Box> }
      <ResponsiveAppBar />
      </div>
      {indexData ? <Bodyc data={indexData} query={faqData} event={eventData}/> : 'It\'s trying to load ! If you are seeing an empty page, try to refresh browser'}
    </div>
  );
}

export default App;
