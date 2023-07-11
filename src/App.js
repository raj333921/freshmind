import data from './utilities/response.json';
import data1 from './utilities/questionres.json';
import Bodyc from './bodyc';
import ResponsiveAppBar from "./components/responsiveAppBar";

function App() {
  return (
  <div>
    <div className="">
      <ResponsiveAppBar />
      </div>
      <Bodyc data={data.data} query={data1.data} />

    <div class="copyright-text">
      <p>
        <span class="year"></span> Supported by <b>Rajesh Varikuntla</b>
      </p>
    </div>
    </div>
  );
}

export default App;
