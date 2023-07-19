import CustomizedAccordians from './components/customizedAccordions'
import TimeLinec from './components/timeLinec'
import Tabsc from './components/tabsc'
const Bodyc = ({data,query,event}) => {
const accordian = data.map(link => <CustomizedAccordians key={link.id} id={link.id} indexList={link.indexList} date={link.date} author={link.author} category={link.category} />);
const accordian_query = query.map(link => <CustomizedAccordians key={link.id} id={link.question} answer={link.answer} date={link.date} author={link.author} category={link.category} />);
const eventTimeLine = event.map(link => <TimeLinec event={link}/>);
return(
<div>
<Tabsc accordian={accordian} search={data} accordian_query={accordian_query} searchQuery={query} event={eventTimeLine}/>
</div>
)
}

export default Bodyc;