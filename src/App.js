import './App.css';
import Home from './pages/home';

import useLocalStorage from './util/useLocalStorage';

function App() {
	const [theme, setTheme] = useLocalStorage();

	function handleToggleTheme() {
		setTheme(theme === 'light' ? 'dark' : 'light');
	}

	return (
		<div className='App'>
			<Home onToggleTheme={handleToggleTheme} theme={theme} />
		</div>
	);
}

export default App;
