import data from './utilities/response.json';
import data1 from './utilities/questionres.json';
import event from './utilities/events.json';
import Bodyc from './bodyc';
import ResponsiveAppBar from "./components/responsiveAppBar";
import axios from 'axios';
import React from 'react';

function App() {
 const [indexData,setIndexData] = React.useState(null);
 const [eventData,setEventData] = React.useState(null);
 const [faqData,setFaqData] = React.useState(null);

 const endpoints = [
   '/freshdb/categoryindexes',
   '/freshdb/events',
   '/freshdb/faq'
 ];

 React.useEffect(()=>{
   axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
     axios.spread(({data: index}, {data:event}, {data:faq}) => {
     setIndexData(index);
     setEventData(event);
     setFaqData(faq);
     })
   );
 },[]);

  return (
  <div>
    <div className="">
      <ResponsiveAppBar />
      </div>
      {indexData ? <Bodyc data={indexData} query={faqData} event={eventData}/> : ''}
    </div>
  );
}

export default App;
