import './App.css';
import Accordion from './components/accordion';
import ImageSlider from './components/imageSlider';
import LoadMoreButton from './components/loadMoreButton';
import RandomColor from './components/randomColor';
import StarRating from './components/starRating';
import TreeView from './components/treeView';
import QrCodeGenerator from './components/qrCodeGenerator';
import menus from './components/treeView/data';
import LightDarkTheme from './components/lightDarkTheme';

function App() {
	return (
		<div className='App'>
			<Accordion />
			<RandomColor />
			<StarRating starAmount='10' />
			<ImageSlider url='https://picsum.photos/v2/list' page='1' limit='10' />
			<LoadMoreButton url='https://dummyjson.com/products' limit='20' />
			<TreeView list={menus} />
			<QrCodeGenerator />
			<LightDarkTheme />
		</div>
	);
}

export default App;
