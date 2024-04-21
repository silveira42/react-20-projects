import './App.css';
import Accordion from './components/accordion';
import ImageSlider from './components/imageSlider';
import RandomColor from './components/randomColor';
import StarRating from './components/starRating';

function App() {
  return (
    <div className="App">
      <Accordion/>
      <RandomColor/>
			<StarRating/>
			<ImageSlider url="https://picsum.photos/v2/list" page="1" limit="10"/>
    </div>
  );
}

export default App;
