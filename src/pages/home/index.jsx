import Accordion from '../../components/accordion';
import ImageSlider from '../../components/imageSlider';
import LoadMoreButton from '../../components/loadMoreButton';
import RandomColor from '../../components/randomColor';
import StarRating from '../../components/starRating';
import TreeView from '../../components/treeView';
import QrCodeGenerator from '../../components/qrCodeGenerator';
import LightDarkTheme from '../../components/lightDarkTheme';

import menus from '../../components/treeView/data';
import ScrollIndicator from '../../components/scrollIndicator';
import Tabs from '../../components/tabs';

export default function Home({ onToggleTheme, theme, scrollPercentage }) {
	const tabsContent = [
		{
			label: 'Tab 1',
			content: <div>Example</div>,
		},
		{
			label: 'Tab 2',
			content: <div>Examplegerger</div>,
		},
		{
			label: 'Tab 3',
			content: <div>adsfhgtshtrhj</div>,
		},
	];

	function handleTabChange(currentTab) {
		console.log(currentTab);
	}

	return (
		<div className='home-wrapper'>
			<LightDarkTheme theme={theme} onToggle={onToggleTheme} />
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
			<Tabs
				tabsContent={tabsContent}
				onChange={handleTabChange}
				theme={theme}
			/>
			<ScrollIndicator scrollPercentage={scrollPercentage} />
		</div>
	);
}
