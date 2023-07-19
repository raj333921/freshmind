import data from './utilities/response.json';
import data1 from './utilities/questionres.json';
import event from './utilities/events.json';
import Bodyc from './bodyc';
import ResponsiveAppBar from "./components/responsiveAppBar";

function App() {
  return (
  <div>
    <div className="">
      <ResponsiveAppBar />
      </div>
      <Bodyc data={data.data} query={data1.data} event={event.data}/>
    </div>
  );
}

export default App;
