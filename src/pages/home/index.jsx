import Accordion from '../../components/accordion';
import ImageSlider from '../../components/imageSlider';
import LoadMoreButton from '../../components/loadMoreButton';
import RandomColor from '../../components/randomColor';
import StarRating from '../../components/starRating';
import TreeView from '../../components/treeView';
import QrCodeGenerator from '../../components/qrCodeGenerator';
import menus from '../../components/treeView/data';
import LightDarkTheme from '../../components/lightDarkTheme';

export default function Home({ onToggleTheme, theme }) {
	return (
		<div className='App'>
			<Accordion theme={theme} />
			<RandomColor theme={theme} />
			<StarRating theme={theme} starAmount='10' />
			<ImageSlider
				theme={theme}
				url='https://picsum.photos/v2/list'
				page='1'
				limit='10'
			/>
			<LoadMoreButton
				theme={theme}
				url='https://dummyjson.com/products'
				limit='20'
			/>
			<TreeView theme={theme} list={menus} />
			<QrCodeGenerator theme={theme} />
			<LightDarkTheme theme={theme} onToggle={onToggleTheme} />
		</div>
	);
}
