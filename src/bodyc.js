import CustomizedAccordians from './components/customizedAccordions'
import TimeLinec from './components/timeLinec'
import Tabsc from './components/tabsc'
import _ from 'underscore'
const Bodyc = ({data,query,event}) => {
const accordian = _.sortBy(data, 'categoryName').map(link => <CustomizedAccordians key={link.categoryId} id={link.categoryName} indexList={link.indexes} date={link.date} author={link.author} category={link.category} />);
const accordian_query = query.map(link => <CustomizedAccordians key={link.faqId} id={link.faqQuestion} answer={link.faqAnswer} date={link.created_at} author={link.faqAuthor} category={link.faqCategory} />);
const eventTimeLine = _.sortBy(event, 'eventId').reverse().map(link => <TimeLinec event={link}/>);
return(
<div>
<Tabsc accordian={accordian} search={data} accordian_query={accordian_query} searchQuery={query} event={eventTimeLine}/>
</div>
)
}

export default Bodyc;