import React from 'react';
import './App.css';
import Home from './pages/home';

import useLocalStorage from './util/useLocalStorage';

function App() {
	const [theme, setTheme] = useLocalStorage();
	const [scrollPercentage, setScrollPercentage] = React.useState(0);

	function handleToggleTheme() {
		setTheme(theme === 'light' ? 'dark' : 'light');
	}

	function handleScrollPercentage() {
		console.log(
			document.body.scrollTop,
			document.documentElement.scrollTop,
			document.documentElement.scrollHeight,
			document.documentElement.clientHeight
		);

		const howMuchScrolled =
			document.body.scrollTop || document.documentElement.scrollTop;

		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;

		setScrollPercentage((howMuchScrolled / height) * 100);
	}

	React.useEffect(() => {
		window.addEventListener('scroll', handleScrollPercentage);

		return () => {
			window.removeEventListener('scroll', () => {});
		};
	}, []);

	return (
		<div className='App'>
			<Home
				onToggleTheme={handleToggleTheme}
				theme={theme}
				scrollPercentage={scrollPercentage}
			/>
		</div>
	);
}

export default App;
