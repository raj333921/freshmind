import CustomizedAccordians from './components/customizedAccordions'
import CustomizedEventAccordions from './components/customizedEventAccordions'
import TimeLinec from './components/timeLinec'
import Tabsc from './components/tabsc'
import _ from 'underscore'
const Bodyc = ({data,query,event}) => {
const accordian = _.sortBy(data, 'categoryName').map(link => <CustomizedAccordians key={link.categoryId} id={link.categoryName} indexList={link.indexes} date={link.date} author={link.author} category={link.category} />);
const accordian_query = query.map(link => <CustomizedAccordians key={link.faqId} id={link.faqQuestion} answer={link.faqAnswer} date={link.created_at} author={link.faqAuthor} category={link.faqCategory} />);
const accordian_event = _.sortBy(event, 'created_at').reverse().map(link => <CustomizedEventAccordions type={link.type} eventName={link.eventName+" on "+link.eventStartDate} endDate={link.eventEndDate} startDate={link.eventStartDate} website={link.website} facebook={link.facebook} whatsapp={link.whatsapp} location={link.location}/>);

const eventTimeLine = _.sortBy(event, 'eventId').reverse().map(link => <TimeLinec event={link}/>);
return(
<div>
<Tabsc accordian={accordian} search={data} accordian_query={accordian_query} searchQuery={query} event={accordian_event} />
</div>
)
}

export default Bodyc;