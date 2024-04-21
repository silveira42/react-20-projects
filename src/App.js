import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/randomColor';
import StarRating from './components/starRating';

function App() {
  return (
    <div className="App">
      <Accordion/>
      <RandomColor/>
			<StarRating/>
    </div>
  );
}

export default App;
