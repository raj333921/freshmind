import CustomizedAccordians from './components/customizedAccordions'
import CustomizedEventAccordions from './components/customizedEventAccordions'
import TimeLinec from './components/timeLinec'
import Tabsc from './components/tabsc'
import _ from 'underscore'
const Bodyc = ({data,query,event}) => {

const dataFormat = (dat) => {
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d= new Date(dat);
return d.getDate()+'-'+months[d.getMonth()] +'-'+d.getFullYear();
}
const accordian = _.sortBy(data, 'categoryName').map(link => <CustomizedAccordians key={link.id} id={link.name} indexList={link.indexes} date={link.date} author={link.author} category={link.category} />);
const accordian_query = query.map(link => <CustomizedAccordians key={link.id} id={link.question} answer={link.answer} date={link.created_at} author={link.author} category={link.category} />);
const accordian_event = _.sortBy(event, 'startDate').reverse().map(link => <CustomizedEventAccordions type={link.type} eventName={link.name+" on "+dataFormat(link.startDate)} endDate={link.endDate} startDate={link.startDate} website={link.website} facebook={link.facebook} whatsapp={link.whatsapp} location={link.location}/>);

const eventTimeLine = _.sortBy(event, 'eventId').reverse().map(link => <TimeLinec event={link}/>);
return(
<div>
<Tabsc accordian={accordian} search={data} accordian_query={accordian_query} searchQuery={query} event={accordian_event} />
</div>
)
}

export default Bodyc;