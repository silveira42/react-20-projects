import React from 'react';
import './styles.css';

export default function Tabs({ tabsContent, onChange, theme }) {
	const [currentTabIndex, setCurrentTabIndex] = React.useState(0);

	function handleOnClick(currentTab) {
		setCurrentTabIndex(currentTab);
		onChange(currentTab);
	}

	return (
		<div className='tabs-wrapper' data-theme={theme}>
			<div className='tabs-header'>
				{tabsContent.map((tabItem, index) => (
					<div
						key={tabItem.label}
						className='tab-item'
						onClick={() => handleOnClick(index)}
					>
						<span className='tab-label'>{tabItem.label}</span>
					</div>
				))}
			</div>
			<div className='tabs-content'>
				{tabsContent[currentTabIndex] &&
				tabsContent[currentTabIndex].content ? (
					<div>{tabsContent[currentTabIndex].content}</div>
				) : null}
			</div>
		</div>
	);
}
